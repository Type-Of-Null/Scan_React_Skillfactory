import { Link } from "react-router-dom";
import Scan_logo from "../assets/img/scan_logo.png";
import BurgerButton from "../assets/img/svg/BurgerButton.svg";
import Loader from "./loader";
import NotSigned from "./UserBlock/NotSigned";
import Signed from "./UserBlock/Signed";
import { useAuthStore } from "../stores/index";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const link_style = "text-black h-[17px] hover:underline hover:text-blue-500";

const Header = observer(() => {
  const authStore = useAuthStore();
	const [isLoggedIn, setIsLoggedIn] = useState(authStore.isLoggedIn);

	useEffect(() => {
    setIsLoggedIn(authStore.isLoggedIn);
  }, [authStore.isLoggedIn]);

  return (
    <header
      id="header_container"
      className="flex w-full flex-row justify-between bg-white max-sm:w-auto sm:h-[93px]"
    >
      <Link to="/">
        <img
          src={Scan_logo}
          alt=""
          className="-mt-[9px] ml-[14px] h-[111px] w-[111px] shrink-0 sm:-mt-6 sm:ml-15 sm:h-[141px] sm:w-[141px]"
        />
      </Link>
      {/* Навигационная панель (только десктоп) */}
      <nav className="container-nav default_text my-[38px] hidden h-[17px] items-center justify-between gap-4 font-['inter'] text-[14px] font-normal sm:inline-flex">
        <Link to="/" className={link_style}>
          Главная
        </Link>
        <Link to="*" className={link_style}>
          Тарифы
        </Link>
        <Link to="*" className={link_style}>
          FAQ
        </Link>
      </nav>
			<div>

      {/* Блок авторизации (только десктоп) */}
      {isLoggedIn ? <Signed /> : <NotSigned />}
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
});

export default Header;
