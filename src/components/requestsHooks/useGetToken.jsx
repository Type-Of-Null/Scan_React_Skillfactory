import { useAuthStore } from '../../stores';
import api from '../../api/axios';

export const useGetToken = () => {
  const authStore = useAuthStore();

  return async () => {
    authStore.setLoading(true);

    try {
      const { login, password } = authStore;
      const response = await api.post('/api/v1/account/login', {
        login,
        password,
      });

      if (response.status === 200) {
        const { accessToken, expire } = response.data;

        authStore.setToken(accessToken);
        authStore.setIsLoggedIn(true);
        authStore.setAuthError(false);

        localStorage.setItem('token', accessToken);
        localStorage.setItem('expire', expire);
        localStorage.setItem('login', login);
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      authStore.setAuthError(true);
      authStore.clearAuthData();
    } finally {
      authStore.setLoading(false);
    }
  };
};
