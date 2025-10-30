import TotalSlider from './TotalSlider';
import womanTarget from '../../assets/img/svg/WomanTarget.svg';
import { useSearchStore } from '../../stores';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import ListOfArticles from './ListOfArticles';
export default function Result() {
  const searchStore = useSearchStore();

  return (
    <section id="result" className="container mx-auto max-w-11/12 px-4">
      <div className="flex justify-between p-4 max-md:flex-col lg:p-8">
        <div>
          <h1 className="font-['Ferry'] text-2xl lg:text-[40px]">
            Результаты поиска
          </h1>
          <p className="mt-4 text-[18px] leading-6 tracking-[0.02em] text-black lg:mt-[25px] lg:text-[20px]">
            По вашему запросу найдены <br /> следующие данные.
          </p>
        </div>
        <img
          className="max-w-[300px] flex-shrink-0 self-center lg:max-w-[400px]"
          src={womanTarget}
          alt="woman with target"
        />
      </div>

      {searchStore.state.isError ? (
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <p className="text-lg text-red-800">
            Нет данных для отображения <br />
            Попробуйте{' '}
            <Link to="/search" className="text-blue-600 underline">
              изменить параметры поиска
            </Link>
          </p>
        </div>
      ) : (
        <div className="w-full overflow-hidden">
          {searchStore.state.isLoading ? (
            <div className="flex h-40 flex-col items-center justify-center rounded-[10px] border-2 border-[#029491]">
              <Loader />
              <p className="mt-2.5 text-lg">Загружаем данные</p>
            </div>
          ) : (
            <TotalSlider />
          )}
          <ListOfArticles />
        </div>
      )}
    </section>
  );
}
