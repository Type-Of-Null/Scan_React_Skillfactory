import { useState } from "react";
import SliderElement from "./SliderElement";
import Flag from "../assets/img/flagSlider.png";
import time from "../assets/img/sliderImgs/time.png";
import find from "../assets/img/sliderImgs/find.png";
import protect from "../assets/img/sliderImgs/protect.png";
import cool from "../assets/img/sliderImgs/cool.png";
import rating from "../assets/img/sliderImgs/rating.png";

export default function Slider() {
  // Массив данных для карусели, без использования сторонних библиотек
  const sliderItems = [
    { text: "Высокая и оперативная скорость обработки заявки", image: time },
    {
      text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      image: find,
    },
    {
      text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      image: protect,
    },
    {
      text: "Множество довольных и счастливых до безумия клиентов",
      image: cool,
    },
    {
      text: "Положительные отзывы о работе с нами. С Вами работают профессионалы!",
      image: rating,
    },
  ];

  // Состояние для текущего индекса элемента слайдера
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для получения индекса с учетом бесконечной прокрутки
  const getIndex = (index) => {
    if (!sliderItems || sliderItems.length === 0) {
      throw new Error("sliderItems не определен или пуст.");
    }
    return (index + sliderItems.length) % sliderItems.length;
  };

  // Функция для переключения на предыдущую группу элементов
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex - 1));
  };

  // Функция для переключения на следующую группу элементов
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
  };

  return (
    <section id="slider_section" className="flex flex-col items-center max-sm:items-start">
      <div id="slider_container" className="flex items-center">
        {/* Кнопка "Влево" */}
        <button
          id="left_flag"
          onClick={handleLeftClick}
          className="mr-1 h-[39px] w-[39px] rotate-180 opacity-20"
        >
          <img src={Flag} alt="flag" />
        </button>

        {/* Отображение трех элементов */}
        <div className="sm:flex sm:gap-7.5 sm:h-[225px]  sm:w-[1260px]">
          {[0, 1, 2].map((offset) => {
            const index = getIndex(currentIndex + offset);
            return (
              <SliderElement
                key={index}
                text={sliderItems[index].text}
                image={sliderItems[index].image}
                className={offset === 0 ? "block" : "hidden sm:block"}
              />
            );
          })}
        </div>

        {/* Кнопка "Вправо" */}
        <button
          id="right_flag"
          onClick={handleRightClick}
          className="ml-1 h-[39px] w-[39px] opacity-20"
        >
          <img src={Flag} alt="flag" />
        </button>
      </div>
    </section>
  );
}
