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
      <b-col id="listview">
        <list :apartments="list" />
      </b-col>
      <b-col class="pl-0">
        <maps :locations="locations" />
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
  computed: {
    ...mapGetters('apartments', [ 'list' ]),
    locations () {
<<<<<<< HEAD
      const locations = []
      for (const apartment of this.$store.state.apartments.list) {
        locations.push({
          id: parseInt(apartment.id),
          lat: parseFloat(apartment.address.lat),
          lng: parseFloat(apartment.address.long)
        })
      }
      return locations
=======
      return [
        {
          lat: 44.933076,
          lng: 15.629058
        },
        {
          lat: 45.815,
          lng: 15.9819
        },
        {
          lat: 45.12,
          lng: 16.21
        }
      ]

      // const locations = []
      // for (const apartment of this.list) {
      //   locations.push({
      //     id: parseInt(apartment.id),
      //     lat: parseFloat(apartment.address.lat),
      //     lng: parseFloat(apartment.address.long)
      //   })
      // }
      // return locations
>>>>>>> list
    }
  },
  mounted () {
    this.fetchAll()
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
