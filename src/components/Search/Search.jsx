import ManRocket from '../../assets/img/svg/ManRocket.svg';
import Document from '../../assets/img/svg/Document.svg';
import Folders from '../../assets/img/svg/Folders.svg';
import SearchForm from './SearchForm';

export default function Search() {
  return (
    <section className="flex flex-row gap-[2%] p-4 max-lg:flex-col md:p-8">
      {/* Блок с текстом и формой*/}
      <div className="relative flex flex-col">
        {/* Текст описания поиска */}
        <h1 className="pr-[10%] font-['Ferry'] text-3xl tracking-wide text-black md:text-4xl">
          Найдите необходимые данные в пару кликов.
        </h1>
        <p className="mt-6 text-xl tracking-wide text-black">
          Задайте параметры поиска. <br />
          Чем больше заполните, тем точнее поиск
        </p>

        {/* Форма с абсолютно позиционированным изображением */}
        <div className="relative">
          <img
            src={Document}
            alt="document"
            className="absolute -top-4 -right-4 h-16 w-16 max-lg:block lg:hidden"
          />
          <SearchForm />
        </div>
      </div>

      {/* Изображения */}
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-row justify-between gap-20 max-lg:hidden xl:gap-40 2xl:gap-60">
          <img src={Document} alt="folders" className="h-[70%] w-[70%]" />
          <img src={Folders} alt="folders" className="h-[40%] w-[40%]" />
        </div>
        <img src={ManRocket} alt="ManRocket" className="max-lg:mt-6" />
      </div>
    </section>
  );
}
