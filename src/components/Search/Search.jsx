import ManRocket from "../../assets/img/svg/ManRocket.svg";
import Document from "../../assets/img/svg/Document.svg";
import Folders from "../../assets/img/svg/Folders.svg";
import { SearchForm } from "./SearchForm";

export default function Search() {
  return (
    <section className="flex flex-row p-4 md:p-8 max-lg:flex-col gap-[2%]">
      {/* Блок с текстом и формой*/}
      <div className="flex flex-col relative">
        {/* Текст описания поиска */}
        <h1 className="font-['Ferry'] text-3xl tracking-wide text-black md:text-4xl pr-[10%]">
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
            className="absolute -right-4 -top-4 h-16 w-16 max-lg:block lg:hidden"
          />
          <SearchForm />
        </div>
      </div>

      {/* Изображения */}
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-row justify-between gap-[10%]">
				<img
            src={Document}
            alt="folders"
            className="h-[50%] w-[50%] object-contain max-lg:hidden"
          />
          <img
            src={Folders}
            alt="folders"
            className="h-[40%] w-[40%] object-contain max-lg:hidden"
          />
        </div>
        <img src={ManRocket} alt="rocketman" className="max-lg:h-[60%] max-lg:w-[60%] object-contain max-lg:mt-6" />
      </div>
    </section>
  );
}