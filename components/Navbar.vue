<template>
  <b-navbar toggleable="lg">
    <b-nav-form>
      <search />
    </b-nav-form>
    <b-navbar-toggle target="nav-collapse">
      <b-nav-text>
        Filter <i class="fa fa-chevron-down" />
      </b-nav-text>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <range
          :values="priceRange"
          name="Price"
          unit="€"
        />
      </b-navbar-nav>

      <b-navbar-nav>
        <range
          :values="areaRange"
          name="Area"
          unit="m²"
        />
      </b-navbar-nav>
      <b-navbar-nav>
        <b-form inline>
          <label class="mr-sm-2" for="inline-form-bedrooms">Bedrooms</label>
          <b-form-select id="inline-form-bedrooms" v-model="bedrooms" :options="bedroomRange" />
        </b-form>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-form inline>
          <label class="mr-sm-2" for="inline-form-bathrooms">Bathrooms</label>
          <b-form-select id="inline-form-bathrooms" v-model="bathrooms" :options="bathroomRange" />
        </b-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import _ from 'underscore'
import Search from '~/components/Search.vue'
import Range from '~/components/Range.vue'

export default {
  components: {
    Search,
    Range
  },
  data () {
    return {
      bedrooms: undefined,
      bathrooms: undefined
    }
  },
  computed: {
    priceRange () {
      return _.range(0, 350e3, 25e3).concat(_.range(350e3, 600e3, 50e3))
    },
    areaRange () {
      return _.range(0, 40, 5).concat(_.range(40, 151, 10)).concat(200, 300)
    },
    bedroomRange () {
      return _.range(1, 5).concat({ text: '5+', value: Infinity })
    },
    bathroomRange () {
      return _.range(1, 5).concat({ text: '5+', value: Infinity })
    }
  }
}
</script>

<style>
#nav-collapse {
  justify-content: space-around;
}
</style>
