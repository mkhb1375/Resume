import React from "react";
import PurposeData from "./Api/PurposeData";
interface Card {
  image: string;
  text: string;
  right: number;
  top: number;
}

export default function Purpose() {
  const data = PurposeData;
  return (
    <div>
      <div className="p-[5vw] mt-[100px] lg:hidden w-[90vw] mx-auto bg-[#0CA0A2] lg:overflow-visible overflow-hidden rounded-[70px] relative vector2-opacity">
        <h2 className="text-center text-[46px] font-[800] text-[white]">
          هدف ما در متانکست
        </h2>
        <img
          className="opacity-[60%] mx-auto mt-[25px]"
          src="/Purpose/Vector (1).png"
          alt="vector"
        />
        <p className="text-[white] text-center mt-[25px] leading-10 mx-auto font-[400] text-[19px]">
          {data["text"]}
        </p>
        {data["cards"].map((card: Card, idx) => {
          return (
            <div
              key={idx}
              className="my-scale cursor-[pointer] mx-auto w-[60vw] my-2 flex items-center  bg-[rgba(255,255,255,0.92)] rounded-[24px] "
            >
              <img className="w-[80px] h-[80px]" src={card["image"]} alt="" />
              <p className="text-[20px] font-[700]">{card["text"]}</p>
            </div>
          );
        })}
      </div>
      <div className="p-[5vw] mt-[100px] hidden lg:block w-[45vw] mx-auto bg-[#0CA0A2] lg:overflow-visible overflow-hidden rounded-[70px]  relative vector2-opacity">
        <h2 className="text-center text-[46px] font-[800] text-[white]">
          هدف ما در متانکست
        </h2>
        <img
          className="opacity-[60%] mx-auto mt-[25px]"
          src="/Purpose/Vector (1).png"
          alt="vector"
        />
        <p className="text-[white] text-center mt-[25px] leading-10 mx-auto font-[400] text-[19px]">
          {data["text"]}
        </p>

        {data["cards"].map((card: Card, idx) => {
          return (
            
            <div key={idx}>
               
            <div
              className="my-scale cursor-[pointer] w-max p-[15px] flex items-center absolute 3xl:hidden bg-[rgba(255,255,255,0.92)] rounded-[24px] "
              style={{ right: `${card["right"]}%`, top: `${card["top"]}%` }}
            >
              <img className="w-[80px] h-[80px]" src={card["image"]} alt="" />
              <p className="text-[20px] font-[700]">{card["text"]}</p>
            </div>



            <div
              className="my-scale cursor-[pointer] w-max p-[15px] flex items-center absolute hidden 3xl:flex bg-[rgba(255,255,255,0.92)] rounded-[24px] "
              style={{ right: `${card["right"]+17}%`, top: `${card["top"]}%` }}
            >
              <img className="w-[80px] h-[80px]" src={card["image"]} alt="" />
              <p className="text-[20px] font-[700]">{card["text"]}</p>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
