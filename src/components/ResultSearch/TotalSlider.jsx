import React, { useState } from "react";
import Loader from "../loader";
import { useSearchStore } from "../../stores";
import { observer } from "mobx-react-lite";
import Flag from "../../assets/img/flagSlider.png";

const TotalSlider = observer(() => {
  const searchStore = useSearchStore();
  const sliderElement = searchStore.state.combinedResults;

  const [currentIndex, setCurrentIndex] = useState(0);

  const getIndex = (index) => {
    if (!sliderElement || sliderElement.length === 0) {
      throw new Error("sliderItems не определен или пуст.");
    }
    return (index + sliderElement.length) % sliderElement.length;
  };
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => getIndex(prevIndex + 1));
  };

  return (
    <div>
      {searchStore.state.isLoading === true ? (
        <div className="my-12 flex h-40 flex-col items-center justify-center rounded-[10px] border-2 border-[#029491]">
          <Loader />
          <p className="mt-2.5 text-lg tracking-[2%] text-black">
            Загружаем данные
          </p>
        </div>
      ) : (
        <>
          <h3 className="font-ferry text-[30px] font-bold tracking-[2%] text-black">
            Общая сводка
          </h3>
          <p className="default-text font-['Inter'] text-[18px] tracking-[2%] text-[#949494]">
            Найдено {searchStore.state.summaryAll} вариантов
          </p>

<div className="flex flex-row">

          {/* Кнопка "Влево" */}
          <button
            id="left_flag"
            onClick={handleLeftClick}
            className="mr-1 h-[39px] w-[39px] rotate-180 opacity-20 self-center"
          >
            <img src={Flag} alt="flag" />
          </button>

          <div className="flex flex-row items-stretch rounded-[10px] border border-[#029491]">
            <div className="flex w-[133px] flex-col items-center justify-center rounded-l-[10px] bg-[#029491] px-4 text-xl font-medium text-white">
              <p className="py-2">Период</p>
              <p className="py-2">Всего</p>
              <p className="py-2">Риски</p>
            </div>

            <div className="flex flex-1 flex-row overflow-x-auto">
              {searchStore.state.combinedResults &&
                searchStore.state.combinedResults.map(
                  ([date, total, risk], index) => (
                    <div
                      className="flex flex-col items-center justify-center border-l border-[#029491] px-[27px]"
                      key={index}
                    >
                      <p className="py-2">{date}</p>
                      <p className="py-2">{total}</p>
                      <p className="py-2">{risk}</p>
                    </div>
                  ),
                )}
            </div>
          </div>

            {/* Кнопка "Вправо" */}
            <button
              id="right_flag"
              onClick={handleRightClick}
              className="ml-1 h-[39px] w-[39px] opacity-20 self-center"
            >
              <img src={Flag} alt="flag" />
            </button>

</div>
        </>
      )}
    </div>
  );
});

export default TotalSlider;
