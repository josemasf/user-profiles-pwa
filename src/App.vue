<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark      
    >
      <v-icon
      large
      color="secondary darken-2"
    >
      mdi-account-circle
    </v-icon>
      <span class="secondary--text"><strong>User profiles</strong></span>
      <v-spacer></v-spacer>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
