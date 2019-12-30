<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <logo />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <navbar />
      </b-col>
    </b-row>
    <b-row>
      <b-col />
      <b-col />
    </b-row>
  </b-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Logo,
    Navbar
  }
}
</script>
