import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(AmplifyPlugin, AmplifyModules)

Amplify.configure({
  Auth: {
    identityPoolId: process.env.AUTH_IDENTITYPOOLID,
    region: process.env.AUTH_REGION,
    userPoolId: process.env.AUTH_USERPOOLID,
    userPoolWebClientId: process.env.AUTH_USERPOOLWEBCLIENTID
  }
})
