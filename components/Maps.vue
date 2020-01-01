<template>
  <GMap
    id="gmap"
    ref="gMap"
    :cluster="{options: {styles: clusterStyle}}"
    :center="currentLocation"
    :options="{fullscreenControl: false, styles: mapStyle}"
    :zoom="6"
  >
    <GMapMarker
      v-for="location in locations"
      :key="location.id"
      :position="location"
      @click="currentLocation = location"
    >
      <GMapInfoWindow>
        <code>
          lat: {{ location.lat }},
          lng: {{ location.lng }}
        </code>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
/*
      :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
*/

export default {
  props: {
    locations: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentLocation: {
        lat: this.locations.size > 0 ? this.locations[0].lat : 0,
        lng: this.locations.size > 0 ? this.locations[0].lng : 0
      },
      // pins: {
      //   selected: 'data:image/png;base64,iVBORw0KGgo...',
      //   notSelected: 'data:image/png;base64,iVBORw0KGgo...'
      // },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#gmap {
  height: 100%;
  display: flex;

  & > * {
    height: unset;
  }
}
</style>
