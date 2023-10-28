"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  return (
    <div className="flex justify-end bg-sky-950 p-5 text-emerald-50 text-right">
      <Link href={"/"} className="mr-5">
        Home
      </Link>
      <Link href={"/users"} className="mr-5">
        Users
      </Link>
      <Link href={"/admin"} className="mr-5">
        Admin
      </Link>
      {status === "authenticated" && (
        <>
          <div className="mr-5">{session.user!.name}</div>
          <Link href={"/api/auth/signout"}>Sign Out</Link>
        </>
      )}
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"} className="mr-5">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
