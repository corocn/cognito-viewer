<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex>
          <v-card min-width="800px">
            <v-card-title class="amber">
              <div>
                <div class="headline">idToken</div>
              </div>
            </v-card-title>

            <v-card-text class="background-white">
              <JwtViewer :jwt="idToken.jwtToken" />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card min-width="800px">
            <v-card-title class="amber">
              <div>
                <div class="headline">accessToken</div>
              </div>
            </v-card-title>

            <v-card-text class="background-white">
              <JwtViewer :jwt="accessToken.jwtToken" />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card min-width="800px">
            <v-card-title class="amber">
              <div>
                <div class="headline">refreshToken</div>
              </div>
            </v-card-title>

            <v-card-text class="background-white">
              refreshToken is encrypted.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card min-width="800px">
            <v-card-title class="amber">
              <div>
                <div class="headline">others</div>
              </div>
            </v-card-title>

            <v-card-text class="background-white">
              <span>ClockDrift: {{ clockDrift }}</span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import JwtViewer from '@/components/JwtViewer'

export default {
  components: {
    JwtViewer
  },
  data() {
    return {
      currentSession: null
    }
  },
  mounted() {
    this.refresh()
  },
  computed: {
    idToken() {
      return this.currentSession
        ? this.currentSession.idToken
        : { jwtToken: '', payload: '' }
    },
    accessToken() {
      return this.currentSession
        ? this.currentSession.accessToken
        : { jwtToken: '', payload: '' }
    },
    clockDrift() {
      return this.currentSession ? this.currentSession.clockDrift : null
    }
  },
  methods: {
    async refresh() {
      this.currentSession = await Auth.currentSession()
    }
  }
}
</script>

<style scoped></style>
