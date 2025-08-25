import { useSearchStore } from "../../stores";
import api from "../../api/axios";

export const useGetIDArticles = () => {
  const searchStore = useSearchStore();

  const fetchIDArticle = async () => {
    searchStore.setState("isLoading", true);
    const params = searchStore.searchParamsIdDocuments
    try {
      const response = await api.post(
        "/api/v1/objectsearch",
				params
      );

      if (response.data && response.data.items) {
        const docID = response.data.items.map(item => item.encodedId);
        searchStore.setState("IDs", docID);
      }
      
      return response;
    } catch (error) {
      console.error(error);
      searchStore.setState("isError", true);
      throw error; 
    } finally {
      searchStore.setState("isLoading", false);
    }
  };

  return fetchIDArticle;
};