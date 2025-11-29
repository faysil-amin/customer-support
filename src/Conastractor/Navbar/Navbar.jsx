import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="py-5  bg-white shadow">
      <Container>
        <div className="flex items-center justify-between inter ">
          <div className="text-[24px] font-bold">
            <h1>CS — Ticket System</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center justify-center gap-6">
              <li>Home</li>
              <li>FAQ</li>
              <li>Changelog</li>
              <li>Blog</li>
              <li>Download</li>
              <li>Download</li>
            </ul>
            <button className="ml-8 bg-linear-to-tl from-[#632EE3] to-[#9F62F2] px-6 py-3 rounded-sm text-white text-xl">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
