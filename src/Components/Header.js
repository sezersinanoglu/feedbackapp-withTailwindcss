import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="w-full">
      <div className="container max-w-3xl mx-auto bg-slate-900 rounded-sm h-10">
        <Link to="/" style={{ textDecoration: "none", color: "#ff6a95" }} />
        <h2 className="text-center font-bold">Feedback UI</h2>
      </div>
    </header>
  );
}


export default Header;
