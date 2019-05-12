<template>
  <v-layout column justify-center align-center>
    <v-card min-width="700px">
      <v-data-table :items="items" hide-actions hide-headers>
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.value }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  components: {},
  computed: {
    items() {
      return [
        {
          name: 'Identity Pool Id',
          value: process.env.AUTH_IDENTITYPOOLID
        },
        {
          name: 'Region',
          value: process.env.AUTH_REGION
        },
        {
          name: 'User Pool Id',
          value: process.env.AUTH_USERPOOLID
        },
        {
          name: 'User Pool Web Client Id',
          value: process.env.AUTH_USERPOOLWEBCLIENTID
        }
      ]
    }
  }
}
</script>
