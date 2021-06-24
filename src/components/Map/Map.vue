<template>

  <div style="height: 200px; width: 95%">    
    <l-map      
      :zoom="zoom"
      :center="currentLocation"
      :options="mapOptions"      
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="currentLocation" ></l-marker>      
    </l-map>
  </div>
</template>

<script>
import { latLng  } from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    
    return {
      zoom: 10,      
      center: latLng (this.latitude,this.longitude),
      markerLatLng: latLng (this.latitude,this.longitude),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      }
    }
  },
   mounted: async function() {     
     this.currentLocation= latLng (this.latitude,this.longitude);
    },
    computed:{
       currentLocation: function (){        
        return  latLng (this.latitude,this.longitude);
      }
    },
  currentLatLng(){    
    return latLng (this.latitude,this.longitude)
  },
  
  props: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    id: {
      type: String    
    }
  }
}
</script>

<style lang="scss" scoped>
.vue2leaflet-map.leaflet-container.leaflet-touch.leaflet-retina.leaflet-fade-anim.leaflet-grab.leaflet-touch-drag.leaflet-touch-zoom {
    z-index: 1;
    border-radius: 15px !important;
}
</style>