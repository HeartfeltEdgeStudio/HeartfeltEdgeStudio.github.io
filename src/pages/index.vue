<template>
  <OverlaySignupPopup :delay="4000" />
  <div class="d-flex justify-space-around align-center bg-grey-lighten-4 mb-n10 mb-xxl-16">

    <v-parallax :aspect-ratio="1" class="bg-white align-center pt-0 pb-lg-16" src="../assets/backgrounds/BgTop.jpg"
      width="300" height="700" style="margin-bottom: -10vw;" transition="scroll-y-transition" cover>
      <div class="d-flex justify-center p-0 mb-md-16 px-5">
        <div class="m-0">
          <div class="text-nowrap text-primary text-h4 text-sm-h2 text-lg-h1">Games From Our Hearts</div>
          <v-divider class="opacity-100 text-primary my-2 my-sm-2 mx-sm-0" :thickness="3"></v-divider>
          <div class="text-primary text-subtitle-1 text-md-h5 pl-md-1">WE BELIEVE IN MAKING GAMES THAT MATTER -<br />
            TRY
            SOMETHING
            MADE WITH CARE AND CREATIVITY</div>
          <v-btn :to="'/joyfulmasks'" append-icon="mdi-arrow-right" class="w-sm-25 ml-md-1 my-2" color="primary"
            text="Our Games" variant="outlined"></v-btn>

        </div>
      </div>
    </v-parallax>
  </div>
  <v-parallax src="../assets/backgrounds/BgShape.png" :aspect-ratio="1" transition="scroll-y-transition"
    class="bg-white d-flex align-center elevation-9"
    style="min-height: auto; clip-path: polygon(0 3%, 100% 0, 100% 100%, 0% 100%);" cover>
    <div class="w-100">
      <a href="#" @click="onClick" class="text-decoration-none" style="color: inherit;">

        <div class="responsive-margin">
          <div class="d-flex flex-column align-center">
            <div class="text-subtitle-2 text-lg-h5 text-secondary-2 d-none d-md-flex">MORE ABOUT US</div>
            <v-icon icon="mdi-arrow-down-circle-outline d-lg-none d-flex" color="secondary-2" size="160"></v-icon>
            <v-icon icon="mdi-arrow-down-circle-outline d-none d-lg-flex" color="secondary-2" size="300"></v-icon>
          </div>
        </div>
      </a>
    </div>

    <div class="d-flex flex-column align-center w-100" id="below">
      <a href="https://store.steampowered.com/app/3778530/Joyful_Masks/" target="_blank" rel="noopener" class="text-decoration-none d-flex flex-column align-center justify-center w-100">
        <v-card class="w-75 mt-10 border elevation-9" transition="scroll-y-transition">
          <v-img class="align-end text-white" height="320" src="../assets/screenshots/postit_wall.png" cover>
            <v-card-title>Joyful Masks</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            Wishlist now
          </v-card-subtitle>

          <v-card-text>
            <div>Check out our Steam page! We promise you won't regret it.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" :to="'/about'" append-icon="mdi-arrow-right" class="h-100">
              <p class="text-wrap text-left" style="margin: auto;">
                Wishlist our game on steam</p>
            </v-btn>
          </v-card-actions>
        </v-card></a>
    </div>

    <div class="d-flex flex-column align-center w-100" id="below">
      <router-link :to="`/about`" class="text-decoration-none d-flex flex-column align-center justify-center w-100">
        <v-card class="w-75 mt-10 border elevation-9" transition="scroll-y-transition">
          <v-img class="align-end text-white" height="320" src="../assets/pics/digithonPic.png" cover>
            <v-card-title>Digithon 2024</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            More about our studio
          </v-card-subtitle>

          <v-card-text>
            <div>Ever wonder what’s behind the games you play? We’re a small team with big ideas, crafting experiences
              that feel different.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" :to="'/about'" append-icon="mdi-arrow-right" class="h-100">
              <p class="text-wrap text-left" style="margin: auto;">
                Check out what we’re all about</p>
            </v-btn>
          </v-card-actions>
        </v-card></router-link>
    </div>

    <div class="d-flex flex-column align-center w-100">
      <router-link :to="`/about`" class="text-decoration-none d-flex flex-column align-center justify-center w-100">
        <v-card class="w-75 mt-10 border elevation-9" transition="scroll-y-transition">
          <v-img class="align-end text-white" height="320" src="../assets/pics/TeamPic.png" cover>
            <v-card-title>The Team</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            The magic behind the scenes
          </v-card-subtitle>

          <v-card-text>
            <div>Every project we create is a piece of us. Get to know the people behind these pixels!</div>
          </v-card-text>

          <v-card-actions>

            <v-btn color="primary" :to="'/about'" append-icon="mdi-arrow-right" class="h-100">
              <p class="text-wrap text-left" style="margin: auto;">
                Get to know us</p>
            </v-btn>
          </v-card-actions>
        </v-card></router-link>
    </div>

    <div class="d-flex flex-column align-center w-100">
      <v-card class="w-75 mt-10 border elevation-9" transition="scroll-y-transition">

        <ConceptArtCarousel></ConceptArtCarousel>

        <v-card-subtitle class="pt-4">
          Our Games
        </v-card-subtitle>

        <v-card-text>
          <div>We make the kind of games we’d love to play. Whether it’s a big adventure, or a small one, every game
            we create comes from the heart!</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" :to="'/joyfulmasks'" append-icon="mdi-arrow-right" class="h-100">
            <p class="text-wrap text-left" style="margin: auto;">
              Discover our titles</p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="d-flex flex-column align-center w-100"><router-link :to="`/updates`"
        class="text-decoration-none d-flex flex-column align-center justify-center w-100">
        <v-card class="w-75 my-10 border" transition="scroll-y-transition" subtitle="News about our projects and events"
          text="See what’s going on with our game dev journey! If you’d like to get updates about events and new content, subscribe to our newsletter!"
          title="Updates">
          <v-card-actions>
            <v-btn color="primary" :to="'/updates'" append-icon="mdi-arrow-right" class="h-100">
              <p class="text-wrap text-left" style="margin: auto;">
                See what's new</p>
            </v-btn>
          </v-card-actions></v-card></router-link>
    </div>
  </v-parallax>
</template>

<style scoped>
/* Default for xl screens (≥ 1904px) */
.responsive-margin {
  padding-top: 4%;
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
import ConceptArtCarousel from '../components/ConceptArtCarousel.vue';
import { useHead } from '@vueuse/head';

export default {
  setup() {
    const goTo = useGoTo()
    useHead({
      title: 'Heartfelt Edge Studio',
    });
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