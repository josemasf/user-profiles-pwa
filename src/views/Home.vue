<template>
  <div>
  <GenerateBtn @generate-profiles="generateProfiles"  />   
  <v-data-table :headers="headers"
    :items="profiles"
    :items-per-page="5"
    class="elevation-1">
  </v-data-table>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator';
  import {
    GenerateBtn
  } from '@/components'

  import{
    profileGenerator
  }
  from '@/repository'
import { FetchRequest } from '@/entity';

  @Component({
    components: {
      GenerateBtn
    }
  })
  export default class Home extends Vue {    
    
    private profiles: any = []   

    private headers = [
          {
            text: 'Gener',
            align: 'start',            
            value: 'gender',
          },
          { text: 'Name', value: 'fullname' },
          { text: 'Email', value: 'email' },
          { text: 'Nat', value: 'nat' },
          { text: 'Born', value: 'born' },
          { text: 'Registered', value: 'registered.date' },
        ]
      
    
    async generateProfiles():Promise<void> {     
      const response: FetchRequest = await profileGenerator(process.env.VUE_APP_NUM_OF_PROFILES)

      const pofilesMapped = response.results.map( (profile) => {

        const bornDate = new Date(profile.dob.date).toLocaleString().split(' ')[0]
        
        return {
          ...profile,
          fullname: `${profile.name.title} ${profile.name.first} ${profile.name.last}`,
          born: `${bornDate}`
        }
      })
      
      this.profiles = pofilesMapped;
    }
  }

</script>
