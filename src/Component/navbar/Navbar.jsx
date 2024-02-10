import Link from "next/link";
import React from "react";

const Navbar = () => {



  
  return (
    <div>
      <div className="container h-16 flex bg-slate-400 p-3">
        <div className="logo text-white">
          <span className="text-lg font-bold">LOGO</span>
        </div>
        <div className="flex space-x-4 items-center ml-40">
          <Link href={"/"} className="text-white hover:text-gray-300 ">
            Home
          </Link>
          <Link href={"/about"} className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href={"/contact"} className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href={"/blog"} className="text-white hover:text-gray-300">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
