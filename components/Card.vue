<template>
  <b-card
    @mouseleave="stop(apartment.id)"
    @mouseenter="next(apartment.id)"
    @click="set(apartment.id)"
    :class="currentId == apartment.id ? 'shadow selected' : ''"
    img-top
    class="apartment-card"
  >
    <b-card-header class="p-0">
      <div>
        <b-carousel
          :ref="'slide-' + apartment.id.toString()"
          :interval="0"
          fade
          controls
        >
          <b-carousel-slide
            v-for="pic in apartment.picture"
            :key="pic.id"
            :img-src="pic"
          />
        </b-carousel>
      </div>
      <div class="banner p-1 pl-3">
        <b-card-title class="m-0">
          <span class="text-light">{{ apartment.price | locale }} € </span>
          <small class="text-dark">{{ parseInt(apartment.price / apartment.sqm) | locale }} €/m²</small>
        </b-card-title>
      </div>
    </b-card-header>

    <b-card-body>
      <b-card-sub-title>
        <span>{{ apartment.address.street }}</span>
        <small class="text">{{ apartment.address.city }}</small>
      </b-card-sub-title>
      <p>
        {{ apartment.title }}
      </p>
    </b-card-body>

    <b-card-footer>
      <b-card-text title="Area">
        <i class="fa fa-check-circle" aria-hidden="true" /> {{ apartment.sqm | locale }} m²
      </b-card-text>
      <b-card-text title="Bathrooms">
        <i class="fa fa-bath" aria-hidden="true" /> {{ apartment.bathrooms }}
      </b-card-text>
      <b-card-text title="Bedrooms">
        <i class="fa fa-bed" aria-hidden="true" /> {{ apartment.bedrooms }}
      </b-card-text>
    </b-card-footer>
    </div>
    </b-card-header>
  </b-card>
</template>

<script>
export default {
  filters: {
    locale: string => string.toLocaleString()
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['apartment'],
  computed: {
    currentId () {
      return this.$store.state.apartments.id
    }
  },
  methods: {
    getRef (id) {
      return this.$refs['slide-' + id.toString()]
    },
    start (id) {
      this.getRef(id).start()
    },
    stop (id) {
      this.getRef(id).pause()
    },
    next (id) {
      this.getRef(id).next()
    },
    set (id) {
      this.$store.commit('apartments/set', id)
    }
  }
}
</script>

<style lang="scss">
.apartment-card {
  transition: transform .2s;

  &.selected {
    border-width: 2px;
    transform: scale(0.98);
  }

  .carousel-item img {
    height: 200px;
  }

  .banner {
    background-color: rgba(255,255,255,0.5);
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;

    span {
      font-family: 'Exo 2', sans-serif;
      text-shadow: 0px 0px 5px black;
    }

    small {
      font-weight: bold;
      text-shadow: 0px 0px 5px white;
    }

    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  .card-header {
    position: relative;
  }

  > .card-body {
    padding: 0;

    > .card-body {
      height: 140px;
      overflow-y: auto;

      p:last-of-type {
        margin-bottom: 0;
      }
    }

    > .card-footer p {
      margin-bottom: 0;
    }
  }
}
</style>
