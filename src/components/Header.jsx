"use client";
import { useRouter } from "next/navigation";
import React from "react";
const Nav = () => {
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
    // other task can be executed parallelly
  };
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav">
        <div className="nav-items">
          <button onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/colleges")}>colleges</button>
          <button onClick={() => router.push("/about")}>About</button>
          <button onClick={handleContactClick}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;