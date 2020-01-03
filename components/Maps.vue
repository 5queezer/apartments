<template>
  <gmap-map id="gmap" :center="currentLocation" :map-type-id="mapTypeId" :zoom="zoom">
    <gmap-marker
      v-for="(l, index) in locations"
      :key="index"
      :position="l"
      @click="set(l.id)"
    />
  </gmap-map>
</template>

<script>
/* eslint-disable vue/require-default-prop */

export default {
  props: {
    locations: Array
  },
  data () {
    return {
      zoom: 15,
      mapTypeId: 'terrain',
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  computed: {
    currentLocation () {
      const id = this.$store.state.apartments.id
      const current = this.$store.state.apartments.list.find(a => a.id === id)
      const location = current ? { id, lat: parseFloat(current.address.lat), lng: parseFloat(current.address.long) } : { id, lat: 0, lng: 0 }
      return location
    }
  },
  methods: {
    set (id) {
      this.$store.commit('apartments/set', id)
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
