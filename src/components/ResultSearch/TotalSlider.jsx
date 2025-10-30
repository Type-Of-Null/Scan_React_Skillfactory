import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import { useSearchStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import flag from '../../assets/img/flagSlider.png';

const TotalSlider = observer(() => {
  const searchStore = useSearchStore();
  const sliderElement = searchStore.state.combinedResults;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 550) setVisibleItems(1);
      else if (width < 600) setVisibleItems(2);
      else if (width < 940) setVisibleItems(3);
      else if (width < 1000) setVisibleItems(5);
      else if (width < 1200) setVisibleItems(6);
      else setVisibleItems(8);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleRightClick = () => {
    if (!sliderElement) return;
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.max(0, sliderElement.length - visibleItems)),
    );
  };

  const canGoLeft = currentIndex > 0;
  const canGoRight =
    sliderElement &&
    currentIndex < Math.max(0, sliderElement.length - visibleItems);

  const getOffset = () => {
    if (!sliderElement || sliderElement.length === 0) return 0;

    if (sliderElement.length <= visibleItems) {
      return 0;
    }

    return -currentIndex * (100 / visibleItems);
  };

  const getItemWidth = () => {
    if (!sliderElement || sliderElement.length === 0) return 'auto';

    const actualVisible = Math.min(sliderElement.length, visibleItems);
    return `${100 / actualVisible}%`;
  };

  if (!sliderElement || sliderElement.length === 0) {
    return (
      <div className="my-12 flex h-40 flex-col items-center justify-center rounded-[10px] border-2 border-[#029491]">
        <p className="text-lg text-black">Нет данных для отображения</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {searchStore.state.isLoading ? (
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

          <div className="flex items-center justify-center">
            <button
              onClick={handleLeftClick}
              disabled={!canGoLeft}
              className={`mr-2 h-[39px] w-[39px] rotate-180 transition-opacity ${
                canGoLeft
                  ? 'cursor-pointer opacity-100'
                  : 'cursor-not-allowed opacity-20'
              }`}
            >
              <img src={flag} alt="Назад" />
            </button>

            <div className="flex max-w-6xl flex-row overflow-hidden rounded-[10px] border border-[#029491]">
              <div className="flex w-[133px] flex-shrink-0 flex-col items-center justify-around bg-[#029491] text-xl font-medium text-white">
                <p className="py-1">Период</p>
                <p className="py-1">Всего</p>
                <p className="py-1">Риски</p>
              </div>

              <div className="relative flex-1 overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(${getOffset()}%)` }}
                >
                  {sliderElement.map(([date, total, risk], index) => (
                    <div
                      key={index}
                      className="flex flex-shrink-0 flex-col items-center justify-center border-l border-[#029491] px-4 text-[18px] lg:px-6"
                      style={{ width: getItemWidth(), minWidth: '120px' }}
                    >
                      <p className="py-2 text-center lg:text-base">{date}</p>
                      <p className="py-2 text-center lg:text-base">{total}</p>
                      <p className="py-2 text-center lg:text-base">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleRightClick}
              disabled={!canGoRight}
              className={`ml-2 h-[39px] w-[39px] transition-opacity ${
                canGoRight
                  ? 'cursor-pointer opacity-100'
                  : 'cursor-not-allowed opacity-20'
              }`}
            >
              <img src={flag} alt="Вперед" />
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default TotalSlider;
