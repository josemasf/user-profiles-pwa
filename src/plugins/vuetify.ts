import Vue from 'vue';
import { colors } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const opts = {
    theme: {
      themes: {
        light: {
            primary: colors.red.darken4,
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            bgprimary: colors.brown.lighten5
          },
          dark:{
            primary: colors.red.lighten5,
            bgprimary: colors.brown.darken4
          }
      },      
    },
  }  

export default new Vuetify(opts);
