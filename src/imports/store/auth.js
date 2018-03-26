import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

const authModule = {
	state: {
		user: null,
	},
	mutations: {
		updateUser(state, value) {
			state.user = value
		},
    	isUsernameValid(state, value) {
      		state.isUsernameValid = value
    	}
	},
	actions: {
		submitRegisterForm({commit, state}, formData) {
			Accounts.createUser(formData, error => {
				error ? console.log(error.reason) : console.log('user registered')
			})
		},
		submitLoginForm({commit, state}, formData) {
			return new Promise(resolve => {
				Meteor.loginWithPassword(formData.username, formData.password, error => {
					error ? resolve({status: false, message: error.reason}) : resolve({status: true, message: 'user logged in'});
				});
			});
		
		},
		logout() {
			return new Promise(resolve => {
				Meteor.logout(() => {
					resolve({status: true, message: 'user logged out'});
				});
			});
		}
	}
}

export default authModule;