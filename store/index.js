const actions = {
	onAuthStateChangedAction: (ctx, { authUser, claims }) => {
		if (!authUser) {
		  // claims = null
		  // Perform logout operations
		  state.commit('SET_USER', null)
		  this.$router.push({
			  path: '/auth/login'
		  })
		} else {
			const {uid, email } = authUser
			state.commit('SET_USER',{
				uid,
				email,
			})
		  // Do something with the authUser and the claims object...
		}
	  }
}


export const mutations = {
	ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
	  // Don't do this:
	  state.user = authUser
	  // Do this:
	  const { uid, email, emailVerified } = authUser
	  state.user = { uid, email, emailVerified }
	}
  }

  const getters = {
	getUser(state) {
		return state.user
	}
  }

  const state = () => ({
	user: null,
  })
  
  export default {
	state,
	actions,
	mutations,
	getters
  }