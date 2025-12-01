import React from "react";

const Resolvecard = ({ res }) => {
  return (
    <div className=" mt-3 bg-white shadow-xl rounded-xl px-4 py-7 ">
      {res.map((res) => (
        <h1 className="text-[22px] font-medium">{res.title}</h1>
      ))}
    </div>
  );
};

export default Resolvecard;
