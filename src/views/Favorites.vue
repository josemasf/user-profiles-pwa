<template>
  <div class="favorites">
    <v-data-table :items="favoritesProfiles" :headers="headers" :loading="loading">
    </v-data-table>
    <vue-json-to-csv :json-data="favoritesProfiles" :labels="{
    gender: { title: 'Género' },
    email: { title: 'Email' },
    nat: { title: 'Nacionalidad' },
    born: { title: 'F.Nacimiento' },
    registered: { title: 'F.Registro' },
  }" >
      <v-btn color="primary" class="ma-2 white--text">
        Download CSV
        <v-icon right dark>
          mdi-download
        </v-icon>
      </v-btn>
    </vue-json-to-csv>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';

  import VueJsonToCsv from 'vue-json-to-csv'
  import {
    api
  } from '@/repository';
import { Profile } from '@/entity';


  @Component({
    components: {
      VueJsonToCsv
    }
  })
  export default class About extends Vue {

    favorites: any[] = []
    favoritesProfiles: any[] = []

    private headers = [{
        text: 'Gener',
        align: 'start',
        value: 'gender',
      },
      {
        text: 'Name',
        value: 'fullname'
      },
      {
        text: 'Email',
        value: 'email'
      },
      {
        text: 'Nationality',
        value: 'nat'
      },
      {
        text: 'Born',
        value: 'born'
      },
      {
        text: 'Registered',
        value: 'registered'
      },
    ]

    private loading = true

    async mounted() {    
      
      await api.readAll().then((fav) => {                
        Array.from(fav).forEach((profile: any)=>{
          this.favorites.push(profile.data)
        })        
        
      })

      this.favoritesProfiles = this.favorites
      this.loading = false
    }
  }

</script>

