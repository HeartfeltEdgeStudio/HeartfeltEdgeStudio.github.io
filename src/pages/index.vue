<template>
  <div class="d-flex justify-space-around align-center bg-grey-lighten-4 mb-xxl-16">

    <v-img :aspect-ratio="1" class="bg-white align-center" src="../assets/BgTop.jpg" width="300" height="700"
      style="margin-bottom: -10vw;" cover>
      <div class="d-flex justify-center p-0 mb-md-16 px-5">
        <div class="m-0">
          <div class="text-nowrap text-primary text-h4 text-sm-h2 ">Games From Our Hearts</div>
          <v-divider class="opacity-100 text-primary my-2 my-sm-2 mx-sm-0" :thickness="3"></v-divider>
          <div class="text-primary text-subtitle-1 pl-md-1">WE BELIEVE IN MAKING GAMES THAT MATTER -<br /> TRY SOMETHING
            MADE WITH CARE AND CREATIVITY</div>
          <v-btn href="/joyfulmasks" append-icon="mdi-arrow-right" class="w-sm-25 ml-md-1 my-2" color="primary"
            text="Our Games" variant="outlined"></v-btn>
        </div>
      </div>
    </v-img>
  </div>

  <v-img src="../assets/BgShape.png" cover>
    <div class="w-100  d-flex flex-column align-center" style="margin-top: 8%;" height="100">
      <a href="#" @click="onClick" class="text-decoration-none" style="color: inherit;">
        <div class="pb-3">
          <div class="d-flex flex-column align-center">
            <div class="text-subtitle-2 text-secondary-2 d-none d-md-flex">MORE ABOUT US</div>
            <v-icon icon="mdi-arrow-down-circle-outline" color="secondary-2" size="200"></v-icon>
          </div>
        </div>
      </a>
      <div class="d-flex flex-column align-center w-100" id="below">

        <v-card class="w-75 mt-10">
          <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text="Share"></v-btn>

            <v-btn color="orange" text="Explore"></v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div class="pt-16 mt-16 text-primary">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        TEST


      </div>
    </div>
  </v-img>
</template>


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
Z