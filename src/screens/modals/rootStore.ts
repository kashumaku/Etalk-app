import { Instance, types } from "mobx-state-tree";
import { AuthenticationModel } from "./authenticationStore";

export const rootStoreModel = types.model({
    authenticationStore:types.optional(AuthenticationModel,{})
})

export type RootStoreType = Instance<typeof rootStoreModel>