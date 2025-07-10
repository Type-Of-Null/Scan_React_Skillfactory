import PromoImg from "../assets/img/promo.png";

export default function Promo() {
  return (
    <section
      id="promo"
      className="flex flex-col sm:mt-6 sm:ml-[60px] sm:h-[620px] sm:w-[1320px] md:flex-row"
    >
      <div className="flex flex-col">
        <h1 className="default_text relative z-1 ml-[14px] h-[136px] w-[361px] font-['Ferry'] text-[28px] font-black text-black sm:mt-[25px] sm:h-[288px] sm:w-[743px] sm:text-[60px]">
          сервис по поиску публикаций о компании по его ИНН
        </h1>
        <span className="default_text mt-[19px] ml-[14px] h-[66px] w-[327px] font-['Inter'] text-[20px] font-normal sm:mt-5 sm:h-[48px] sm:w-[534px]">
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </span>
        <button
          id="button_request"
          className="default_text mt-[32px] ml-[14px] h-[59px] w-[335px] rounded-[5px] bg-[#5970FF] font-['Inter'] font-medium text-white sm:mt-[70px] sm:h-[59px] sm:w-[335px] sm:text-[22px]"
        >
          Запросить данные
        </button>
        <div className="absolute top-[438px] left-[311px] z-10 h-[40px] w-[38px] bg-white sm:top-[117px] sm:left-[1289px] sm:h-[73px] sm:w-[69px]"></div>
        <div className="mt-[19.3px] mr-[13.82px] ml-[14px] h-[342.21px] w-[347.18px] sm:absolute sm:top-[117px] sm:left-[751px] sm:mt-0 sm:h-[620px] sm:w-[629px] sm:overflow-hidden">
          <img src={PromoImg} loading="lazy" alt="..." />
        </div>
      </div>
    </section>
  );
}
