<template>
  <b-nav-item-dropdown id="dropdown-form-price" :text="label" class="m-2">
    <b-dropdown-form>
      <b-form-row>
        <b-col>
          <b-form-select v-model="min" :options="data" />
        </b-col>
        <b-col>
          <b-form-select v-model="max" :options="data" />
        </b-col>
      </b-form-row>
      <b-form-row>
        <b-col>
          {{ min | locale }} {{ append }} - {{ max | locale }} {{ append }}
        </b-col>
      </b-form-row>
    </b-dropdown-form>
  </b-nav-item-dropdown>
</template>

<script>
import _ from 'underscore'

export default {
  filters: {
    locale (item) {
      return item ? item.toLocaleString() : ''
    }
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['label', 'append', 'values'],
  data: () => {
    return {
      min: undefined,
      max: undefined
    }
  },
  computed: {
    data () {
      return _.map(this.values, (value) => {
        return {
          value,
          text: this.$options.filters.locale(value)
        }
      })
    }
  }
}
</script>
<style>
.dropdown {
  width: max-content;
}
</style>
