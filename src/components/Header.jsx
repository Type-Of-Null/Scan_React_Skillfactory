import React from "react";
import Scan_logo from "../assets/img/Scan_logo.png";

const link_style = "text-black h-[17px] hover:underline hover:text-blue-500";

export default function Header() {
  return (
    <header id="header_container" className="flex h-[93px] w-[1440px] bg-white">
      <img src={Scan_logo} alt="" className="-mt-6 ml-15 h-[141px] w-[141px]" />
      <div className="container-nav my-[38px] ml-[401px] flex h-[17px] w-[236px] items-center justify-between font-['inter'] text-[14px] leading-none font-normal tracking-[0.01em]">
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
      <div
        id="container-login"
        className="mt-[33px] mb-8.5 ml-[291px] flex h-[26px] w-[251px] items-center"
      >
        <div
          id="register_link"
          className="mt-[4px] mb-[5px] h-[17px] w-[146px] font-['Inter'] text-[14px] leading-none font-normal tracking-[0.01em] opacity-40"
        >
          Зарегистрироваться
        </div>
        <div className="mt-[33px] mb-8.5 ml-[18px] h-[26px] w-[2px] rotate-180 bg-[#029491] opacity-60"></div>
        <button
          id="button_login"
          className="ml-[20px] h-[26px] w-[65px] rounded-[5px] bg-[#7CE3E1] font-['Inter'] text-[14px] leading-none font-medium tracking-[0.01em]"
        >Войти</button>
      </div>
    </header>
  );
}
