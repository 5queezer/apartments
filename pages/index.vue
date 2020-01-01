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
      <b-col>
        <list :apartments="list" />
        <b-col />
      </b-col>
      <b-col />
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import List from '~/components/List.vue'

export default {
  components: {
    Logo,
    Navbar,
    List
  },
  computed: {
    ...mapGetters('apartments', [ 'list' ])
  },
  mounted () {
    this.fetchAll()
  },
  methods: {
    ...mapActions('apartments', [ 'fetchAll' ])
  }
}
</script>
