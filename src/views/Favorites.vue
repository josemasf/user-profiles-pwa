<template>
  <div class="favorites">
    <v-data-table :items="favorites" :headers="headers" :loading="true">
    </v-data-table>
    <vue-json-to-csv :json-data="favorites" :labels="{
    gender: { title: 'Género' },
    email: { title: 'Email' },
    nat: { title: 'Nacionalidad' },
    born: { title: 'F.Nacimiento' },
    registered: { title: 'F.Registro' },
  }" @success="val => handleSuccess(val)" @error="val => handleError(val)">
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

    /*favorites = [
    {
gender: "male",
name: {
title: "Mr",
first: "Khaled",
last: "Wold"
},
location: {
street: {
number: 9355,
name: "Østensjø terrasse"
},
city: "Skibotn",
state: "Møre og Romsdal",
country: "Norway",
postcode: "9326",
coordinates: {
latitude: "50.0435",
longitude: "-5.5318"
},
timezone: {
offset: "+11:00",
description: "Magadan, Solomon Islands, New Caledonia"
}
},
email: "khaled.wold@example.com",
login: {
uuid: "7ffefb60-273b-4692-979b-adedf1a3851c",
username: "organicpanda694",
password: "irving",
salt: "kDlTyKjt",
md5: "999f285490aba4b253b29f21be84eb3a",
sha1: "794622f3ae60a0f41f1220505bd68ccc19e877a4",
sha256: "226c4bed03ef94968050f8cbf0934f8d14cbd231dc7b14961f22db0a02870b35"
},
dob: {
date: "1990-08-06T05:57:26.473Z",
age: 31
},
registered: {
date: "2017-10-20T02:30:00.957Z",
age: 4
},
phone: "80625308",
cell: "44137355",
id: {
name: "FN",
value: "06089002948"
},
picture: {
large: "https://randomuser.me/api/portraits/men/86.jpg",
medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg"
},
nat: "NO"
},
{
gender: "female",
name: {
title: "Ms",
first: "Signe",
last: "Madsen"
},
location: {
street: {
number: 7757,
name: "Ellemosevej"
},
city: "Oure",
state: "Hovedstaden",
country: "Denmark",
postcode: 63871,
coordinates: {
latitude: "-22.2886",
longitude: "-16.6712"
},
timezone: {
offset: "+5:45",
description: "Kathmandu"
}
},
email: "signe.madsen@example.com",
login: {
uuid: "25c588ff-59d7-4fcc-a949-c05f786ce62d",
username: "greencat857",
password: "tigers",
salt: "Vbv9CHAU",
md5: "27dbaf9a45db855c442d32a58eb453f3",
sha1: "250eb3227158dab0e310ccf19e16764d469e82e4",
sha256: "abb84a51d73f5cb2fe74590cdf0731113cde628e762323f8685a1482482642ab"
},
dob: {
date: "1972-05-07T10:50:27.242Z",
age: 49
},
registered: {
date: "2003-02-09T13:28:48.587Z",
age: 18
},
phone: "16985122",
cell: "26304165",
id: {
name: "CPR",
value: "070572-5159"
},
picture: {
large: "https://randomuser.me/api/portraits/women/73.jpg",
medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg"
},
nat: "DK"
},
{
gender: "female",
name: {
title: "Ms",
first: "Isla",
last: "Seppala"
},
location: {
street: {
number: 984,
name: "Nordenskiöldinkatu"
},
city: "Iisalmi",
state: "Southern Ostrobothnia",
country: "Finland",
postcode: 86342,
coordinates: {
latitude: "2.1601",
longitude: "-161.6934"
},
timezone: {
offset: "-6:00",
description: "Central Time (US & Canada), Mexico City"
}
},
email: "isla.seppala@example.com",
login: {
uuid: "c2afc823-33a5-4072-9992-8f696dd3172b",
username: "beautifulrabbit777",
password: "concord",
salt: "tNMcBaCq",
md5: "d8adce8d9aebb3f11ed34657c111ff61",
sha1: "0bd342333405c921d5b7dc6c417527b2006f11ce",
sha256: "a498814fb1e375ac642a1fffb1a9ec92a668925097806fc850ad033e06ae88cd"
},
dob: {
date: "1990-11-29T18:13:51.486Z",
age: 31
},
registered: {
date: "2018-11-06T13:20:16.850Z",
age: 3
},
phone: "05-259-185",
cell: "042-220-24-75",
id: {
name: "HETU",
value: "NaNNA998undefined"
},
picture: {
large: "https://randomuser.me/api/portraits/women/16.jpg",
medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg"
},
nat: "FI"
},
{
gender: "female",
name: {
title: "Madame",
first: "Lea",
last: "Pierre"
},
location: {
street: {
number: 6259,
name: "Rue des Cuirassiers"
},
city: "Cortaillod",
state: "Fribourg",
country: "Switzerland",
postcode: 6762,
coordinates: {
latitude: "62.6846",
longitude: "-65.2035"
},
timezone: {
offset: "+4:30",
description: "Kabul"
}
},
email: "lea.pierre@example.com",
login: {
uuid: "a9070744-0ccd-4f27-88e2-e8334147c9fe",
username: "tinykoala786",
password: "racerx",
salt: "ZC8b0xqJ",
md5: "e3f89c1b4171bca23b8f445ebd71d2ab",
sha1: "66dcbefad795a40e7248013150daf21ca25e42e5",
sha256: "627f5b3d935bb33de674ed1024ca32b9c2123041cbfc5229767995b4d783c6f0"
},
dob: {
date: "1983-05-09T04:25:54.231Z",
age: 38
},
registered: {
date: "2019-01-01T22:34:59.216Z",
age: 2
},
phone: "076 370 49 66",
cell: "078 952 99 57",
id: {
name: "AVS",
value: "756.8241.6394.65"
},
picture: {
large: "https://randomuser.me/api/portraits/women/92.jpg",
medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg"
},
nat: "CH"
},
    ]*/

    favorites!: any[]

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
      this.favorites = []  
      await api.readAll().then((fav) => {        
        console.log(fav, 'fav')
        Array.from(fav).forEach((profile: any)=>{
          this.favorites.push(profile.data)
        })        
        this.loading = false
      })

      console.log(this.favorites, 'mounted')
    }

     get favoritesProfiles(): Profile[] {
       console.log(this.favorites, 'getter')
      return this.favorites;
    }


  }

</script>

