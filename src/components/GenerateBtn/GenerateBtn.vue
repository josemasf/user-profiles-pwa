<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn elevation="2" @click="generateProfiles">Generate profiles</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({  
})
  export default class GenerateBtn extends  Vue{    
    generateProfiles(): void{
      this.$emit('generate-profiles')
    }
  }
</script>
