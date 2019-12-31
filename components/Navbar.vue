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
        <b-nav-item-dropdown id="dropdown-form-price" text="Price" class="m-2">
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
        <b-nav-item-dropdown id="dropdown-form-area" text="Area" class="m-2">
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
        <b-nav-item-dropdown id="dropdown-form3" ref="dropdown" text="Bedrooms" class="m-2" />
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown id="dropdown-form4" ref="dropdown" text="Bathroms" class="m-2" />
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
    }
  }
}
</script>

<style>
.input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {
  border-right: 0;
}

</style>
