<template>
  <v-card>
    <v-subheader>
      jwks.json
    </v-subheader>
    <v-container>
      <v-text-field label="uri" outline :value="jwksUri" />
    </v-container>

    <v-subheader>jwks.json</v-subheader>
    <v-container>
      <vue-json-pretty :data="jwks"></vue-json-pretty>
    </v-container>
  </v-card>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'

const JWKS_URI = `https://cognito-idp.${
  process.env.AUTH_REGION
}.amazonaws.com/${process.env.AUTH_USERPOOLID}/.well-known/jwks.json`

export default {
  async asyncData(context) {
    const jwks = await context.$axios.get(JWKS_URI)
    return { jwks: jwks.data }
  },
  components: {
    VueJsonPretty
  },
  computed: {
    jwksUri() {
      return JWKS_URI
    }
    // decoded() {
    //   return jsonwebtoken.decode(this.jwt, { complete: true })
    // },
    // header() {
    //   return this.decoded.header
    // },
    // payload() {
    //   return this.decoded.payload
    // }
  }
}
</script>

<style scoped>
input {
  width: 600px;
}
</style>
