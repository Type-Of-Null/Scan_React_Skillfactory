import React from "react";
import BegginerSvg from "../assets/img/svg/Begginer.svg";
import ProSvg from "../assets/img/svg/Pro.svg";
import BusinessSvg from "../assets/img/svg/Business.svg";

export default function OurTarrifs() {
  const h3Style =
    "default_text mt-[30px] ml-[30px] h-[36px] w-[131px] font-['Inter'] text-[30px] font-medium";
  const text_tarrifs = [
    {
      id: 1,
      name: "Beginner",
      description: "Для небольшого исследования",
      image: BegginerSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] mt-[11px] ml-[307px]",
      headerStyle: "bg-[#FFB64F]",
      price: ["1200 ₽", "799 ₽", "или 150 ₽/мес. при рассрочке на 24 мес."],
    },
    {
      id: 2,
      name: "Pro",
      description: "Для HR и фрилансеров",
      image: ProSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] mt-[11px] ml-[307px]",
      headerStyle: "bg-[#7CE3E1]",
      h3Style: "text-[#000000]",
      price: ["1200 ₽", "1299 ₽", "или 279 ₽/мес. при рассрочке на 24 мес."],
    },
    {
      id: 3,
      name: "Business",
      description: "Для корпоративных клиентов",
      image: BusinessSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] mt-[11px] ml-[307px]",
      headerStyle: "bg-[#000000] text-[#FFFFFF]",
      price: ["1200 ₽", "2379 ₽", ""],
    },
  ];

  return (
    <section
      id="ourTarrifs"
      className="mt-[107.48px] ml-[60px] h-[664px] w-[1320px]"
    >
      <div
        id="text_tarrifs"
        className="default_text default_text h-[54px] w-[743px] font-['Ferry'] text-[45px] font-black"
      >
        наши тарифы
      </div>
      <div id="container_tarrifs" className="flex gap-9.5">
        {text_tarrifs.map((item) => (
          <div
            key={item.id}
            id="ourTarrifs"
            className="mt-[70px] h-[540px] w-[415px] shadow-[0px_0px_20px_0px_#00000033]"
          >
            <section
              id="header"
              className={`relative flex h-[132px] w-[415px] flex-col rounded-t-[10px] ${item.headerStyle}`}
            >
              <h3 className={h3Style}>{item.name}</h3>
              <p className="mt-[30px]w-[313px] default_text ml-[30px] h-[22px] font-['Inter'] text-[18px]">
                {item.description}
              </p>
              <img src={item.image} alt="img" className={item.imageStyle} />
            </section>
            <section id="body" className="h-[408px]">
              <div id="price_box" className="flex flex-wrap">
                <h3 className="default_text mt-[33px] ml-[30px] h-[36px] w-[113px] font-['Inter'] text-[30px] font-medium">
                  {item.price[1]}
                </h3>
                <h3 className="default_text mt-[33px] ml-[19px] h-[33px] w-[97px] pt-0.5 font-['Inter'] text-[25px] font-medium line-through opacity-50">
                  {item.price[0]}
                </h3>
                <h4 className="default_text mt-[10px] ml-7.5 h-[22px] w-full font-['Inter'] text-[18px] font-normal">
                  {item.price[2]}
                  {console.log(item.price[2])}
                </h4>
              </div>
              <div
                id="tarrifs_desctiption"
                className="mt-[59px] ml-[30px] h-[110px] w-[341px]"
              >
                <div className="default_text h-[24px] w-[313px] font-['Inter'] text-[25px] font-medium">
                  В тариф входит:
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
