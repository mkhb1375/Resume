"use client";
import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import { SwiperEvents } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "./Api/Comments";

interface Comment {
  percentage: string;
  arrow: string;
  color: string;
  name: string;
  role: string;
  text: string;
  url: string;
}

type SwiperEvent = keyof SwiperEvents;

interface SwiperInstance extends Swiper {
  on(event: SwiperEvent, callback: () => void): void;
}

export default function CommentsSlider() {
  const swiperElRef = useRef<HTMLDivElement | null>(null);
  const [isPrevButtonClickable, setIsPrevButtonClickable] =
    useState<boolean>(true);
  const [isNextButtonClickable, setIsNextButtonClickable] =
    useState<boolean>(true);
  const comments = Comments;

  useEffect(() => {
    let swiper: SwiperInstance | null = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: 500,
        spaceBetween: 50,
        slidesPerView: 2,
      });

      swiper.on("slideChange", () => {
        setIsPrevButtonClickable(!swiper?.isBeginning);
        setIsNextButtonClickable(!swiper?.isEnd);
      });

      setIsPrevButtonClickable(!swiper.isBeginning);
      setIsNextButtonClickable(!swiper.isEnd);

      const handleNextClick = () => {
        if (swiper && !swiper.destroyed) {
          swiper?.slideNext();
        }
      };

      const handlePrevClick = () => {
        if (swiper && !swiper.destroyed) {
          swiper?.slidePrev();
        }
      };

      const customNextButton = document.getElementById("customNextButton");
      const customPrevButton = document.getElementById("customPrevButton");

      if (customNextButton) {
        customNextButton.addEventListener("click", handleNextClick);
      }

      if (customPrevButton) {
        customPrevButton.addEventListener("click", handlePrevClick);
      }
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6  lg:flex items-center justify-between bg-[white] flex-row">
      <div className="text-center lg:text-right">
        <p className="text-grayed text-[0.9rem] font-[300] mb-[2rem]">
          تجربه مدیراین کسب و کاری که به ما اعتماد کردن
        </p>
        <h1 className=" text-[2rem] font-[700] mb-[2rem]">
          در مورد <span className="font-[900] text-[#0CA0A2]">متانکست</span> چه
          میشنویم?
        </h1>
        <div className="block mb-[3vh] w-fit mx-auto lg:mx-0 flex items-center">
          <img
            className="lg:w-[5vw] w-[10vw]"
            id="customNextButton"
            src={
              isNextButtonClickable
                ? "/remoteManagement/Button.png"
                : "/remoteManagement/ButtonGrayed.png"
            }
            alt=""
            style={{
              cursor: isNextButtonClickable ? "pointer" : "not-allowed",
            }}
          />
          <img
            className="lg:w-[5vw] w-[10vw]"
            src="/remoteManagement/Group 70175.png"
            alt=""
          />
          <img
            className="lg:w-[5vw] w-[10vw]"
            id="customPrevButton"
            src={
              isPrevButtonClickable
                ? "/remoteManagement/Button.png"
                : "/remoteManagement/ButtonGrayed.png"
            }
            alt=""
            style={{
              cursor: isPrevButtonClickable ? "pointer" : "not-allowed",
              transform: "rotate(180deg)",
            }}
          />
        </div>
      </div>
      <div
        className="swiper-container overflow-hidden w-full lg:w-[80vw] lg:mr-[-5vw] mx-auto lg:mx-0"
        ref={swiperElRef}
      >
        <div className="swiper-wrapper">
          {comments.map((comment: Comment, idx: number) => {
            return (
              <div
                key={idx}
                className="w-[40vw] lg:w-[35vw] swiper-slide p-8 bg-[#F5F8FC] rounded-[20px]"
              >
                <img src={comment.arrow} alt="" />
                <div
                  style={{ color: comment.color }}
                  className={`flex mt-[4vh] justify-between items-center `}
                >
                  <p className="text-[1.5rem] font-[700]">
                    {"%" + comment.percentage + "+"}
                  </p>
                  <p className="p-2 rounded-[6px] bg-[#35D5A51A] text-center w-fit">
                    افزایش سود مشتری
                  </p>
                </div>
                <h1 className="text-[1.5rem] font-[800] mt-[6vh]">
                  {comment.name}
                </h1>
                <p className="text-[1rem] font-[500] text-[#0CA0A2] mt-[3vh]">
                  {comment.role}
                </p>
                <p className="text-[0.9rem] font-[300] text-grayed mt-[3vh]">
                  {comment.text}
                </p>
                <img
                  className="mx-auto w-full my-10"
                  src={comment.url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
