import keySvg from '../../assets/img/svg/AuthKey.svg';
import FormAuth from './FormAuth';

export default function Auth() {
  return (
    <section className="grid grid-flow-col grid-cols-2 grid-rows-3 max-sm:flex max-sm:flex-col">
      {/* Блок с текстом */}
      <div
        id="text"
        className="mt-[5%] font-['Ferry'] text-[clamp(1rem,2.5vw,3rem)] leading-none font-black tracking-[2%] max-sm:order-1"
      >
        Для оформления подписки на тариф, необходимо авторизоваться.
      </div>

      {/* Контейнер с формой */}
      <div className="relative order-2 row-span-3 max-sm:order-2">
        {/* Форма аутентификации и регистрации */}
        <FormAuth />
      </div>
      {/* Изображение */}
      <div className="order-1 row-span-2 mt-[5%] ml-[20%] max-sm:order-3 max-sm:m-2">
        <img
          id="key"
          src={keySvg}
          className="h-[40vh] w-[75%] max-sm:w-full"
          alt="..."
        />
      </div>
    </section>
  );
}
