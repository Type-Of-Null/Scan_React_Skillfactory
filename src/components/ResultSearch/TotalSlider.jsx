import React from "react";
import Loader from "../loader";
import { useSearchStore } from "../../stores";
import { observer } from "mobx-react-lite";

const TotalSlider = observer(() => {
  const searchStore = useSearchStore();

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
          <div className="flex border border-amber-400 max-sm:static max-sm:flex-row">
            <div className="static h-auto w-auto flex-row rounded-t-[10px]">
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            {searchStore.state.combinedResults &&
              searchStore.state.combinedResults.map(
                ([date, total, risk], index) => (
                  <div
                    className="flex flex-col border-0 px-[27px] py-[17px]"
                    key={index}
                  >
                    <p>{date}</p>
                    <p>{total}</p>
                    <p>{risk}</p>
                  </div>
                ),
              )}
          </div>
        </>
      )}
    </div>
  );
});

export default TotalSlider;
