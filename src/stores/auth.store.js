import { makeAutoObservable } from "mobx";

class AuthStore {
	constructor() {
		makeAutoObservable(this)
		this.checkToken();
	}

	token = "";
	login = "";
	password = "";
	isAuthError = false;
	isLoading = false;
	isLoggedIn = false;


	setLogin = login => this.login = login;
	setPassword = password => this.password = password;
	setLoading = bool => this.isLoading = bool;
	setAuthError = bool => this.isAuthError = bool;
	setIsLoggedIn = bool => this.isLoggedIn = bool;
	setToken = token => this.token = token;


	// Метод проверки токена
	checkToken = () => {
		const token = localStorage.getItem('token');
		const expire = localStorage.getItem('expire');
		const now = new Date().getTime();
	
		if (!token || !expire) {
			this.clearAuthData();
			return;
		}
	
		const expireTime = new Date(expire).getTime();
		if (isNaN(expireTime)) {
			this.clearAuthData();
			return;
		}
	
		if (expireTime <= now) {
			this.clearAuthData();
		} else {
			this.setToken(token);
			this.setIsLoggedIn(true);
		}
	};

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