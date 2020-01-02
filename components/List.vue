<template>
  <b-card-group id="list" columns>
    <b-card
      v-for="a in apartments"
      :key="a.id"
      :img-src="a.picture[0]"
      :img-alt="a.title"
      img-top
    >
      <b-card-title>
        {{ a.price | locale }} €
      </b-card-title>
      <b-card-sub-title>
        {{ parseInt(a.price / a.sqm) | locale }} €/m²
      </b-card-sub-title>
      <b-card-body>
        {{ a.title }}
      </b-card-body>
      <b-card-footer>
        <b-card-text title="Area">
          <i class="fa fa-check-circle" aria-hidden="true" /> {{ a.sqm | locale }} m²
        </b-card-text>
        <b-card-text title="Bathrooms">
          <i class="fa fa-bath" aria-hidden="true" /> {{ a.bathrooms }}
        </b-card-text>
        <b-card-text title="Bedrooms">
          <i class="fa fa-bed" aria-hidden="true" /> {{ a.bedrooms }}
        </b-card-text>
      </b-card-footer>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  filters: {
    locale: string => string.toLocaleString()
  },
  props: {
    apartments: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="scss">
#list {
  column-count: 2;

  & .card-footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
