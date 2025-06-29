import React, { useState } from "react";
import SliderElement from "./SliderElement";
import Flag from "../assets/img/FlagSlider.png";
import find from "../assets/img/SliderImgs/find.png";

export default function Slider() {
  // Массив данных для карусели, без использования сторонних библиотек
  const sliderItems = [
    { text: "Первый элемент", image: find },
    { text: "Второй элемент", image: "/path/to/image2.png" },
    { text: "Третий элемент", image: "/path/to/image3.png" },
    { text: "Четвертый элемент", image: "/path/to/image4.png" },
    { text: "Пятый элемент", image: "/path/to/image5.png" },
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
    <section id="slider_section" className="flex flex-col items-center">
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
        <div className="flex h-[225px] w-[1260px] gap-7.5">
          {[0, 1, 2].map((offset) => {
            const index = getIndex(currentIndex + offset);
            return (
              <SliderElement
                key={index}
                text={sliderItems[index].text}
                image={sliderItems[index].image}
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
