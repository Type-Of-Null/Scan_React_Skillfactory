import { useSearchStore } from '../../stores';
import api from '../../api/axios';

export const useGetArticle = () => {
  const searchStore = useSearchStore();

  return async () => {
    searchStore.setState('isDocumentLoading', true);
    try {
      const response = await api.post('/api/v1/documents', {
        ids: searchStore.state.IDs,
      });
      if (response.data) {
        searchStore.setState('document', response.data);
      }
    } catch (error) {
      console.error('Ошибка загрузки документов:', error);
    } finally {
      searchStore.setState('isDocumentLoading', false);
    }
  };
};
