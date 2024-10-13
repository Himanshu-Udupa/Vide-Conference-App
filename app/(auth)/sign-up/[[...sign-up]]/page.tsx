import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex h-full pt-10 pb-10 w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
