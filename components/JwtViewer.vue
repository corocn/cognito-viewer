<template>
  <div>
    <v-subheader>
      JWT
    </v-subheader>
    <v-container>
      <v-text-field label="raw token" outline :value="jwt" />
    </v-container>

    <template v-if="jwt">
      <v-subheader>header</v-subheader>
      <v-container>
        <vue-json-pretty :data="header"></vue-json-pretty>
      </v-container>
      <v-subheader>payload</v-subheader>
      <v-container>
        <vue-json-pretty :data="payload"></vue-json-pretty>
      </v-container>
    </template>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import jsonwebtoken from 'jsonwebtoken'

export default {
  props: ['jwt'],
  components: {
    VueJsonPretty
  },
  computed: {
    decoded() {
      return jsonwebtoken.decode(this.jwt, { complete: true })
    },
    header() {
      return this.decoded.header
    },
    payload() {
      return this.decoded.payload
    }
  }
}
</script>

<style scoped>
input {
  width: 600px;
}
</style>
