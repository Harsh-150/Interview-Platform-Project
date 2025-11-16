import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton
} from "@clerk/clerk-react";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

function HomePage() {
  return (
    <>
     <button className="btn btn-secondary" onClick={()=>toast.error("this is a success toast")}>click me</button>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="" onClick={()=>toast.success("This is a success toast")}>Sign Up Please</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton></SignOutButton>
      </SignedIn>

      <UserButton />
    </>
  );
}

export default HomePage;
