import Amplify from 'aws-amplify'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async signOut(context) {
    Amplify.Auth.signOut().catch(e => {
      console.log(e)
    })
    context.commit('setUser', null)
  }
}

export const getters = {
  user(state) {
    return state.user
  }
}
