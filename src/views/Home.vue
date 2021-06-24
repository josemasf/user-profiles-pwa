<template>
  <div>
  <GenerateBtn @generate-profiles="generateProfiles"  />   
  <v-data-table :headers="headers"
    :items="profiles"    
    fixed-header
    :loading="loading"
    class="elevation-1">
     <template v-slot:item.fullname="{ item }">
      
        <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >{{item.fullname}}</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >{{item.fullname}}</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">
                <v-row>
                  <v-col cols="3">                    
                    <v-avatar size="80">
                      <img
                        :src="item.picture.medium"
                        alt="John"
                      >
                    </v-avatar>
                  </v-col>
                  <v-col cols="6">
                    <Map :latitude="Number(item.location.coordinates.latitude)" :longitude="Number(item.location.coordinates.longitude)" :id="item.login.uuid" />
                  </v-col>
                  <v-col cols="3">
                    <v-btn                      
                      color="yellow accent-4"
                      class="ma-2 white--text"                      
                    >
                      Favorite
                      <v-icon
                        right
                        dark
                      >
                        mdi-star
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="body-1">
                    <p>{{item.fullname}}</p>
                    <p>{{item.location.city}}</p>
                    <p>{{item.location.street.name}}</p>
                    <p>{{item.phone}} - {{item.cell}}</p>
                  </v-col>
                </v-row>
                
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      
    </template>
  </v-data-table>
  <section id="filter">
    <v-row>
      <v-col md="4" cols="12">
        <v-row>        
        <v-col
          cols="12"          
        >
          <v-select
            v-model="selectedGenders"
            :items="genders"
            :menu-props="{ maxHeight: '400' }"
            label="Select"            
            hint="Select people with the following gener"
            persistent-hint
          ></v-select>
        </v-col>
        </v-row>
      </v-col>
      <v-col md="4" cols="12">
        <v-row>        
        <v-col
          cols="12"          
        >
          <v-select
            v-model="selectedAges"
            :items="ages"
            :menu-props="{ maxHeight: '400' }"
            label="Select"            
            hint="Select people with the following age"
            persistent-hint
          ></v-select>
        </v-col>
        </v-row>
      </v-col>
      <v-col md="4" cols="12">
        <v-row>        
        <v-col
          cols="12"          
        >
          <v-select
            v-model="selectedNationalities"
            :items="nationalities"
            :menu-props="{ maxHeight: '400' }"
            label="Select"            
            hint="Select people with the following nationality"
            persistent-hint
          ></v-select>
        </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Watch
  } from 'vue-property-decorator';
  import {
    GenerateBtn,
  } from '@/components'

  import 
    Map
   from '@/components/Map/Map.vue'

  import{
    profileGenerator
  }
  from '@/repository'
import { FetchRequest, Profile } from '@/entity';

  @Component({
    components: {
      GenerateBtn,
      Map
    }
  })
  export default class Home extends Vue {    
    
    private profiles: any = [];
    private profilesOriginal: any = [];
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
          { text: 'Registered', value: 'registered' },
        ]
      
    private loading = false;

    private genders: any = []   
    private selectedGenders = ''
    private ages: any = []   
    private selectedAges = 0
    private nationalities: any = []   
    private selectedNationalities = ''

    private locInfo = ''

    async generateProfiles():Promise<void> {     
      this.loading = true;
      const response: FetchRequest = await profileGenerator(process.env.VUE_APP_NUM_OF_PROFILES)

      const pofilesMapped = response.results.map( (profile) => {

        const bornDate = new Date(profile.dob.date).toLocaleString().split(' ')[0]
        const registeredDate = new Date(profile.registered.date).toLocaleString().split(' ')[0]
        
        return {
          ...profile,
          fullname: `${profile.name.title} ${profile.name.first} ${profile.name.last}`,
          born: `${bornDate}`,
          registered: `${registeredDate}`,
        }
      })
      
      this.profiles = pofilesMapped;
      this.profilesOriginal = this.profiles;
      
      this.getFilterAvailibles()

      this.loading = false;

    }


    getFilterAvailibles(): void{
      this.genders =  Array.from([... new Set(this.profiles.map((profile: Profile) => profile.gender))])
      this.ages =  Array.from([... new Set(this.profiles.map((profile: Profile) => profile.dob.age))])
      this.nationalities =  Array.from([... new Set(this.profiles.map((profile: Profile) => profile.nat))])
    }

    @Watch('selectedGenders')
    filterByGener(): void{
      this.selectedAges= 0
      this.selectedNationalities = ''
      this.profiles = this.profilesOriginal
      this.profiles = this.profilesOriginal.filter( (profile: Profile) => profile.gender === this.selectedGenders)
    }
    
    @Watch('selectedAges')
    filterByAge(): void{
      this.selectedGenders= ''
      this.selectedNationalities = ''
      this.profiles = this.profilesOriginal

      this.profiles = this.profilesOriginal.filter( (profile: Profile) => profile.dob.age === this.selectedAges)
    }
    
    @Watch('selectedNationalities')
    filterByNationalities(): void{
      this.selectedAges= 0
      this.selectedGenders = ''
      this.profiles = this.profilesOriginal

      this.profiles = this.profilesOriginal.filter( (profile: Profile) => profile.nat === this.selectedNationalities)
    }    
  }

</script>
