<template>
  <b-card-group id="list" columns>
    <b-card
      v-for="(a, index) in apartments"
      :key="a.id"
      @mouseover="start(index)"
      @mouseleave="stop(index)"
      @mouseenter="next(index)"
      img-top
      class="apartment-card"
    >
      <b-card-header class="p-0">
        <div>
          <b-carousel
            ref="slide"
            :interval="0"
            fade
            controls
          >
            <b-carousel-slide
              v-for="pic in a.picture"
              :key="pic.id"
              :img-src="pic"
            />
          </b-carousel>
        </div>
        <div class="banner p-1 pl-3">
          <b-card-title class="m-0">
            <span class="text-light">{{ a.price | locale }} € </span><br>
            <small class="text-info">{{ parseInt(a.price / a.sqm) | locale }} €/m²</small>
          </b-card-title>
        </div>
      </b-card-header>

      <b-card-body>
        <b-card-sub-title>
          {{ a.address.city }}, {{ a.address.street }}
        </b-card-sub-title>
        <p>
          {{ a.title }}
        </p>
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
      </div>
      </b-card-header>
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
  },
  methods: {
    start (index) {
      this.$refs.slide[index].start()
    },
    stop (index) {
      this.$refs.slide[index].pause()
    },
    next (index) {
      this.$refs.slide[index].next()
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
.apartment-card {
  & .carousel-item img {
    height: 200px;
  }

  > .card-body {
    padding: 0;

    > .card-header {
      position: relative;

      .banner {
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
        font-family: 'Exo 2', sans-serif;
      }
    }

    > .card-body {
      height: 150px;
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
