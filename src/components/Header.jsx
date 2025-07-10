import { memo } from "react";
import Scan_logo from "../assets/img/scan_logo.png";
import BurgerButton from "../assets/img/svg/BurgerButton.svg";

const link_style = "text-black h-[17px] hover:underline hover:text-blue-500";

const Header = () => {
  return (
    <header
      id="header_container"
      className="flex w-full flex-row justify-between bg-white sm:h-[93px] sm:w-[1440px] max-sm:w-[375px]"
    >
      <img
        src={Scan_logo}
        alt=""
        className="-mt-[9px] ml-[14px] h-[111px] w-[111px] sm:-mt-6 sm:ml-15 sm:h-[141px] sm:w-[141px]"
      />
      {/* Навигационная панель (только десктоп) */}
      <div className="container-nav default_text my-[38px] ml-[401px] hidden h-[17px] w-[236px] items-center justify-between font-['inter'] text-[14px] font-normal sm:flex">
        <a href="#!" className={link_style}>
          Главная
        </a>
        <a href="#!" className={link_style}>
          Тарифы
        </a>
        <a href="#!" className={link_style}>
          FAQ
        </a>
      </div>
      {/* Блок авторизации (только десктоп) */}
      <div
        id="auth-container"
        className="mt-[33px] mb-8.5 ml-[291px] hidden h-[26px] w-[251px] items-center sm:flex"
      >
        <div
          id="register_link"
          className="default_text mt-[4px] mb-[5px] h-[17px] w-[146px] font-['Inter'] text-[14px] font-normal opacity-40"
        >
          Зарегистрироваться
        </div>
        <div className="mt-[33px] mb-8.5 ml-[18px] h-[26px] w-[2px] rotate-180 bg-[#029491] opacity-60"></div>
        <button
          id="button_login"
          className="default_text default_text ml-[20px] h-[26px] w-[65px] rounded-[5px] bg-[#7CE3E1] font-['Inter'] text-[14px] font-medium"
        >
          Войти
        </button>
      </div>
      {/* Кнопка бургер меню (только мобилка) */}
      <button
        id="burgerButton"
        className="mt-[34px] mr-[26px] h-[25px] w-[30px] sm:hidden"
      >
        <img src={BurgerButton} alt="..." />
      </button>
    </header>
  );
};

export default memo(Header);
