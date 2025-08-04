import PromoImg from "../../assets/img/promo.png";

export default function Promo() {
  return (
    <section id="promo" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Текстовый блок с кнопкой */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Ferry'] text-center lg:text-left mb-6">
            сервис по поиску публикаций о компании по его ИНН
          </h1>
          
          <p className="text-lg sm:text-xl font-['Inter'] text-center lg:text-left mb-8 max-w-lg">
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          
          <button
            id="button_request"
            className="bg-[#5970FF] text-white font-['Inter'] font-medium rounded-lg px-8 py-4 text-lg hover:bg-[#4758d4] transition-colors w-full sm:w-auto"
          >
            Запросить данные
          </button>
        </div>

        {/* Изображение */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img 
            src={PromoImg} 
            loading="lazy" 
            alt="Промо изображение"
            className="w-full h-auto max-w-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}