import { Link } from 'react-router-dom';
export default function NotSigned() {
  return (
    <section
      id="auth-container"
      className="mt-[33px] mr-2 mb-8.5 ml-auto hidden h-[26px] items-center sm:inline-flex"
    >
      <Link
        to="*"
        id="register_link"
        className="default_text mt-[4px] mb-[5px] h-[17px] w-[146px] font-['Inter'] text-sm font-normal opacity-40"
      >
        Зарегистрироваться
      </Link>
      <div className="mt-[33px] mb-8.5 ml-[18px] h-[26px] w-[2px] rotate-180 bg-[#029491] opacity-60"></div>
      <button className="default_text ml-[20px] flex h-[26px] w-[65px] items-center justify-center rounded-[5px] bg-[#7CE3E1] font-['Inter'] text-sm font-medium">
        <Link to="/auth" id="login_link">
          Войти
        </Link>
      </button>
    </section>
  );
}
