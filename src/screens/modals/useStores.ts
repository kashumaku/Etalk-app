import { createContext, useContext } from "react";
import { rootStoreModel, RootStoreType } from "./rootStore";
export const rootStore = rootStoreModel.create({}) 
const rootStoreContext = createContext<RootStoreType>(rootStore)

export const RootStoreProvider = rootStoreContext.Provider

export const useStore = ()=>useContext(rootStoreContext)
