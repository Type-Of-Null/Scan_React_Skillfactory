import { NavLink } from "react-router-dom";
import keySvg from "../../assets/img/svg/AuthKey.svg";
import lock from "../../assets/img/svg/Lock.svg";

export default function Auth() {
  return (
    <section className="grid grid-flow-col grid-cols-2 grid-rows-3 max-sm:flex max-sm:flex-col">
      {/* Блок с текстом */}
      <div
        id="text"
        className="mt-[5%] ml-[7.5%] font-['Ferry'] text-[clamp(1rem,2.5vw,3rem)] leading-none font-black tracking-[2%] max-sm:order-1"
      >
        Для оформления подписки на тариф, необходимо авторизоваться.
      </div>

      {/* Контейнер с формой */}
      <div className="relative order-2 row-span-3 max-sm:order-2">
        {/* Lock изображение */}
        <img
          src={lock}
          className="absolute ml-[7.5%] h-[15%] w-[15%] max-sm:mt-[1%] max-sm:h-[35%] max-sm:w-[25%]"
          alt="..."
        />
        {/* Форма аутентификации и регистрации */}
        <form className="relative col-start-2 row-start-1 row-end-3 mt-[10%] mr-[3%] ml-[10%] flex flex-col items-center justify-between rounded-[10px] p-[25px] shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          {/* Ссылки Войти и Зарегистрироваться */}
          <div className="flex w-full justify-center gap-x-10 max-sm:gap-x-2">
            <NavLink
              to="/auth"
							end
              className={({ isActive }) =>
                `mx-1 mb-10 pb-1 font-['Inter'] text-[16px] max-sm:text-[14px] max-sm:px-0 ${
                  isActive
                    ? "border-b-2 border-[#029491] text-[#029491]"
                    : "text-gray-500"
                } max-sm:px-4`
              }
            >
              Войти
            </NavLink>
            <NavLink
              to="*"
							end
              className={({ isActive }) =>
                `mx-2.5 mb-10 pb-1 font-['Inter'] text-[16px] max-sm:text-[14px] transition-colors ${
                  isActive ? "text-[#029491] border-b-2 border-[#029491]" : "text-gray-500 border-b-2"
                } max-sm:px-4`
              }
            >
              Зарегистрироваться
            </NavLink>
          </div>
        </form>
      </div>

      {/* Изображение */}
      <div className="order-1 row-span-2 mt-[5%] ml-[20%] max-sm:order-3 max-sm:m-auto">
        <img
          id="key"
          src={keySvg}
          className="h-[40vh] w-[55%] max-sm:w-full"
          alt="..."
        />
      </div>
    </section>
  );
}
