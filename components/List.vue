<template>
  <b-card-group id="list" columns>
    <card v-for="(a) in apartments" :key="a.id" :apartment="a" />
  </b-card-group>
</template>

<script>
import Card from '@/components/Card'
export default {

  components: {
    Card
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
