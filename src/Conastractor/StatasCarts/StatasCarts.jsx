import React from "react";

const StatasCarts = ({ res, dataFunction }) => {
  const handleClick = (removecart) => {
    dataFunction(removecart);
  };
  return (
    <div>
      <div className=" mt-3 bg-white shadow-xl rounded-xl px-4 py-7 flex flex-col items-center justify-center">
        <h1 className="text-[22px] font-medium">{res.title}</h1>
        <button
          onClick={() => {
            handleClick(res);
          }}
          className="py-3 bg-[#02A53B] rounded-xl w-full mt-2 text-white text-xl"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default StatasCarts;
