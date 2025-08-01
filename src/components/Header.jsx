import { memo } from "react";
import { Link } from "react-router-dom";
import Scan_logo from "../assets/img/scan_logo.png";
import BurgerButton from "../assets/img/svg/BurgerButton.svg";

const link_style = "text-black h-[17px] hover:underline hover:text-blue-500";

const Header = () => {
  return (
    <header
      id="header_container"
      className="flex w-full flex-row justify-between bg-white max-sm:w-auto sm:h-[93px]"
    >
      <Link>
        <img
          src={Scan_logo}
          alt=""
          className="-mt-[9px] ml-[14px] h-[111px] w-[111px] shrink-0 sm:-mt-6 sm:ml-15 sm:h-[141px] sm:w-[141px]"
        />
      </Link>
      {/* Навигационная панель (только десктоп) */}
      <nav className="container-nav default_text my-[38px] hidden h-[17px] max-w-[236px] items-center justify-between gap-[30%] font-['inter'] text-[14px] font-normal sm:flex">
        <Link to="/" className={link_style}>
          Главная
        </Link>
        <Link href="#!" className={link_style}>
          Тарифы
        </Link>
        <Link href="#!" className={link_style}>
          FAQ
        </Link>
      </nav>
      {/* Блок авторизации (только десктоп) */}
      <div
        id="auth-container"
        className="mt-[33px] mr-[1%] mb-8.5 ml-[10%] hidden h-[26px] w-[251px] items-center sm:flex"
      >
        <Link
				  to="*"
          id="register_link"
          className="default_text mt-[4px] mb-[5px] h-[17px] w-[146px] font-['Inter'] text-[14px] font-normal opacity-40"
        >
          Зарегистрироваться
        </Link>
        <div className="mt-[33px] mb-8.5 ml-[18px] h-[26px] w-[2px] rotate-180 bg-[#029491] opacity-60"></div>
        <Link
          to="/auth"
					id="login_link"
					className="default_text ml-[20px] h-[26px] w-[65px] rounded-[5px] bg-[#7CE3E1] font-['Inter'] text-[14px] font-medium flex items-center justify-center"
        >
          Войти
        </Link>
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
