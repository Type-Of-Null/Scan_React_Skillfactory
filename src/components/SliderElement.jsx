import React from "react";

export default function SliderElement({ text, image }) {
  return (
    <div className="flex h-[225px] w-[400px] flex-col">
      <img src={image} alt="Изображение слайдера" className="h-[79px] w-[65px] ml-[19px] mt-[22px] col-[#029491]" />
      <div className="h-[44px] w-[313px] font-['Inter'] text-[18px] leading-none font-normal tracking-[0.01em]">
        {text}
      </div>
    </div>
  );
}
