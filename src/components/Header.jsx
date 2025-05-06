"use client";
import { useRouter } from "next/navigation";
import React from "react";
const Nav = () => {
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
    // other task can be executed parallelly
  };
  const handleAboutClick = () => {
    router.push("/about");
    // other task can be executed parallelly
  };
  const handleHomeClick = () => {
    router.push("/");
    // other task can be executed parallelly
  };
  const handleCollegesClick = () => {
    router.push("/colleges");
    // other task can be executed parallelly
  };
  return (
    <div className="navbar">
      <div className="logo text-2xl font-bold ml-15 mt-5">Logo</div>
      <div className="nav">
        <div className="nav-items flex gap-15 justify-center w-screen font-bold text-2xl -mt-5">
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleCollegesClick}>Colleges</button>
          <button onClick={handleAboutClick}>About</button>
          <button onClick={handleContactClick}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;