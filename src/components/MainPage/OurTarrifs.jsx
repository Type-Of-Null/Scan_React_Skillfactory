import BegginerSvg from '../../assets/img/svg/Begginer.svg';
import ProSvg from '../../assets/img/svg/Pro.svg';
import BusinessSvg from '../../assets/img/svg/Business.svg';
import flagTarrifs from '../../assets/img/flagTarrifs.png';
import { Link } from 'react-router-dom';
import { tarrifs } from '../../config';

export default function OurTarrifs() {
  const h3Style =
    "default_text mt-[30px] ml-[30px] h-[36px] w-[131px] font-['Inter'] text-[30px] font-medium";
  // Описание тарифов
  const text_tarrifs = [
    {
      id: 1,
      name: 'Beginner',
      description: 'Для небольшого исследования',
      image: BegginerSvg,
      imageStyle:
        'absolute w-[92.24px] h-[83.15px] mt-[11px] ml-[307px] max-sm:w-[59px] max-sm:h-[53px] max-sm:ml-[241px]',
      headerStyle: 'bg-[#FFB64F]',
      price: ['2500 ₽', '1800 ₽', 'или 150 ₽/мес. при рассрочке на 24 мес.'],
      priceDescription: [
        'Безлимитная история запросов',
        'Безопасная сделка',
        'Поддержка 24/7',
      ],
    },
    {
      id: 2,
      name: 'Pro',
      description: 'Для HR и фрилансеров',
      image: ProSvg,
      imageStyle:
        'absolute w-[92.24px] h-[83.15px] max-sm:w-[48px] max-sm:h-[75px] mt-[11px] ml-[307px] max-sm:ml-[228px]',
      headerStyle: 'bg-[#7CE3E1]',
      h3Style: 'text-[#000000]',
      price: ['3600 ₽', '2800 ₽', 'или 300 ₽/мес. при рассрочке на 24 мес.'],
      priceDescription: [
        'Все пункты тарифа Beginner',
        'Экспорт истории',
        'Рекомендации по приоритетам',
      ],
    },
    {
      id: 3,
      name: 'Business',
      description: 'Для корпоративных клиентов',
      image: BusinessSvg,
      imageStyle:
        'absolute w-[92.24px] h-[83.15px] max-sm:w-[73px] max-sm:h-[61px] mt-[11px] ml-[307px] max-sm:ml-[222px]',
      headerStyle: 'bg-[#000000] text-[#FFFFFF]',
      price: ['4999 ₽', '3499 ₽'],
      priceDescription: [
        'Все пункты тарифа Pro',
        'Безлимитное количество запросов',
        'Приоритетная поддержка',
      ],
    },
  ];

  return (
    <section
      id="ourTarrifs"
      className="mx-[2%] mt-[107.48px] flex min-h-screen flex-col max-sm:ml-[14px] max-sm:w-[315px]"
    >
      <div
        id="text_tarrifs"
        className="default_text default_text w-[743px] font-['Ferry'] text-[45px] font-black max-sm:w-full max-sm:text-[25px]"
      >
        наши тарифы
      </div>
      <div
        id="container_tarrifs"
        className="flex items-center gap-[5%] max-lg:flex-col"
      >
        {text_tarrifs.map((item) => (
          <div
            key={item.id}
            id="ourTarrifs"
            className="mt-[70px] mb-4 h-[540px] w-[415px] shrink shadow-[0px_0px_20px_0px_#00000033] max-sm:w-full"
          >
            {/* Заголовок */}
            <section
              id="header"
              className={`relative flex h-[132px] w-[415px] flex-col rounded-t-[10px] max-sm:w-full ${item.headerStyle}`}
            >
              <h3 className={h3Style}>{item.name}</h3>
              <p className="default_text mt-[10px] h-[22px] w-[313px] text-center font-['Inter'] text-[18px] max-sm:mt-[22px]">
                {item.description}
              </p>
              <img src={item.image} alt="img" className={item.imageStyle} />
            </section>

            {/* Цена */}
            <section id="body" className="max-h-[408px]">
              <div id="price_box" className="relative flex flex-wrap">
                <h3 className="default_text mt-[33px] ml-[30px] h-[36px] w-[113px] font-['Inter'] text-[30px] font-medium">
                  {item.price?.[1]}
                </h3>
                <h3 className="default_text mt-[33px] ml-[19px] h-[33px] w-[97px] pt-0.5 font-['Inter'] text-[25px] font-medium line-through opacity-50">
                  {item.price?.[0]}
                </h3>

                {/* "Текущий тариф" простая логика проверки подписки */}
                {(() => {
                  const configKey = item.name.toLowerCase();
                  if (tarrifs[configKey]) {
                    return (
                      <div className="absolute right-0 mt-1.5 mr-2 h-6 w-[134px] rounded-[10px] bg-[#3BA5E0] text-center font-['Inter'] text-[14px] text-white">
                        Текущий тариф
                      </div>
                    );
                  }
                  return null;
                })()}

                <h4 className="default_text mt-[10px] ml-7.5 h-[22px] w-full font-['Inter'] text-[18px] font-normal">
                  {item.price?.[2]}
                </h4>
              </div>
              <div
                id="tarrifs_description"
                className="mt-[59px] ml-[30px] h-[110px] w-[341px] max-md:w-full max-sm:ml-[20px]"
              >
                {/* Описание тарифа */}
                <div className="default_text h-[24px] w-[360px] font-['Inter'] text-[20px] font-medium max-md:w-4/5">
                  В тариф входит:
                  <div className="mt-[10px] flex flex-col">
                    {item.priceDescription?.map((description, index) => (
                      <div
                        key={index}
                        className="default_text mb-2.5 flex items-center font-['Inter'] text-[18px] font-normal max-sm:text-sm"
                      >
                        <img
                          src={flagTarrifs}
                          alt="Чекбокс"
                          className="mr-[8px] h-[20px] w-[20px]"
                        />
                        {description}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Кнопка "Подробнее"*/}
              <Link to="*">
                <div className="flex flex-col items-center">
                  <button className="default_text mt-10 h-[59px] w-56 cursor-pointer rounded-[5px] bg-[#5970FF] text-[20px] text-white">
                    Подробнее
                  </button>
                </div>
              </Link>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
