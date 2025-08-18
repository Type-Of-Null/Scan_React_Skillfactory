import TotalSlider from "./TotalSlider";
import womanTarget from "../../assets/img/svg/WomanTarget.svg";
import { useSearchStore } from "../../stores";
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default function Result() {
  const searchStore = useSearchStore();

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
          {/* <Documents /> */}
        </div>
      )}
      <div></div>
    </div>
  );
}
