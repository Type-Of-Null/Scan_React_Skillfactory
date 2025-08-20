import TotalSlider from "./TotalSlider";
import womanTarget from "../../assets/img/svg/WomanTarget.svg";
import { useSearchStore } from "../../stores";
import { Link } from "react-router-dom";

export default function Result() {
  const searchStore = useSearchStore();

  return (
    <div className="p-2.5">
      <div className="flex justify-between p-4 lg:p-8 max-md:flex-col">
        <div>
          <h1 className="font-['Ferry'] text-[40px]">Результаты поиска</h1>
          <p className="mt-[25px] text-[20px] leading-6 tracking-[0.02em] text-black">
            По вашему запросу найдены <br /> следующие данные.
          </p>
        </div>
        <img
          className="max-w-[50%] flex-shrink-0 max-md:max-w-full self-center"
          src={womanTarget}
          alt="woman with target"
        />
      </div>
        {searchStore.state.isError ? (
          <p className="search-result__error search-result-error__info">
            Что-то пошло не так :( <br />
            Попробуйте <Link to="/search">изменить параметры поиска</Link>
          </p>
        ) : (
          <div>
            {searchStore.state.isLoading ? (
              <div className="slider-loader">
                <Loader />
                <p className="loading-data">Загружаем данные</p>
              </div>
            ) : (
              <TotalSlider />
            )}
          </div>
        )}
    </div>
  );
}
