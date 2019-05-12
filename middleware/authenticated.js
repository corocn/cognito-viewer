import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, AmplifyEventBus } from 'aws-amplify-vue'

Vue.use(AmplifyPlugin, AmplifyModules)

let router = null
let store = null

Amplify.configure({
  Auth: {
    identityPoolId: process.env.AUTH_IDENTITYPOOLID,
    region: process.env.AUTH_REGION,
    userPoolId: process.env.AUTH_USERPOOLID,
    userPoolWebClientId: process.env.AUTH_USERPOOLWEBCLIENTID
  }
})

AmplifyEventBus.$on('authState', authState => {
  console.log('authState: %s', authState)

  if (router != null) {
    if (authState === 'signedIn') {
      // refreshUser()
      router.push('/token')
    }
  }
})

export default async context => {
  if (router == null) {
    router = context.app.router
  }

  if (store == null) {
    store = context.app.store
  }

  refreshUser()
}

const refreshUser = async () => {
  const user = await Amplify.Auth.currentAuthenticatedUser().catch(e => {})

  if (store != null) {
    if (user !== null && user !== undefined) {
      store.commit('setUser', user)
    } else {
      store.commit('setUser', null)
    }
  }

  return user
}
