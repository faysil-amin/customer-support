import React from "react";
import Container from "../Container/Container";
import BackgroundColor from "../BackgroundColor/BackgroundColor";

const CoundBoxs = () => {
  return (
    <div>
      <BackgroundColor>
        <Container>
          <div className="mt-6">
            <div className="bg-linear-to-tl from-[#9F62F2] to-[#632EE3]">
              <p className="text-white text-ms">In-Progress</p>
              <h1 className="text-2xl text-white">0</h1>
            </div>
          </div>
        </Container>
      </BackgroundColor>
    </div>
  );
};

export default CoundBoxs;
