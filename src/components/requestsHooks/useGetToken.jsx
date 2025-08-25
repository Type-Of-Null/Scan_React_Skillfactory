import { useAuthStore } from "../../stores";
import api from "../../api/axios";

export const useGetToken = () => {
  const authStore = useAuthStore();

  const fetchToken = async () => {
    authStore.setLoading(true);

    try {
      const { login, password } = authStore;
      const response = await api.post(
        "/api/v1/account/login",
        {
          login,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const { accessToken, expire } = response.data;

        authStore.setToken(accessToken);
        authStore.setIsLoggedIn(true);
        authStore.setAuthError(false);

        localStorage.setItem("token", accessToken);
        localStorage.setItem("expire", expire);
        localStorage.setItem("login", login);
      }
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      authStore.setAuthError(true);
      authStore.clearAuthData();
    } finally {
      authStore.setLoading(false);
    }
  };

  return fetchToken;
};
