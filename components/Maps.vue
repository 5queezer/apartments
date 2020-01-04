<template>
  <gmap-map
    id="gmap"
    ref="gmap"
    :center="currentLocation"
    :map-type-id="mapTypeId"
    :zoom="zoom"
    @bounds_changed="update($event)"
    @idle="commit()"
    @dragend="user = true"
    @zoom_changed="user = true"
  >
    <gmap-marker
      v-for="(l, index) in locations"
      :key="index"
      :position="l"
      @click="set(l.id)"
    />
  </gmap-map>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { _ } from 'underscore'

export default {
  props: {
    locations: { type: Array, default: () => [] }
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
    ...mapGetters('apartments', ['current']),
    currentLocation () {
      const id = this.$store.state.apartments.id
      const current = this.$store.state.apartments.list.find(a => a.id === id)
      const location = current ? { id, lat: parseFloat(current.address.lat), lng: parseFloat(current.address.long) } : { id, lat: 0, lng: 0 }
      return location
    }
  },
  methods: {
    ...mapActions('apartments', [ 'fetch' ]),
    set (id) {
      this.$store.commit('apartments/set', id)
    },
    update (event) {
      if (!event) { return }
      const { ka, pa } = event
      this.map = {
        neLat: pa.h,
        neLng: ka.h,
        swLat: pa.g,
        swLng: ka.g
      }
    },
    async commit (event) {
      this.$store.commit('apartments/viewport', this.map)

      if (this.user === true) {
        const params = {
          'viewport[neLat]': this.map.neLat,
          'viewport[neLng]': this.map.neLng,
          'viewport[swLat]': this.map.swLat,
          'viewport[swLng]': this.map.swLng,
          // 'location[city]': 'Barcelona',
          'filters[price][min]': 1.5e6
        }
        await this.fetch(params)
        this.user = false
      }
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
