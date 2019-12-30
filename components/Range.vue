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
        {{ min }} - {{ max }}
      </b-form-row>
    </b-dropdown-form>
    <b-dropdown-form />
    <b-dropdown-form />
  </b-nav-item-dropdown>
</template>

<script>
import _ from 'underscore'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['label', 'unit', 'values'],
  data: () => {
    return {
      min: undefined,
      max: undefined
    }
  },
  computed: {
    data () {
      return _.map(this.values, (value) => {
        return { value, text: value }
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
