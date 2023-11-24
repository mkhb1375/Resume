"use client";
import { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import jalaliMoment from "jalali-moment";
import { SwiperEvents } from "swiper/types";
import articleData from "./Api/ArticleData";

const ArticleData = articleData;

interface Article {
  image: string;
  tag: string;
  title: string;
  duration: number;
  date: string;
}

type SwiperEvent = keyof SwiperEvents;

interface SwiperInstance extends Swiper {
  on(event: SwiperEvent, callback: () => void): void;
}

export default function Articles() {
  const swiperElRef = useRef<HTMLDivElement | null>(null);
  const [isPrevButtonClickable, setIsPrevButtonClickable] =
    useState<boolean>(true);
  const [isNextButtonClickable, setIsNextButtonClickable] =
    useState<boolean>(true);

  useEffect(() => {
    let swiper: SwiperInstance | null = null;

    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      const slidesPerView = screenWidth < 1000 ? 1 : 3; // Adjust the value as needed

      if (swiper && !swiper.destroyed) {
        swiper.params.slidesPerView = slidesPerView;
        swiper.update();
      }
    };

    // Initialize Swiper
    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: 500,
        spaceBetween: 50,
        slidesPerView: 3,
      });

      swiper.on("slideChange", () => {
        setIsPrevButtonClickable(!swiper?.isBeginning);
        setIsNextButtonClickable(!swiper?.isEnd);
      });

      // Set initial state
      setIsPrevButtonClickable(!swiper.isBeginning);
      setIsNextButtonClickable(!swiper.isEnd);

      // Handle window resize to update slidesPerView
      window.addEventListener("resize", updateSlidesPerView);

      // Call the update function on mount
      updateSlidesPerView();

      // Add event listeners for custom buttons
      const handleNextClick = () => {
        if (swiper && !swiper.destroyed) {
          swiper.slideNext();
        }
      };

      const handlePrevClick = () => {
        if (swiper && !swiper.destroyed) {
          swiper.slidePrev();
        }
      };

      const customNextButton2 = document.getElementById("customNextButton2");
      const customPrevButton2 = document.getElementById("customPrevButton2");

      if (customNextButton2) {
        customNextButton2.addEventListener("click", handleNextClick);
      }

      if (customPrevButton2) {
        customPrevButton2.addEventListener("click", handlePrevClick);
      }
    }

    // Cleanup function
    return () => {
      if (swiper) {
        swiper.destroy();
        window.removeEventListener("resize", updateSlidesPerView);
      }
    };
  }, []);
  function toPersianNumerals(input: string) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return input.replace(/\d/g, (match) => persianDigits[+match]);
  }

  return (
    <div className="p-10 mt-[5vh] w-[100vw] overflow-hidden">
      <p className="text-grayed text-[0.9rem] font-[300] mb-[5vh]">
        با شما در مسیر یادگیری هستیم
      </p>

      <div className="flex justify-between mb-[10vh]">
        <h1 className="text-[2rem] font-[700] ">
          جدیدترین <span className="font-[900] text-[#0CA0A2] ">مقالات</span>
        </h1>
        <div className="flex items-center">
          <img
            className="w-[10vw] lg:w-[5vw] "
            id="customNextButton2"
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
            className="w-[10vw] lg:w-[5vw]"
            src="/remoteManagement/Group 70175.png"
            alt=""
          />
          <img
            className="w-[10vw] lg:w-[5vw]"
            id="customPrevButton2"
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
      <div className="swiper-container" ref={swiperElRef}>
        <div className="swiper-wrapper">
          {ArticleData.map((article: Article, idx: number) => {
           const jalaliDate = jalaliMoment(article.date, "YYYY-MM-DD").format(
            "D MMMM YYYY"
          );

            return (
              <div
                className="mt-1 swiper-slide p-1rem rounded-[1rem] article-card"
                key={idx}
              >
                <img
                  className="mb-[1.5vw] cursor-pointer mx-auto w-[100%]"
                  src={article.image}
                  alt=""
                />
                <img
                  className="mb-[2vh] cursor-pointer w-[35%]"
                  src={article.tag}
                  alt=""
                />
                <h1 className="text-[1.2rem] font-[600] mb-[4vh] cursor-pointer">
                  {article.title}
                </h1>
                <div className="flex justify-between mt-1rem">
                  <p className="flex text-grayed text-[0.7rem] font-[400] items-center">
                    <img
                      className="ml-0.2rem"
                      src="/Articles/clock.png"
                      alt=""
                    />
                    {toPersianNumerals(article.duration.toString()) + " دقیقه"}
                  </p>
                  <p className="flex text-grayed text-[0.7rem] font-[400] items-center">
                    {toPersianNumerals(jalaliDate)}
                    <img
                      className="mr-0.2rem"
                      src="/Articles/calendar.png"
                      alt=""
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
