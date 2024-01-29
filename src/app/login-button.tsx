"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button className="btn btn-primary" onClick={() => signIn("twitter")}>
      Login menggunakan Twitter
    </button>
  );
};

export default LoginButton;
