import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon, PhoneOffIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

/**
 * Props added:
 *  - isHost: boolean (true for host)
 *  - onEndCall: async function provided by useStreamClient (should end session for everyone)
 *  - callInstance: the Stream Call object (optional) so participants can leave locally
 */
function VideoCallUI({ chatClient, channel, isHost = false, onEndCall, callInstance }) {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEnding, setIsEnding] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg">Joining call...</p>
        </div>
      </div>
    );
  }

  const handleCutClick = async () => {
    if (isHost) {
      const confirmed = confirm("End session for everyone? This will notify participants and close the session.");
      if (!confirmed) return;
      if (!onEndCall) {
        console.warn("onEndCall not provided");
        return;
      }
      try {
        setIsEnding(true);
        // Await the hook-provided function which should stop the call, update DB and navigate
        await onEndCall();
      } catch (err) {
        console.error("Failed to end session:", err);
        // optionally show a toast here
      } finally {
        setIsEnding(false);
      }
    } else {
      // Participant: try to gracefully leave the call locally, then navigate
      try {
        setIsEnding(true);
        if (callInstance && typeof callInstance.leave === "function") {
          await callInstance.leave();
        } else if (callInstance && typeof callInstance.hangup === "function") {
          await callInstance.hangup();
        } else {
          // fallback: just navigate away (call likely cleaned server-side later)
          console.warn("callInstance.leave/hangup not available; navigating away");
        }
        navigate("/dashboard");
      } catch (err) {
        console.error("Failed to leave call:", err);
      } finally {
        setIsEnding(false);
      }
    }
  };

  return (
    <div className="h-full flex gap-3 relative str-video">
      <div className="flex-1 flex flex-col gap-3">
        {/* Participants count badge and Chat Toggle */}
        <div className="flex items-center justify-between gap-2 bg-base-100 p-3 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-primary" />
            <span className="font-semibold">
              {participantCount} {participantCount === 1 ? "participant" : "participants"}
            </span>
          </div>
          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`btn btn-sm gap-2 ${isChatOpen ? "btn-primary" : "btn-ghost"}`}
              title={isChatOpen ? "Hide chat" : "Show chat"}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        <div className="flex-1 bg-base-300 rounded-lg overflow-hidden relative">
          <SpeakerLayout />
        </div>

        <div className="bg-base-100 p-3 rounded-lg shadow flex justify-center items-center gap-3">
          {/* Keep the default CallControls */}
          <CallControls onLeave={() => navigate("/dashboard")} />

          {/* Explicit End/Leave button for host/participant with confirmation + loader */}
          <button
            onClick={handleCutClick}
            disabled={isEnding}
            className={`btn ${isHost ? "btn-error" : "btn-ghost"} btn-sm gap-2`}
            title={isHost ? "End session for everyone" : "Leave call"}
          >
            {isEnding ? (
              <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : (
              <PhoneOffIcon className="w-4 h-4" />
            )}
            <span className="ml-1">{isHost ? "End Session" : "Leave"}</span>
          </button>
        </div>
      </div>

      {/* CHAT SECTION */}
      {chatClient && channel && (
        <div
          className={`flex flex-col rounded-lg shadow overflow-hidden bg-[#272a30] transition-all duration-300 ease-in-out ${
            isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {isChatOpen && (
            <>
              <div className="bg-[#1c1e22] p-3 border-b border-[#3a3d44] flex items-center justify-between">
                <h3 className="font-semibold text-white">Session Chat</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Close chat"
                >
                  <XIcon className="size-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden stream-chat-dark">
                <Chat client={chatClient} theme="str-chat__theme-dark">
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default VideoCallUI;
