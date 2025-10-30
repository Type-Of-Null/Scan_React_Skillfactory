import { useAuthStore, useCompanyStore } from '../../stores';
import api from '../../api/axios';

export const useGetCompany = () => {
  const companyStore = useCompanyStore();
  const authStore = useAuthStore();

  return async () => {
    companyStore.setCompaniesLoading(true);

    try {
      const response = await api.get(`/api/v1/account/info`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      });

      if (response.status === 200) {
        companyStore.setCompanyLimits(
          response.data.eventFiltersInfo.usedCompanyCount,
          response.data.eventFiltersInfo.companyLimit,
        );
      }
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    } finally {
      companyStore.setCompaniesLoading(false);
    }
  };
};
