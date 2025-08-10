import axios from "axios";
import { makeAutoObservable } from "mobx";

const API = "https://gateway.scan-interfax.ru";

class AuthStore {
	token = "";
	login = "";
	password = "";
	isAuthError = false;
	isLoading = false;
	isLoggedIn = false;

	constructor() {
		makeAutoObservable(this)
		this.checkToken();
		axios.interceptors.request.use(config => {
			config.headers["Authorization"] = `Bearer ${this.token}`;
			return config;
		})
	}

  setLogin = login => this.login = login;
  setPassword = password => this.password = password;
  setLoading = bool => this.isLoading = bool;
  setAuthError = bool => this.isAuthError = bool;
  setIsLoggedIn = bool => this.isLoggedIn = bool;
  setToken = token => this.token = token;
	

	// Метод получения токена
	getToken = () => {
		this.setLoading(true);
		axios
			.post(API + `/api/v1/account/login`, {
				login: `${this.login}`,
				password: `${this.password}`,
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
			})
			.then((response) => {
				if (response.status === 200) {
					this.setToken(response.data.accessToken);
					localStorage.setItem("token", response.data.accessToken);
					localStorage.setItem("expire", response.data.expire);
					localStorage.setItem("login", this.login);
					this.setLoading(false);
					this.setIsLoggedIn(true);
					this.setAuthError(false)
				}
			})
			.catch((err) => {
				console.log(err);
				this.setAuthError(true);
				this.setLoading(false);
				this.clearAuthData();
			});
	};

	// Метод проверки токена
	checkToken = () => {
		const token = localStorage.getItem('token');
		const expire = localStorage.getItem('expire');
		const now = new Date().getTime();

    if (!token || !expire || new Date(expire).getTime() <= now) {
      this.clearAuthData();
    } else {
      this.setToken(token);
      this.setIsLoggedIn(true);
    }
  };

	// Метод для очистки данных аутентификации
	clearAuthData = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('expire');
		localStorage.removeItem('login');
		this.setIsLoggedIn(false);
		this.setToken('');
		this.setLogin('');
		this.setPassword('');
	};
}

const authStore = new AuthStore();
export default authStore;