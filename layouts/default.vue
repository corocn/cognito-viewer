<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <a v-on:click="dump">Console.log</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span>{{ username }}</span>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'person',
          title: 'Authenticator',
          to: '/'
        },
        {
          icon: 'vpn_key',
          title: 'Token',
          to: '/token'
        },
        {
          icon: 'info',
          title: 'Environment',
          to: '/env'
        },
        {
          icon: 'info',
          title: 'JSON Web Key',
          to: '/well-known'
        }
      ],
      buttons: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Cognito Viewer'
    }
  },
  computed: {
    username() {
      const user = this.$store.getters.user
      if (user != null) {
        return user.attributes.email
      } else {
        return ''
      }
    }
  },
  methods: {
    async dump() {
      console.log(await this.current())
    },
    async current() {
      const log = {}

      log.currentSession = await this.$Amplify.Auth.currentSession().catch(
        e => (log.currentSession = e)
      )

      log.currentUserInfo = await this.$Amplify.Auth.currentUserInfo().catch(
        e => (log.currentUserInfo = e)
      )

      log.currentAuthenticatedUser = await this.$Amplify.Auth.currentAuthenticatedUser().catch(
        e => (log.currentAuthenticatedUser = e)
      )

      return log
    }
  }
}
</script>
