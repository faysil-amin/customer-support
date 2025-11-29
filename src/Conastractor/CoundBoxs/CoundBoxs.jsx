import React from "react";
import Container from "../Container/Container";
const CoundBoxs = () => {
  return (
    <div>
      <Container>
        <div className="py-15 grid  md:grid-cols-2 gap-10">
          <div className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3] rounded-xl ">
            <div className="flex flex-col items-center justify-center py-20 countbox-bg1">
              <p className="text-white text-xl">In-Progress</p>
              <h1 className="text-8xl text-white">0</h1>
            </div>
          </div>
          <div className="bg-linear-to-bl from-[#00827A] to-[#54CF68]  rounded-xl">
            <div className="flex flex-col items-center justify-center py-20 countbox-bg1">
              <p className="text-white text-xl">In-Progress</p>
              <h1 className="text-8xl text-white">0</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoundBoxs;
