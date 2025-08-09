import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "../../stores";
import { Link } from "react-router-dom";
import smile from "../../assets/img/smile_avatar.png";

const Signed = observer(() => {
	const authStore = useAuthStore();
	const login = localStorage.getItem("login");

  useEffect(() => {
    authStore.checkToken();
  }, [authStore]);
	
  return (
    <div className="">
      <div className="user-info">
        <span className="username">{login}</span>
        <button
          className="logout"
          onClick={() => {
            authStore.setToken("");
            localStorage.clear();
          }}
        >
          <Link className="header-nav__link" to="/">
            Выйти
          </Link>
        </button>
      </div>
      <img className="user-avatar" src={smile} alt="user avatar" />
    </div>
  );
});

export default Signed;
