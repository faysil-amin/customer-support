import React from "react";
import StatasCarts from "../StatasCarts/StatasCarts";

const Textstates = ({ reachiv, dataFunction }) => {
  return (
    <div>
      <h1 className="mt-10 md:mt-0 font-medium text-[#34485a] text-[26px]">
        Task Status
      </h1>
      {reachiv.length === 0 ? (
        <h1>Select a ticket to add to Task Status</h1>
      ) : (
        reachiv.map((res) => (
          <StatasCarts
            key={res.id}
            res={res}
            dataFunction={dataFunction}
          ></StatasCarts>
        ))
      )}
    </div>
  );
};

export default Textstates;
