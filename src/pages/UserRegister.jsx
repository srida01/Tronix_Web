import React from "react";
import { SignUp } from "@clerk/clerk-react";

function UserRegister() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp
        signInUrl="/register/sign-in"
        afterSignUpUrl="/dashboard" // Directly redirect after signup
      />
    </div>
  );
}

export default UserRegister;
