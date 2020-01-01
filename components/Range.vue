<template>
  <div>
    <b-col>
      <b-form-select v-model="min" :options="data" />
    </b-col>
    <b-col>
      <b-form-select v-model="max" :options="data" />
    </b-col>
  </div>
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
  props: ['append', 'values'],
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
          text: value ? `${this.$options.filters.locale(value)} ${this.append}` : '',
          disabled: !value
        }
      })
    }
  }
}
</script>
