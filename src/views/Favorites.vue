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
  }" @success="showToast(false)" @error="showToast(false)">
      <v-btn color="primary" class="ma-2 white--text">
        Download CSV
        <v-icon right dark>
          mdi-download
        </v-icon>
      </v-btn>
    </vue-json-to-csv>

     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
    private snackbar = false
    private text = 'CSV file generated successfully.'
    private timeout = 2000

    async mounted() {

      await api.readAll().then((fav) => {
        Array.from(fav).forEach((profile: any) => {
          this.favorites.push(profile.data)
        })

      })

      this.favoritesProfiles = this.favorites
      this.loading = false
    }

    showToast(haveError: boolean): void{
      this.snackbar = true

      if(haveError){
        this.text = "Error generating file"        
      }
      else{
        this.$emit('csv-generated')
      }

      
    }
  }

</script>

