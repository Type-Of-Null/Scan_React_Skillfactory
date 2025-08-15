import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "../../stores";
import { Link } from "react-router-dom";
import smile from "../../assets/img/smile_avatar.png";
import { DEFAULT_VALUES } from "../../config";

const Signed = observer(() => {
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.checkToken();
  }, [authStore]);

  return (
    <section className="sm:flex items-center gap-1 mr-16 hidden">
      <div className="flex flex-col items-end">
        <span className="text-sm text-black opacity-70">{DEFAULT_VALUES.username}</span>
        <button
          className="border-none bg-transparent text-xs opacity-40"
          onClick={() => {
            authStore.clearAuthData();
          }}
        >
          <Link
            className="underline-none text-sm text-black hover:underline"
            to="/"
          >
            Выйти
          </Link>
        </button>
      </div>
			{/* По идее тут должна быть логика получения аватарки по id пользователя через API */}
      <img className="h-[32px] w-[32px]" src={smile} alt="user avatar" />
    </section>
  );
});

export default Signed;
