import React from "react";
import Scan_logo from "../assets/img/Scan_logo.png";

export default function Header() {
  return (
    <header className="container absolute w-[1440px] h-[93px] left-0 top-0 bg-white">
      <img
        src={Scan_logo}
        alt=""
        className="absolute w-[141px] h-[141px] left-[60px] top-[-24px]"
      />
      <div className="container-nav absolute w-[236px] h-[17px] top-[38px] left-[602px] flex justify-between items-center font-normal font-['inter'] text-[14px] leading-none tracking-[0.01em]">
        <a href="#!" className="text-black hover:underline">
          Главная
        </a>
        <a href="#!" className="text-black">
          Тарифы
        </a>
        <a href="#!" className="text-black">
          FAQ
        </a>
      </div>
    </header>
  );
}
