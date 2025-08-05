import womanTarget from "../../assets/img/svg/WomanTarget.svg";

export default function Result() {
  return (
    <div className="search-result">
      <div className="flex justify-between p-4 lg:p-8">
        <div>
          <h1 className="font-['Ferry'] text-[40px]">Результаты поиска</h1>
          <p className="mt-[25px] text-[20px] leading-6 tracking-[0.02em] text-black">
            По вашему запросу найдены <br /> следующие данные.
          </p>
        </div>
        <img
          src={womanTarget}
          className="search-result__img"
          alt="woman with target"
        />
      </div>

      <div></div>
    </div>
  );
}
