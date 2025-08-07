import axios from "axios";
import { makeAutoObservable } from "mobx";

const API = "https://gateway.scan-interfax.ru";

class AuthStore {
	token = "";
	login = "";
	password = "";
	isAuthError = false;
	isLoading = false;

	constructor() {
		makeAutoObservable(this);
	}

	setLogin = (login) => {
		this.login = login;
	};
	setPassword = (password) => {
		this.password = password;
	};
	setLoading = (bool) => {
		this.isLoading = bool;
	};
	setAuthError = (bool) => {
		this.isAuthError = bool;
	};


	setToken = (token) => {
		axios.interceptors.request.use(config => {
			config.headers["Authorization"] = `Bearer ${token}`;
			return config;
		});
		this.token = token;
	};

	getToken = () => {
		this.setLoading(true);
		axios
			.post(API + `/api/v1/account/login`, {
				login: `${this.login}`,
				password: `${this.password}`,
			})
			.then((response) => {
				if (response.status === 200) {
					this.setToken(response.data.accessToken);
					localStorage.setItem("token", response.data.accessToken);
					localStorage.setItem("login", this.login);
					this.setLoading(false);
					let currentDate = new Date();
					let expire = currentDate.setDate(currentDate.getDate() + 2);
					localStorage.setItem("expire", expire);
					console.log('sdfsd')
				}
			})
			.catch((err) => {
				console.log(err);
				this.setAuthError(true);
				this.setLoading(false);
				localStorage.setItem("token", "");
				this.setLogin("");
				this.setPassword("");
			});
	};
	checkToken = () => { /* ... */ };
}

export default AuthStore;