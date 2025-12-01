import React from "react";
import Resolvecard from "../Resolvecard/Resolvecard";

const Resolve = ({ resolve }) => {
  return (
    <div>
      <h1 className="mt-10 md:mt-0 font-medium text-[#34485a] text-[26px]">
        Resolved Task
      </h1>
      {resolve.length === 0 ? (
        <h1>No resolved tasks yet.</h1>
      ) : (
        resolve.map((res) => <Resolvecard res={res}></Resolvecard>)
      )}
    </div>
  );
};

export default Resolve;
