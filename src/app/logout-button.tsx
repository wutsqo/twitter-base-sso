"use client";

import { signOut } from "next-auth/react";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

const LogoutButton = () => {
  return (
    <button className="btn btn-outline btn-sm btn-error" onClick={() => signOut()}>
      <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
      Keluar
    </button>
  );
};

export default LogoutButton;
