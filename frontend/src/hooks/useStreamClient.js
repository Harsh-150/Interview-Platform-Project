import { useState, useEffect, useCallback } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream.js";
import { sessionApi } from "../api/sessions";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const { user: authUser } = useUser();
  const navigate = useNavigate();

  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    let mounted = true;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "completed") return;

      try {
        const resp = await sessionApi.getStreamToken();

        // token / user id heuristics
        const token =
          resp?.token ?? resp?.videoToken ?? resp?.chatToken ?? resp?.data?.token;
        const userId = resp?.userId ?? resp?.id ?? authUser?.id;
        const userName =
          resp?.userName ?? resp?.name ?? authUser?.fullName ?? "User";
        const userImage = resp?.userImage ?? resp?.image ?? authUser?.imageUrl;

        if (!userId || !token) {
          console.warn("Missing user ID or Token");
          return;
        }

        // 1) initialize video client
        const client = await initializeStreamClient(
          { id: userId, name: userName, image: userImage },
          token
        );
        if (!mounted) return;
        setStreamClient(client);

        // 2) join call
        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        if (!mounted) return;
        setCall(videoCall);

        // 3) init chat client
        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          { id: userId, name: userName, image: userImage },
          token
        );
        if (!mounted) return;
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        if (!mounted) return;
        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    // cleanup
    return () => {
      mounted = false;
      (async () => {
        try {
          if (videoCall) {
            if (typeof videoCall.leave === "function") {
              await videoCall.leave();
            } else if (typeof videoCall.hangup === "function") {
              await videoCall.hangup();
            }
          }
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, loadingSession, isHost, isParticipant, authUser]);

  // Robust endSession implementation using sessionApi.endSession
  const endSession = useCallback(async () => {
    if (!session?._id && !session?.id) {
      const idHint = session?.id ?? session?._id ?? "(no-id)";
      const err = new Error(`endSession: no session id available (${idHint})`);
      console.error(err);
      throw err;
    }

    const sessionId = session._id ?? session.id;

    try {
      // 1) Attempt to stop the live call (try multiple methods)
      if (call) {
        try {
          if (typeof call.endCall === "function") {
            await call.endCall();
            console.log("endSession: used call.endCall()");
          } else if (typeof call.hangup === "function") {
            await call.hangup();
            console.log("endSession: used call.hangup()");
          } else if (typeof call.leave === "function") {
            // leave removes this participant but helps clean up local state
            await call.leave();
            console.log("endSession: used call.leave()");
          } else {
            console.warn("endSession: no known stop method on call object", call);
          }
        } catch (streamErr) {
          console.error("endSession: error while attempting to stop call:", streamErr);
          // continue — we still want to try updating the DB
        }

        // disconnect stream client if available
        try {
          if (streamClient && typeof streamClient.disconnect === "function") {
            await streamClient.disconnect();
            console.log("endSession: disconnected streamClient");
          } else {
            await disconnectStreamClient();
            console.log("endSession: disconnected via helper");
          }
        } catch (dcErr) {
          console.error("endSession: failed to disconnect stream client:", dcErr);
        }
      } else {
        console.warn("endSession: call object is undefined; will still update DB");
      }

      // 2) Disconnect chat client if present
      try {
        if (chatClient && typeof chatClient.disconnectUser === "function") {
          await chatClient.disconnectUser();
          console.log("endSession: chat client disconnected");
        }
      } catch (chatErr) {
        console.error("endSession: failed to disconnect chat client:", chatErr);
      }

      // 3) Update backend to mark session as completed using your sessions.js helper
      try {
        // sessions.js exposes sessionApi.endSession(id) -> POST /sessions/:id/end
        await sessionApi.endSession(sessionId);
        console.log("endSession: session updated to completed via sessionApi.endSession()");
      } catch (apiErr) {
        console.error(
          "endSession: failed to update session status via sessionApi.endSession():",
          apiErr
        );
        // Bubble up so UI shows an error
        throw apiErr;
      }

      toast.success("Session ended successfully");

      // 4) navigate away
      navigate("/dashboard");

      return { ok: true };
    } catch (error) {
      console.error("endSession failed:", error);
      toast.error("Failed to end session — see console");
      throw error;
    }
  }, [call, session, streamClient, chatClient, navigate]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
    endSession,
  };
}

export default useStreamClient;
