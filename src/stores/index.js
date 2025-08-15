import { createContext, useContext } from "react";
import authStore from "./auth.store";
import compStore from "./company.store";
import searchStore from "./search.store";

const rootStore = {
	userStore: authStore,
	companyStore: compStore,
	searchStore: searchStore
};

// Создаём контекст с привязкой к rootStore
const StoreContext = createContext(rootStore);

// Хук для доступа к хранилищу
export const useStore = () => useContext(StoreContext);

export const useAuthStore = () => useStore().userStore;
export const useCompanyStore = () => useStore().companyStore;
export const useSearchStore = () => useStore().searchStore;
export default rootStore;