import React from "react";
import PromoImg from "../assets/img/promo.png";

export default function Promo() {
  return (
    <section id="promo" className="m-auto mt-6 flex h-[620px] w-[1320px]">
      <div className="flex flex-col">
        <h1 className="default_text relative z-1 mt-[25px] h-[288px] w-[743px] font-['Ferry'] text-[60px] font-black text-black">
          сервис по поиску публикаций о компании по его ИНН
        </h1>
        <span className="default_text mt-5 h-[48px] w-[534px] font-['Inter'] text-[20px] font-normal">
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </span>
        <button
          id="button_request"
          className="default_text mt-[70px] h-[59px] w-[335px] rounded-[5px] bg-[#5970FF] font-['Inter'] text-[22px] font-medium text-white"
        >
          Запросить данные
        </button>
      </div>
      <div className="absolute top-[117px] left-[1289px] z-10 h-[73px] w-[69px] bg-white"></div>
      <div className="absolute top-[117px] left-[751px] h-[620px] w-[629px] overflow-hidden">
        <img
          src={PromoImg}
          alt="Здесь должно быть изображение, если бы оно загрузилось"
          className="mt-[27px] h-[593px] object-cover object-[right_bottom]"
        />
      </div>
    </section>
  );
}
``;
