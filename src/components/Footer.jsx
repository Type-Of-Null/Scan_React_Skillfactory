import Scan_logo_footer from "../assets/img/scan_logo_footer.png";
import { memo } from "react";
function Footer() {
  return (
    <footer className="flex h-[137px] w-full justify-between bg-[#029491] max-sm:mt-auto max-sm:w-auto">
      <img
        src={Scan_logo_footer}
        alt=""
        className="-mt-[12px] ml-[18px] h-[111px] w-[111px] sm:-mt-[2px] sm:ml-15 sm:h-[141px] sm:w-[141px]"
      />
      <div
        id="address"
        className="mt-[25px] mr-[45px] flex flex-col text-right font-['Inter'] text-sm tracking-[-1%] whitespace-pre-line text-white max-sm:mt-[25px] max-sm:mr-[19px]"
      >
        <span>{"г. Москва, Цветной б-р, 40 \n +7 495 771 21 11 \ninfo@skan.ru"}</span>
        <span className="mt-[16px]">{"Copyright. 2025"}</span>
      </div>
    </footer>
  );
}

export default memo(Footer)