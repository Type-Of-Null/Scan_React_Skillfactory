import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      {/* Заголовок ошибки */}
      <h1 className="mb-6 text-center font-['Ferry'] text-[clamp(2rem,5vw,4rem)] font-black">
        404 - Страница не найдена
      </h1>

      {/* Описание ошибки */}
      <p className="mb-8 max-w-[600px] text-center font-['Inter'] text-[clamp(1rem,2vw,1.5rem)]">
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>

      {/* Кнопка возврата */}
      <Link
        to="/"
        className="rounded-[5px] bg-[#5970FF] px-6 py-3 font-['Inter'] font-medium text-white transition-colors hover:bg-[#4758d4]"
      >
        Вернуться на главную
      </Link>
    </section>
  );
}
