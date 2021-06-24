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
      <router-link :to="{path: '/'}"><span class="secondary--text"><strong>User profiles</strong></span></router-link>
      <v-spacer></v-spacer>
      <v-icon
      large
      color="yellow darken-2"
    >
      mdi-star
    </v-icon>
     <router-link :to="{path: 'favorites'}"><span class="yellow--text darken-2 right"><strong>Favorites</strong></span></router-link>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
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
