import { Link } from "react-router-dom";
import Scan_logo from "../assets/img/scan_logo.png";
import BurgerButton from "../assets/img/svg/BurgerButton.svg";
import Loader from "./Loader";
import NotSigned from "./UserBlock/NotSigned";
import Signed from "./UserBlock/Signed";
import { useAuthStore } from "../stores";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Companies from "./UserBlock/Companies";

const link_style =
  "text-black hover:text-blue-500 relative inline-block pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full";

const Header = observer(() => {
  const authStore = useAuthStore();
  const [isLoggedIn, setIsLoggedIn] = useState(authStore.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(authStore.isLoggedIn);
  }, [authStore.isLoggedIn]);

  useEffect(() => {
    authStore.checkToken();
  });
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
      <nav className="relative default_text my-[38px] hidden items-center justify-between gap-4 font-['inter'] text-sm font-normal sm:inline-flex">
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

      {/* Блок авторизации (только десктоп) */}
      {isLoggedIn ? (
        <div className="flex lg:gap-6">
          <Companies /> <Signed />
        </div>
      ) : (
        <NotSigned />
      )}

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