<template>
  <div id="list">
    <div v-for="a in apartments" class="list-item">
      <b-row>
        <b-img-lazy :src="a.picture" :alt="a.title" />
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apartments: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>
#list {
  display: flex;
}
</style>
