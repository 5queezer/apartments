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
        <b-spinner v-if="loading && !locations" label="Loading..." />
        <list v-else :apartments="list" />
      </b-col>
      <b-col id="mapsview" class="pl-0" cols="6">
        <maps :locations="locations" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vuex, { mapGetters, mapActions, mapMutations } from 'vuex'
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
    loading () {
      return this.$store.state.apartments.loading
    },
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
  async mounted () {
    const params = {
      'location[city]': 'Barcelona',
      'filters[location]': 'Eixample, Barcelona, Provinz Barcelona'
    }
    await this.fetch(params)
    // const firstId = this.list[0].id
    // firstId && this.set(firstId)
  },
  methods: {
    ...mapActions('apartments', [ 'fetch' ]),
    ...mapMutations('apartments', ['set'])
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
  height: 100%;
}
#listview {
  height: 100%;
  overflow-y: scroll;
}
#mapsview {
  height: 100%;
  overflow: hidden;
}
</style>
