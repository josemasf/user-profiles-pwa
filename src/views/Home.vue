<template>
  <GenerateBtn @generate-profiles="generateProfiles" />
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

  @Component({
    components: {
      GenerateBtn
    }
  })
  export default class Home extends Vue {

    
    async generateProfiles():Promise<void> {
      
      const profile = await profileGenerator(process.env.VUE_APP_NUM_OF_PROFILES)
      console.log(process.env.VUE_APP_FAKEAPP_URL)
      console.log(profile)
    }
  }

</script>
