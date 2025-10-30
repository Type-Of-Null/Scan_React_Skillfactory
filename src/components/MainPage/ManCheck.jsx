import { useMediaQuery } from 'react-responsive';
import svg from '../../assets/img/svg/ManCheck.svg';
import minisvg from '../../assets/img/svg/ManCheckMini.svg';

export default function ManCheck() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      <section
        id="container_man"
        className="mt-[70px] max-h-[218px] w-full pl-[14px] max-sm:max-w-[288px] sm:max-h-[575.52px] sm:pr-[5%] sm:pl-[5%]"
      >
        <img src={isMobile ? minisvg : svg} alt="Изображение" loading="lazy" />
      </section>
    </>
  );
}
