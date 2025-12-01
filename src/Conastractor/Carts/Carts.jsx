import React from "react";
import { toast } from "react-toastify";

const Carts = ({ res, setReachiv, reachiv }) => {
  const handleClick = (res) => {
    setReachiv([...reachiv, res]);
  };
  return (
    <div
      onClick={() => {
        handleClick(res);
        toast(`Card Selected`);
      }}
    >
      <div className="bg-white shadow-xl px-8 py-5 rounded-xl">
        <div>
          <div className="flex items-center justify-between text-2xl">
            <h1 className="font-semibold">{res.title}</h1>
            <div
              className={`px-4 py-2 rounded-4xl text-green-50 ${
                res.status === "Open"
                  ? "bg-[#b9f8cf]  text-green-500"
                  : res.status === "In Progress"
                  ? "bg-yellow-200 text-yellow-500"
                  : "bg-red-200 text-red-500"
              } flex items-center`}
            >
              <i class="fa-solid fa-circle"></i>
              <p className="ml-2">{res.status}</p>
            </div>
          </div>
          <p className="text-[#627382] text-base">{res.description}</p>
          <div className="text-[#627382] text-base flex items-center justify-between mt-4">
            <div className="flex items-center ">
              <p># {res.id}</p>
              <p
                className={`ml-5 ${
                  res.priority === "High"
                    ? "text-red-500"
                    : res.priority === "Medium"
                    ? "text-yellow-400"
                    : "text-green-500"
                }`}
              >
                {res.priority}
              </p>
            </div>
            <div className="flex items-center ">
              <p className="mr-5">{res.customer}</p>
              <i class="fa-solid fa-calendar"></i>
              <p className="ml-2">{res.createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
