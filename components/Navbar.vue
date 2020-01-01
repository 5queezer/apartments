<template>
  <b-navbar type="light" variant="light" toggleable="lg">
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
        <b-nav-item-dropdown id="dropdown-form-price" text="Price">
          <b-dropdown-form>
            <b-form-row>
              <range
                :values="priceRange"
                append="€"
              />
            </b-form-row>
          </b-dropdown-form>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown text="Area">
          <b-dropdown-form>
            <b-form-row>
              <range
                :values="areaRange"
                append="m²"
              />
            </b-form-row>
          </b-dropdown-form>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown ref="dropdown" text="Bedrooms">
          <b-dropdown-form>
            <b-form-radio-group
              v-model="bedrooms"
              :options="bedroomRange"
              :selected="bedroomRange[0]"
              buttons
            />
          </b-dropdown-form>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown id="dropdown-form4" ref="dropdown" text="Bathroms">
          <b-dropdown-form>
            <b-form-radio-group
              v-model="bathrooms"
              :options="bathroomRange"
              :selected="bathroomRange[0]"
              buttons
            />
          </b-dropdown-form>
        </b-nav-item-dropdown>
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
  props: {
    priceRange: {
      type: Array,
      default () { return _.range(0, 350e3, 25e3).concat(_.range(350e3, 600e3, 50e3)) }
    },
    areaRange: {
      type: Array,
      default () { return _.range(0, 40, 5).concat(_.range(40, 151, 10)).concat(200, 300) }
    },
    bedroomRange: {
      type: Array,
      default () { return [{ text: 'All', value: undefined }].concat(_.range(1, 6)) }
    },
    bathroomRange: {
      type: Array,
      default () { return [{ text: 'All', value: undefined }].concat(_.range(1, 6)) }
    }
  },
  data () {
    return {
      bedrooms: undefined,
      bathrooms: undefined
    }
  }
}
</script>

<style>
#nav-collapse {
  justify-content: space-around;
}
</style>
