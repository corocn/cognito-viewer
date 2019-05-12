<template>
  <v-layout column justify-center align-center>
    <template v-if="authenticated">
      <v-btn color="error" v-on:click="signOut">Sign Out</v-btn>
    </template>
    <amplify-authenticator></amplify-authenticator>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user']),
    authenticated() {
      if (this.user !== null && this.user !== undefined) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      window.location.reload()
    }
  }
}
</script>
