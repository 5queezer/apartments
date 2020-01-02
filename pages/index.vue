<template>
  <b-container id="main" fluid>
    <b-row class="mb-3">
      <b-col>
        <logo />
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col>
        <navbar />
      </b-col>
    </b-row>
    <b-row id="stretch" class="pb-3">
      <b-col id="listview" cols="6">
        <list :apartments="list" />
      </b-col>
      <b-col class="pl-0" cols="6">
        <maps :locations="locations" :currentLocation="currentLocation" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vuex, { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import List from '~/components/List.vue'
import Maps from '~/components/Maps.vue'

Vue.use(Vuex)

export default {
  components: {
    Logo,
    Navbar,
    List,
    Maps
  },
  data () {
    return {
      currentLocation: { lat: 0, lng: 0 }
    }
  },
  computed: {
    ...mapGetters('apartments', [ 'list' ]),
    locations () {
      const locations = []
      for (const apartment of this.$store.state.apartments.list) {
        locations.push({
          id: parseInt(apartment.id),
          lat: parseFloat(apartment.address.lat),
          lng: parseFloat(apartment.address.long)
        })
      }
      return locations
    }
  },
  mounted () {
    this.fetchAll()
    this.currentLocation = this.locations[0]
  },
  methods: {
    ...mapActions('apartments', [ 'fetchAll' ])
  }
}
</script>

<style>
#main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#stretch {
  overflow: hidden;
}
#listview {
  height: 100%;
  overflow-y: scroll;
}
</style>
