import { createContext, useContext } from "react";
import authStore from "./auth.store";
import compStore from "./company.store";

const API = "https://gateway.scan-interfax.ru";

const rootStore = {
	userStore: authStore,
	companyStore: compStore,
};

// Создаём контекст с привязкой к rootStore
const StoreContext = createContext(rootStore);

// Хук для доступа к хранилищу
export const useStore = () => useContext(StoreContext);

export const useAuthStore = () => useStore().userStore;
export const useCompanyStore = () => useStore().companyStore;
export default rootStore;