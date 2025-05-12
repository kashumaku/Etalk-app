import { types } from 'mobx-state-tree'

export const AuthenticationModel = types
	.model({
		accessToken: types.maybeNull(types.string),
		refreshToken: types.maybeNull(types.string),
		isAuthenticated: types.optional(types.boolean, false),
	})
	.actions((store) => ({
		setIsAuthenticated(value: boolean) {
			store.isAuthenticated = value
		},
		setAccessToken(value: string) {
			store.accessToken = value
		},
		setRefreshToken(value: string) {
			store.refreshToken = value
		},
	}))
