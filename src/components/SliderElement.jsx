import React from "react";

export default function SliderElement({ text, image }) {
  return (
    <section className="z-1 flex h-[225px] w-[400px] flex-col rounded-[10px] shadow-[0px_0px_20px_0px_#00000033]">
      <div className="mt-[22px] ml-[19px] h-[79px] w-[65px]">
        <img
          src={image}
          alt="Изображение слайдера"
          className="mt-[8px] mb-[7px] ml-[1px] h-[64px] w-[64px]"
        />
      </div>
      <div className="default_text mt-[11px] ml-[20px] h-[44px] w-[313px] font-['Inter'] text-[18px] font-normal">
        {text}
      </div>
    </section>
  );
}
