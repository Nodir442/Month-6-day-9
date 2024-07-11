import React from "react";
import { Link, Outlet } from "react-router-dom";
export const MainLoyaut = () => {
  return (
    <>
      <header className="p-5 bg-violet-500 flex justify-center gap-x-9 text-white text-2xl font-bold">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/profile"}>Profile</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="p-8 bg-blue-500 text-white text-2xl font-bold text-center">
        Footer content
      </footer>
    </>
  );
};
