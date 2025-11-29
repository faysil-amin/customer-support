import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="py-5  bg-white shadow">
      <Container>
        <div className="navbar inter">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Download</li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>
          <div className=" hidden lg:flex">
            <ul className="flex items-center gap-6">
              <li>Home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Download</li>
            </ul>
          </div>
          <div>
            <a className="ml-8 bg-linear-to-tl from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-sm text-white text-xl">
              {" "}
              + New Ticket
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
