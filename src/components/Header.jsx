import { Link, useNavigate } from "react-router-dom";
import Scan_logo from "../assets/img/scan_logo.png";
import Scan_logo_burger from "../assets/img/scan_logo_burger.png";
import BurgerButton from "../assets/img/svg/BurgerButton.svg";
import CloseIcon from "../assets/img/CloseIcon.png";
import NotSigned from "./UserBlock/NotSigned";
import Signed from "./UserBlock/Signed";
import { useAuthStore } from "../stores";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Companies from "./UserBlock/Companies";

const link_style =
  "text-black hover:text-blue-500 relative inline-block pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full";

const Header = observer(() => {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const [isLoggedIn, setIsLoggedIn] = useState(authStore.isLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const style_link_burger =
    "font-['Inter'] text-[16px] text-white hover:text-black";

  useEffect(() => {
    setIsLoggedIn(authStore.isLoggedIn);
  }, [authStore.isLoggedIn]);

  useEffect(() => {
    authStore.checkToken();
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    {
      isLoggedIn ? authStore.clearAuthData() : navigate("/auth");
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        id="header_container"
        className="flex w-full flex-row justify-between bg-white max-sm:w-auto sm:h-[93px]"
      >
        <Link to="/" onClick={closeMenu}>
          <img
            src={Scan_logo}
            alt=""
            className="-mt-[9px] ml-[14px] h-[111px] w-[111px] shrink-0 sm:-mt-6 sm:ml-15 sm:h-[141px] sm:w-[141px]"
          />
        </Link>
        {/* Навигационная панель (только десктоп) */}
        <nav className="default_text relative my-[38px] hidden items-center justify-between gap-4 font-['inter'] text-sm font-normal sm:inline-flex">
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
          onClick={toggleMenu}
        >
          <img src={BurgerButton} alt="Меню" />
        </button>
      </header>

      {/* Бургер меню (мобильная версия) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[50] h-screen w-screen bg-[#029491] sm:hidden">
          <div className="flex items-center justify-between p-5">
            <Link to="/" onClick={closeMenu}>
              <img
                src={Scan_logo_burger}
                alt=""
                className="h-[80px] w-[80px]"
              />
            </Link>
            <button onClick={closeMenu} className="mr-[26px] h-[25px] w-[25px]">
              <img src={CloseIcon} alt="Закрыть" />
            </button>
          </div>
          <nav className="flex h-[60vh] flex-col items-center justify-center space-y-8">
            <Link to="/" className={style_link_burger} onClick={closeMenu}>
              Главная
            </Link>
            <Link to="*" className={style_link_burger} onClick={closeMenu}>
              Тарифы
            </Link>
            <Link to="*" className={style_link_burger} onClick={closeMenu}>
              FAQ
            </Link>
          </nav>
          <div className="flex flex-col items-center space-y-4">
            {!isLoggedIn && (
              <Link to="*" className={style_link_burger} onClick={closeMenu}>
                Зарегистрироваться
              </Link>
            )}
            <button
              className="h-[52px] w-[295px] rounded-lg bg-[#7CE3E1] px-8 py-3 font-['Inter'] text-[16px] text-white transition-colors hover:text-black"
              onClick={handleClick}
            >
              {isLoggedIn ? "Выйти" : "Войти"}
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default Header;
