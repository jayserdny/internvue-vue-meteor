import authModule from './auth.js'

export default {
  modules: {
    auth: authModule
  },
  state: {
  	users: []
  },
	mutations: {
		updateUsers(state, value) {
			console.log('users state mutated')
			state.users = value
		}
	}
}