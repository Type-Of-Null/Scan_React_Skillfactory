import { observer } from "mobx-react-lite";
import PromoImg from "../../assets/img/promo.png";
import { useAuthStore } from "../../stores";
import { Link } from "react-router-dom";

const Promo = observer(() => {
  const authStore = useAuthStore();

  return (
    <section id="promo" className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Текстовый блок с кнопкой */}
        <div className="flex flex-col items-center lg:w-1/2 lg:items-start">
          <h1 className="mb-6 text-center font-['Ferry'] text-3xl font-black sm:text-4xl lg:text-left lg:text-5xl">
            сервис по поиску публикаций о компании по его ИНН
          </h1>

          <p className="mb-8 max-w-lg text-center font-['Inter'] text-lg sm:text-xl lg:text-left">
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>

          <button
            id="button_request"
            className="bg-[#5970FF] rounded-lg px-8 py-4 font-['Inter'] text-lg font-medium text-white transition-colors hover:bg-[#4758d4] w-[300px] sm:w-[335px]"
          >
            {authStore.isLoggedIn ? (
              <Link to="/search">Запросить данные</Link>
            ) : (
              <Link to="/auth">Войти</Link>
            )}
          </button>
        </div>

        {/* Изображение */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            src={PromoImg}
            loading="lazy"
            alt="Промо изображение"
            className="mx-auto h-auto w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
});

export default Promo;
