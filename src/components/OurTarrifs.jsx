import BegginerSvg from "../assets/img/svg/Begginer.svg";
import ProSvg from "../assets/img/svg/Pro.svg";
import BusinessSvg from "../assets/img/svg/Business.svg";
import flagTarrifs from "../assets/img/flagTarrifs.png";

export default function OurTarrifs() {
  const h3Style =
    "default_text mt-[30px] ml-[30px] h-[36px] w-[131px] font-['Inter'] text-[30px] font-medium";
  const text_tarrifs = [
    {
      id: 1,
      name: "Beginner",
      description: "Для небольшого исследования",
      image: BegginerSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] mt-[11px] ml-[307px] max-sm:w-[59px] max-sm:h-[53px] max-sm:ml-[271px]",
      headerStyle: "bg-[#FFB64F]",
      price: ["2500 ₽", "1800 ₽", "или 150 ₽/мес. при рассрочке на 24 мес."],
      priceDescription: [
        "Безлимитная история запросов",
        "Безопасная сделка",
        "Поддержка 24/7",
      ],
    },
    {
      id: 2,
      name: "Pro",
      description: "Для HR и фрилансеров",
      image: ProSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] max-sm:w-[68px] max-sm:h-[75px] mt-[11px] ml-[307px] max-sm:ml-[248px]",
      headerStyle: "bg-[#7CE3E1]",
      h3Style: "text-[#000000]",
      price: ["3600 ₽", "2800 ₽", "или 300 ₽/мес. при рассрочке на 24 мес."],
      priceDescription: [
        "Все пункты тарифа Beginner",
        "Экспорт истории",
        "Рекомендации по приоритетам",
      ],
    },
    {
      id: 3,
      name: "Business",
      description: "Для корпоративных клиентов",
      image: BusinessSvg,
      imageStyle: "absolute w-[92.24px] h-[83.15px] max-sm:w-[73px] max-sm:h-[61px] mt-[11px] ml-[307px] max-sm:ml-[252px]",
      headerStyle: "bg-[#000000] text-[#FFFFFF]",
      price: ["4999 ₽", "3499 ₽"],
      priceDescription: [
        "Все пункты тарифа Pro",
        "Безлимитное количество запросов",
        "Приоритетная поддержка",
      ],
    },
  ];

  return (
    <section
      id="ourTarrifs"
      className="mt-[107.48px] ml-[60px] h-[664px] max-sm:ml-[14px] w-[1320px] max-sm:w-[335px]"
    >
      <div
        id="text_tarrifs"
        className="default_text default_text h-[54px] w-[743px] max-sm:w-full font-['Ferry'] text-[45px] max-sm:text-[25px] font-black"
      >
        наши тарифы
      </div>
      <div id="container_tarrifs" className="flex gap-9.5 max-sm:flex-col">
        {text_tarrifs.map((item) => (
          <div
            key={item.id}
            id="ourTarrifs"
            className="mt-[70px] h-[540px] w-[415px] max-sm:w-full shadow-[0px_0px_20px_0px_#00000033]"
          >
            {/* Заголовок */}
            <section
              id="header"
              className={`relative flex h-[132px] w-[415px] max-sm:w-full flex-col rounded-t-[10px] ${item.headerStyle}`}
            >
              <h3 className={h3Style}>{item.name}</h3>
              <p className="mt-[10px] max-sm:mt-[22px] w-[313px] default_text ml-[30px] h-[22px] font-['Inter'] text-[18px]">
                {item.description}
              </p>
              <img src={item.image} alt="img" className={item.imageStyle} />
            </section>

            {/* Цена */}
            <section id="body" className="h-[408px]">
              <div id="price_box" className="flex flex-wrap">
                <h3 className="default_text mt-[33px] ml-[30px] h-[36px] w-[113px] font-['Inter'] text-[30px] font-medium">
                  {item.price?.[1]}
                </h3>
                <h3 className="default_text mt-[33px] ml-[19px] h-[33px] w-[97px] pt-0.5 font-['Inter'] text-[25px] font-medium line-through opacity-50">
                  {item.price?.[0]}
                </h3>
                <h4 className="default_text mt-[10px] ml-7.5 h-[22px] w-full font-['Inter'] text-[18px] font-normal">
                  {item.price?.[2]}
                </h4>
              </div>
              <div
                id="tarrifs_description"
                className="mt-[59px] ml-[30px] max-sm:ml-[20px] h-[110px] w-[341px] max-md:w-full"
              >
                <div className="default_text h-[24px] w-[360px] max-md:w-full font-['Inter'] text-[20px] font-medium">
                  В тариф входит:
                  <div className="mt-[10px]">
                    {item.priceDescription?.map((description, index) => (
                      <div
                        key={index}
                        className="default_text mb-2.5 flex items-center font-['Inter'] text-[18px] max-sm:text-[16px] font-normal"
                      >
                        <img
                          src={flagTarrifs}
                          alt="Чекбокс"
                          className="mr-[8px] h-[20px] w-[20px]"
                        />
                        {description}
                      </div>
                    ))}
                    <button className="[20px] default_text mt-[45px] mb-[22px] h-[59px] w-full max-w-[335px] max-sm:max-w-[286px] rounded-[5px] bg-[#5970FF] text-[20px] text-white">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
