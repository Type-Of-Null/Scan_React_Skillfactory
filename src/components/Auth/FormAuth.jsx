import { NavLink, Link, useNavigate } from "react-router-dom";
import lock from "../../assets/img/svg/Lock.svg";
import google from "../../assets/img/svg/google.svg";
import facebook from "../../assets/img/svg/facebook.svg";
import yandex from "../../assets/img/svg/yandex.svg";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../stores";
import { useEffect } from "react";

const FormAuth = observer(() => {
  const DEFAULT_VALUES = {
    login: "sf_student1",
    password: "4i2385j",
  };
  const authStore = useAuthStore();
  const navigate = useNavigate();

  // useEffect(() => {
  //   store.userStore.token && navigate("/");
  // });

  const onSubmit = (data) => {
    authStore.setLogin(data.login);
    authStore.setPassword(data.password);
    authStore.getToken();
    console.log(data);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const inputStyle =
    "my-[5px] h-[43px] rounded-[5px] focus:border-blue-500 focus:outline-none border border-gray-300  px-5 text-base text-black tracking-[0.01em] shadow-[0_0_20px_rgba(0,0,0,0.05)]";
  const labelStyle =
    "relative mb-[15px] flex w-full flex-col text-[16px] leading-[19px] tracking-[0.02em] text-[#949494]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative col-start-2 row-start-1 row-end-3 mt-[10%] mr-[3%] mb-3 ml-[10%] flex flex-col items-center justify-between rounded-[10px] p-[25px] shadow-[0_0_20px_rgba(0,0,0,0.15)] md:max-w-3/4"
    >
      {/* Lock изображение */}
      <img
        src={lock}
        className="max-lg::w-[50px] absolute top-[-25px] left-[-25px] z-10 h-[70px] w-[70px] max-lg:h-[50px]"
        alt="..."
      />

      {/* Ссылки Войти и Зарегистрироваться */}
      <div className="flex w-full justify-center gap-x-10 max-sm:gap-x-2">
        <NavLink
          to="/auth"
          end
          className={({ isActive }) =>
            `mx-1 mb-10 pb-1 font-['Inter'] text-[16px] max-sm:px-0 max-sm:text-[14px] ${
              isActive
                ? "border-b-2 border-[#029491] text-[#029491]"
                : "text-gray-500"
            } max-sm:px-4`
          }
        >
          Войти
        </NavLink>
        <NavLink
          to="*"
          end
          className={({ isActive }) =>
            `mx-2.5 mb-10 pb-1 font-['Inter'] text-[16px] transition-colors max-sm:text-[14px] ${
              isActive
                ? "border-b-2 border-[#029491] text-[#029491]"
                : "border-b-2 text-gray-500"
            } max-sm:px-4`
          }
        >
          Зарегистрироваться
        </NavLink>
      </div>

      {/* Ввод логина и пароля */}
      {/* Логин */}
      <label className={labelStyle}>
        Логин или номер телефона:
        <input
          className={`${inputStyle} ${errors?.login ? "border-red-500" : ""}`}
          type="text"
          {...register("login", {
            required: "Введите корректные данные",
            autoComplete: "username",
            pattern: {
              value: /^[\w-]+$/,
            },
          })}
        />
        <div className="min-h-[30px]">
          {(errors.login || authStore.isAuthError) && (
            <p className="mt-1 text-center text-sm text-red-500">
              {errors.login?.message || "Неправильный логин или пароль"}
            </p>
          )}
        </div>
      </label>

      {/* Пароль */}
      <label className={labelStyle}>
        Пароль:
        <input
          className={`${inputStyle} ${errors?.password ? "border-red-500" : ""}`}
          type="password"
          {...register("password", {
            required: "Неправильный пароль",
            autoComplete: "current-password",
            placeholder: "Пароль",
          })}
        />
        <div className="min-h-[30px]">
          {errors.password && (
            <p className="mt-1 text-center text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
      </label>

      {/* Кнопка входа  */}

      <button
        type="submit"
        disabled={!isValid}
        className={`${
          !isValid ? "bg-[#a0acfa]" : "cursor-pointer bg-[#5970FF]"
        } default-text flex h-15 w-full items-center justify-center rounded-[5px] border-[1px] border-[#C7C7C7] text-[22px] font-medium tracking-[0.01em] text-white transition-colors duration-500 ease-in-out`}
      >
        Войти
      </button>

      <Link
        to="*"
        className="mt-[15px] text-[14px] tracking-[0.02em] text-[#5970FF] underline"
      >
        Восстановить пароль
      </Link>

      {/* Ссылки Войти через соцсети */}
      <span className="mt-4 w-full text-left text-[16px] tracking-[0.02em] text-[#949494]">
        Войти через
      </span>
      <div className="mt-3 flex w-full flex-row justify-items-start gap-[5%]">
        <Link to="https://google.com" target="_blank">
          <img src={google} alt="" />
        </Link>
        <Link to="https://facebook.com" target="_blank">
          <img src={facebook} alt="" />
        </Link>
        <Link to="https://yandex.ru" target="_blank">
          <img src={yandex} alt="" />
        </Link>
      </div>
    </form>
  );
});

export default FormAuth;
