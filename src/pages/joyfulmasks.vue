<template>
  <div class="d-flex justify-space-around align-center bg-grey-lighten-4 mb-xxl-16">

    <v-parallax :aspect-ratio="1" class="bg-white align-center" src="../assets/art/keyArtNoWatermark.jpg" 
      cover>
      <div class="d-flex justify-center">
        <div class="m-0">

          <v-btn href="/joyfulmasks" append-icon="mdi-arrow-right" class="w-sm-25 ml-md-1 my-2" color="primary"
            text="Our Games" variant="outlined"></v-btn>
        </div>
      </div>
    </v-parallax>
  </div>

  <div class="bg-white align-center"
    style="min-height: auto;" cover>
    <div class="d-flex flex-column">
      

      <div class="w-100">
        <div class="d-flex justify-center mx-8 my-8 px-16 py-12">
          <div>
            <div class="text-nowrap text-secondary text-h3 font-weight-bold">Behind the Pixels</div>
            <p class="text-secondary text-h6">
              We're a group of developers, artists, and sound designers who just love making games. Some of us bring
              worlds to life with code, others create stunning visuals, and some shape the atmosphere with music and
              sound. Everyone adds their own touch, and somehow, it all comes together into something special!
            </p>
          </div>
        </div>
      </div>
      
     
    </div>
  </div>
</template>

<style scoped>
/* Default for xl screens (≥ 1904px) */
.responsive-margin {
  padding-top: 2%;
}

/* lg screens (≥ 1264px and < 1904px) */
@media (max-width: 1550px) {
  .responsive-margin {
    padding-top: 5%;
  }
}

/* md screens (≥ 960px and < 1264px) */
@media (max-width: 1264px) {
  .responsive-margin {
    padding-top: 10%;
  }
}

/* sm screens (≥ 600px and < 960px) */
@media (max-width: 960px) {
  .responsive-margin {
    padding-top: 12%;
  }
}

/* xs screens (< 600px) */
@media (max-width: 600px) {
  .responsive-margin {
    padding-top: 15%;
  }
}

/* Extra small screens (phones, < 400px) */
@media (max-width: 400px) {
  .responsive-margin {
    padding-top: 20%;
  }
}
</style>


<script>
import { useGoTo } from 'vuetify'

export default {
  setup() {
    const goTo = useGoTo()
    return { goTo }
  },
  data() {
    return {
      duration: 300,
      offset: 0,
      query: '#below',
      easing: 'easeInOutCubic',
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        easing: this.easing,
        offset: this.offset,
      }
    },
  },
  methods: {
    onClick() {
      this.goTo(this.query, this.options)
    },
  },
}
</script>