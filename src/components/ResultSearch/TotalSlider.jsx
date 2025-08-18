import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../Loader";
import { useSearchStore } from "../../stores";
import { observer } from "mobx-react-lite";

let settings = {
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TotalSlider = observer(() => {
  const searchStore = useSearchStore();

  return (
    <div>
      {searchStore.state.isLoading === true ? (
        <div className="slider-loader">
          <Loader />
          <p className="loading-data">Загружаем данные</p>
        </div>
      ) : (
        <>
          <h3 className="summary-title">Общая сводка</h3>
          <p className="summary-all">
            Найдено {searchStore.state.summaryAll} вариантов
          </p>
          <div className="slider-wrapper">
            <div className="slider-titles">
              <p>Период</p>
              <p>Всего</p>
              <p>Риски</p>
            </div>
            <Slider className="summary-slider" {...settings}>
              {searchStore.state.summaryDates &&
                searchStore.state.summaryDates.map((el, index) => (
                  <div className="slider-item" key={index}>
                    <p>{el}</p>
                    <p>{searchStore.state.summaryTotal[index]}</p>
                    <p>{searchStore.state.summaryRisks[index]}</p>
                  </div>
                ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
});

export default TotalSlider;
