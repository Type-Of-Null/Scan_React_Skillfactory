import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchForm = () => {
  const searchInputStyle =
    "text-[14px] rounded-[5px] border border-[#c7c7c7] bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] p-[13px] tracking-[0.03em] w-[60%]";
  const labelStyle = "mb-5 flex w-[91%] flex-col text-lg";
	const searchDateStyle = " w-full rounded-[5px] border border-[#c7c7c7] p-[13px]"

  return (
    // Форма поиска
    <form className="mt-[50px] gap-3 flex max-md:flex-col max-w-[872px] justify-between rounded-[10px] px-[40px] py-[30px] shadow-[0_0_20px_rgba(0,0,0,0.2)]">
      {/* Группа полей */}
      <div className="flex flex-col">
        {/* Поле ИНН компании */}
        <div>
          <label htmlFor="innNumber" className={labelStyle}>
            ИНН компании *
          </label>
          <input
            id="innNumber"
            type="text"
            placeholder="10 цифр"
            className={`mb-7.5 w-full ${searchInputStyle}`}
          />
        </div>

        {/* Поле Тональность */}
        <div>
          <label className={labelStyle}>Тональность</label>
          <select className={`mb-7.5 w-full ${searchInputStyle}`}>
            <option>Любая</option>
            <option>Позитивная</option>
            <option>Негативная</option>
          </select>
        </div>

        {/* Поле Количество документов */}
        <div>
          <label className={labelStyle}>Количество документов *</label>
          <input
            type="number"
            placeholder="От 1 до 1000"
            className={`mb-7.5 w-full ${searchInputStyle}`}
          />
        </div>

        {/* Диапазон дат */}
        <div className="flex flex-col ">
          <label className="w-full">Диапазон поиска *</label>
          <div className="flex space-x-4 max-lg:flex-col ">
            <div className="flex w-1/2 flex-col max-lg:w-full">
              <DatePicker
                id="dateStart"
                className={searchDateStyle}
                dateFormat="dd.MM.yyyy"
              />
              <label
                htmlFor="dateStart"
                className="mt-2.5 text-[14px] text-gray-500"
              >
                Дата начала
              </label>
            </div>
            <div className="flex w-1/2 flex-col max-lg:w-full">
              <DatePicker
                id="dateEnd"
                className={searchDateStyle}
                dateFormat="dd.MM.yyyy"
              />
              <label
                htmlFor="dateEnd"
                className="mt-2.5 text-[14px] text-gray-500"
              >
                Дата конца
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Чекбоксы */}
      <div className="flex flex-col justify-between">
        <div className="max-md:hidden">
          <div className="mb-4 flex items-center">
            <input
              id="fullness"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="fullness" className="ml-2 text-gray-700">
              Признак максимальной полноты
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="business"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="business" className="ml-2 text-gray-700">
              Упоминания в бизнес-контексте
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="mainRole"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="mainRole" className="ml-2 text-gray-700">
              Главная роль в публикации
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="onlyRisk"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="onlyRisk" className="ml-2 text-gray-700">
              Публикации только с риск-факторами
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="techNews"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="techNews" className="ml-2 text-gray-700">
              Включать технические новости рынков
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="includeAnonCalendar"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="includeAnonCalendar" className="ml-2 text-gray-700">
              Включать анонсы и календари
            </label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="includeNews"
              type="checkbox"
              className="cursor-pointer opacity-[40%]"
            />
            <label htmlFor="includeNews" className="ml-2 text-gray-700">
              Включать сводки новостей
            </label>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-[25px] w-full self-center">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            Поиск
          </button>
        <p className="ml-4 self-end text-sm text-gray-500">
          * Обязательные поля
        </p>
        </div>
      </div>
    </form>
  );
};
