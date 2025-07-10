import { useMediaQuery } from "react-responsive";
import svg from "../assets/img/svg/ManCheck.svg";
import minisvg from "../assets/img/svg/ManCheckMini.svg";

export default function ManCheck() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      <section
        id="container_man"
        className="mt-[70px] ml-[14px] h-[218px] w-[288px] sm:ml-[51px] sm:h-[575.52px] sm:w-[1307px]"
      >
        <img src={isMobile ? minisvg : svg} alt="Изображение" loading="lazy" />
      </section>
    </>
  );
}
