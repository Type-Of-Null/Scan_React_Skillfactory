import { createContext, useContext } from "react";
import AuthStore from "./auth.store";

const rootStore = {
  userStore: new AuthStore(),
};

// Создаём контекст с привязкой к rootStore
const StoreContext = createContext(rootStore);

// Хук для доступа к хранилищу
export const useStore = () => useContext(StoreContext);
// Хук для доступа к хранилищу для авторизации
export const useAuthStore = () => useStore().userStore;
export default rootStore;
