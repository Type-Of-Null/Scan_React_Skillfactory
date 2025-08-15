import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "../../stores/index";
import { useNavigate } from "react-router-dom";
import { useSearchStore } from "../../stores/index";
import { DEFAULT_VALUES } from "../../config";

const SearchForm = observer(() => {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const searchStore = useSearchStore();

  // Стили для элементов формы
  const searchInputStyle =
    "text-sm rounded-[5px] focus:border-blue-500 focus:outline-none border border-gray-300 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] p-[13px] tracking-[0.03em] w-[60%]";
  const labelStyle = "mb-5 flex w-[91%] flex-col text-lg";
  const searchDateStyle =
    " w-full rounded-[5px] focus:border-blue-500 focus:outline-none border border-gray-300 p-[13px]";

  // Массив значений изменения состояния чекбоксов
  const checkboxes = [
    { id: "fullness", label: "Признак максимальной полноты" },
    { id: "business", label: "Упоминания в бизнес-контексте" },
    { id: "mainRole", label: "Главная роль в публикации" },
    { id: "onlyRisk", label: "Публикации только с риск-факторами" },
    { id: "techNews", label: "Включать технические новости рынков" },
    { id: "includeAnonCalendar", label: "Включать анонсы и календари" },
    { id: "includeNews", label: "Включать сводки новостей" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data) => {
    searchStore.setState("isEroor", false);
    searchStore.setState("inn", data.inn);
    searchStore.setState("limit", data.limit);
    searchStore.getHistograms();
    searchStore.setState("setDocument", []);
    searchStore.setState("Id", {});
    searchStore.getIDs();
    navigate("/result");
  };

  useEffect(() => {
    !authStore.token && navigate("/");
  });

  useEffect(() => {
    searchStore.resetChecks();
  });
  return (
    // Форма поиска
    <form
      className="mt-[50px] flex max-w-[872px] justify-between gap-3 rounded-[10px] px-[40px] py-[30px] shadow-[0_0_20px_rgba(0,0,0,0.2)] max-md:flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Группа полей */}
      <div className="flex flex-col">
        {/* Поле ИНН компании */}
        <div className="relative mb-7.5">
          <label htmlFor="innNumber" className={labelStyle}>
            ИНН компании *
          </label>
          <input
            id="innNumber"
            className={`w-full ${searchInputStyle} ${
              errors?.inn
                ? "border-red-500 focus:border-red-500"
                : "focus:border-black"
            }`}
            type="text"
            placeholder="10 цифр"
            {...register("inn", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: {
                value: /^[0-9]{10}$/,
              },
            })}
          />
          {errors?.inn && (
            <p className="absolute mt-1 text-sm text-red-500">
              Введите корректные данные
            </p>
          )}
        </div>

        {/* Поле Тональность */}
        <div>
          <label className={labelStyle}>Тональность</label>
          <select
            className={`mb-7.5 w-full ${searchInputStyle}`}
            onChange={(e) => {
              searchStore.setState("tonality", e.target.value);
            }}
          >
            <option>Любая</option>
            <option>Позитивная</option>
            <option>Негативная</option>
          </select>
        </div>

        {/* Поле Количество документов */}
        <div className="relative mb-7.5">
          <label className={labelStyle}>Количество документов *</label>
          <input
            className={`-full ${searchInputStyle}`}
            type="number"
            placeholder="От 1 до 1000"
            {...register("limit", {
              required: true,
              min: { value: 0 },
              max: 1000,
            })}
            min="0" // Ограничение на ввод отрицательных зхначений
          />
          {errors?.limit && (
            <p className="absolute mt-1 text-sm text-red-500">
              Введите корректные данные
            </p>
          )}
        </div>

        {/* Диапазон дат */}
        <div className="flex flex-col">
          <label className="w-full">Диапазон поиска *</label>
          <div className="flex space-x-4 max-lg:flex-col">
            <div className="flex w-1/2 flex-col max-lg:w-full">
              <DatePicker
                id="dateStart"
                selectsStart
                className={searchDateStyle}
                dateFormat="dd.MM.yyyy"
                required={true}
                startDate={searchStore.state.startDate}
                selected={searchStore.state.startDate}
                maxDate={searchStore.state.endDate}
                onChange={(startDate) => {
                  searchStore.setState("startDate", startDate);
                }}
                fixedHeight
                showYearDropdown
              />
              <label
                htmlFor="dateStart"
                className="mt-2.5 text-sm text-gray-500"
              >
                Дата начала
              </label>
            </div>
            <div className="flex w-1/2 flex-col max-lg:w-full">
              <DatePicker
                selectsEnd
                id="dateEnd"
                className={searchDateStyle}
                dateFormat="dd.MM.yyyy"
								required={true}
								startDate={searchStore.state.startDate}
								selected={searchStore.state.endDate}
								minDate={searchStore.state.startDate}
								maxDate={new Date()}
								onChange={(endDate) => {
                  searchStore.setState("endDate", endDate);
                }}

              />
              <label htmlFor="dateEnd" className="mt-2.5 text-sm text-gray-500">
                Дата конца
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Чекбоксы */}
      <div className="flex flex-col justify-between">
        <div className="max-md:hidden">
          {checkboxes.map(({ id, label }) => (
            <div key={id} className="mb-4 flex items-center">
              <input
                id={id}
                type="checkbox"
                className="cursor-pointer opacity-[40%]"
								onChange={() => {
									searchStore.toggleCheck(label);
								}}
              />
              <label htmlFor={id} className="ml-2 text-gray-700">
                {label}
              </label>
            </div>
          ))}
        </div>

        {/* Кнопка */}
        <div className="mt-[25px] w-full self-center">
          <button
					disabled={!isValid}
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 disabled:opacity-50 enabled:cursor-pointer"
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
});

export default SearchForm;
