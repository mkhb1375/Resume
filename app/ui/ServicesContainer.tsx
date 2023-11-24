"use client";
import { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ServicesData from "./Api/ServicesData";
import ProgressBar from "./ProgressBar";

import Slider1 from "./slides/slider1";
import Slider2 from "./slides/slider2";
import Slider3 from "./slides/slider3";
import Slider4 from "./slides/slider4";
import Slider5 from "./slides/slider5";

type Service = {
  text: string;
  image1: string;
  image2: string;
};

type ServicesArray = Service[];

export default function ServicesContainer() {
  const [selected, setSelected] = useState<number>(0);
  const [previousSelected, setPreviousSelected] = useState<number>(0);
  const swiperElRef = useRef<HTMLDivElement | null>(null);
  const data: ServicesArray = ServicesData;
  const [autoChange, setAutoChange] = useState<boolean>(true);
  const duration = 5000;
  const speed = 500;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoChange) {
      interval = setInterval(() => {
        setPreviousSelected(selected);
        setSelected((prevSelected) => (prevSelected + 1) % data.length);
      }, duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoChange, data, selected]);

  useEffect(() => {
    let swiper: Swiper | null = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: speed,
        spaceBetween: 0,
        slidesPerView: 1,
      });
    }
    if (swiper) {
      const difference = selected - previousSelected;
      if (difference > 0) {
        swiper.changeLanguageDirection("rtl");
      } else {
        swiper.changeLanguageDirection("ltr");
      }
      swiper.slideTo(selected + 1, speed);
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, [selected, previousSelected]);

  function manualClick(idx: number) {
    setPreviousSelected(selected);
    setSelected(idx);
  }

  return (
    <div>
      <div className="mt-[5rem] p-[3vw] mx-[auto] bg-[#F5F8FC]  ">
        <p className="text-[0.9rem] font-[300] text-grayed mb-[2rem]">
          یک پلتفرم برای تمامی نیاز ها
        </p>
        <h2 className="text-[2rem] font-[800]">خدمات ما در متانکست</h2>
        <div className="flex ">
          {data.map((ele: Service, idx: number) => (
            <div
              key={idx}
              onClick={() => manualClick(idx)}
              className="cursor-pointer w-[100vw] mr-[2vw]"
            >
              <img
                className="cursor-pointer mt-[2.5rem]  w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw]"
                src={selected === idx ? ele.image2 : ele.image1}
                alt=""
              />
              <p
                className={`my-[1.5rem] text-[0.8rem] lg:text-[1.25rem] font-[600] `}
              >
                {ele.text}
              </p>
              <ProgressBar
                duration={duration}
                selectedIdx={selected}
                idx={idx}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-[2rem] flex items-center justify-between bg-[#F5F8FC] mb-[1.5rem]  flex-row-reverse">
        <div className="swiper-container overflow-hidden " ref={swiperElRef}>
          <div className="swiper-wrapper ">
            <div className="swiper-slide ">
              <Slider1 />
            </div>
            <div className="swiper-slide">
              <Slider1 />
            </div>
            <div className="swiper-slide">
              <Slider1 />
            </div>
            <div className="swiper-slide">
              <Slider1 />
            </div>
            <div className="swiper-slide">
              <Slider1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
