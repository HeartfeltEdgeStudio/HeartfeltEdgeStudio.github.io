<script setup>
import { ref, computed } from 'vue';

const isNonMobile = computed(() => window.innerWidth > 768);

const nonMobileStyles = computed(() => {
  return isNonMobile.value ? {
    marginLeft: '25%',
    marginRight: '25%',
    paddingRight: '3%',
    paddingLeft: '3%',
    paddingTop: '1%',
    paddingBottom: '2%'
  } : {};
});
</script>

<template>
  <div ref="pageContainer" class="page-container">
    <v-overlay :absolute="absolute" v-model="overlay" class="align-center justify-center overflow-auto">
      <v-card :style="nonMobileStyles">
        <div class="d-flex justify-end">
          <v-icon icon="$cancel" @click="overlay = false"></v-icon>
        </div>

        <v-card-item>
          <div class="d-flex flex-column">
            <div class="text-h4 mb-1 font-weight-bold">
              Claim Exclusive Access
            </div>
            <div class="text-h6 font-weight-regular">
              Step into the Unknown—First.
              Get exclusive updates, a chance to win a spot for
              <span class="font-weight-bold text-primary">early access to the demo</span>,
              and a deeper look into the world of Joyful Masks.
              Sign up now and be among the first to uncover the mysteries waiting beneath the surface.
            </div>
          </div>
        </v-card-item>

        <v-card-actions class="d-flex flex-column align-center justify-center">
          <form ref="form" class="w-100"
            action="https://heartfeltedgestudio.us16.list-manage.com/subscribe/post?u=599738d46e1d892b9f695a0f6&amp;id=fc6bc1565f&amp;f_id=00c6c2e1f0"
            method="POST" target="_blank">
            <v-text-field label="E-mail" placeholder="youremail@email.com" outlined v-model="email" :rules="emailRules"
              name="EMAIL" type="email" required></v-text-field>

            <input type="text" name="b_599738d46e1d892b9f695a0f6_fc6bc1565f" tabindex="-1" value=""
              style="position: absolute; left: -5000px;" aria-hidden="true">

            <v-btn type="submit" class="w-100 h-100 py-4 mt-2 bg-primary elevation-9">
              <p class="text-wrap text-left" style="margin: auto;">
                Give me some cool content!
              </p>
            </v-btn>
          </form>
        </v-card-actions>
      </v-card>
    </v-overlay>

    <!-- Sticky Button -->
    <div ref="stickyButton" class="sticky-button elevation-9">
      <v-btn color="primary" @click="overlay = !overlay" class="mx-auto py-2 py-sm-4" style="height: fit-content;">
        <p class="text-wrap font-weight-bold text-center text-h6 text-sm-h4">
          Claim Exclusive Access
        </p>
      </v-btn>
    </div>

    <!-- Parallax Section -->
    <v-parallax :aspect-ratio="1" class="bg-white" src="../assets/art/keyArtNoWatermark.jpg"
      transition="scroll-y-transition" cover>
      <div class="d-flex align-center flex-column">
        <div class="text-nowrap font-weight-black text-primary text-h1 text-center pt-16">Joyful Masks</div>
        <div class="text-nowrap text-primary text-h5 font-weight-thin text-center pt-6">
          "Unlock the Secrets of the Mind"
        </div>
      </div>
    </v-parallax>

    <!-- Main Content -->
    <div ref="contentSection" class="content">
      <div class="d-flex flex-column">
        <div class="w-100">
          <div class="bg-primary shaped-divider"></div>

          <div class="d-flex flex-column justify-center mb-8 px-4 px-sm-16 pb-8">
            <p class="text-secondary text-h5 font-weight-bold">
              Watch the <span class="font-weight-black text-primary">trailer</span> and see the adventure unfold.
            </p>

            <div
              class="bg-secondary-1 elevation-9 d-flex justify-center mt-4 align-center font-weight-bold text-subtitle-1"
              style="height: 30vh;">Coming Soon!
            </div>

            <div class="text-nowrap text-primary text-h3 py-10 font-weight-bold">
              "What are you hiding
              from yourself?"</div>

            <div class="d-flex flex-column align-center pb-10">
              <v-img src="../assets/logos/JoyfulMasksLogoBlack.png" class="w-75" contain />
            </div>

            <div class="text-nowrap text-secondary text-h5 font-weight-bold">The Story</div>
            <p class="text-secondary text-body-1">
              In a university lab, an experiment pushes the boundaries of neuroscience—and ethics. Professor Alberto
              Saggi, a brilliant but tormented mind, volunteers to be placed in a deep, drug-induced coma. His young
              assistant, Kurt Wagner, is tasked with something unthinkable: <span
                class="font-weight-black text-primary">entering the subconscious of his mentor
                through an advanced neuro-interactive system</span>.
              <br />
              <br />
              What begins as a controlled study spirals into a nightmarish descent through the shattered corridors of a
              <span class="font-weight-black text-primary">haunted psyche</span>. Familiar university halls twist into
              something alive-walls pulse like flesh, shadows whisper
              and shift, and buried traumas take form.
              <br /><br />
              Each puzzle Kurt solves brings him deeper into the professor’s darkest memories, forcing him to unravel a
              past full of obsession, regret, and a truth too hard to ignore.
              <br /><br />
              <span class="font-weight-black text-primary">But something else is watching.</span> As Kurt nears the core
              of Alberto’s mind, things take a weird turn. Is this just the professor’s subconscious fighting back, or
              has
              the experiment drawn the attention of something far more sinister?
              <br /><br />
              <span class="font-weight-bold text-primary">How far will you go to uncover the truth?</span>
            </p>



            <ConceptArtCarousel class="mt-8 rounded"></ConceptArtCarousel>

            <div class="text-nowrap text-secondary text-h3 pt-16">
              Unlock deeper truths - <span class="font-weight-bold text-primary">join our mailing list</span> for
              exclusive updates, hidden insights, and a glimpse into what lies beneath.
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full page container */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

/* Sticky button (default position) */
.sticky-button {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: bottom 0.2s ease-in-out;
}

/* Content section to ensure button stops before footer */
.content {
  flex: 1;
}

/* Decorative divider */
.shaped-divider {
  min-height: 100px;
  height: auto;
  clip-path: polygon(0 14%, 23% 14%, 23% 28%, 43% 28%, 43% 41%, 62% 41%, 62% 54%, 81% 54%, 81% 67%, 100% 67%, 100% 0, 0 0);
}
</style>

<script>
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'Heartfelt Edge Studio - Joyful Masks',
    });
  },
  data: () => ({
    overlay: false,
    valid: true,
    email: '',
    emailRules: [
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  mounted() {
    // Ensure the button is positioned correctly on load
    this.handleScroll();
    // Listen for scroll events to handle sticky button position
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Clean up the event listener before unmounting
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const button = this.$refs.stickyButton;
      const footer = document.querySelector("footer"); // Use the footer element from the layout

      if (!footer) return; // Prevent errors if footer is not found

      const buttonHeight = button.offsetHeight;
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Ensure button starts at the bottom of the page
      if (window.scrollY === 0) {
        button.style.position = "fixed";
        button.style.bottom = "20px";
      }

      // If the footer is close to the button, stop it from overlapping with some space
      const marginFromFooter = 10;  // Adjust this value for the margin from the footer
      if (footerTop < viewportHeight - buttonHeight - marginFromFooter) {
        button.style.position = "absolute";
        button.style.bottom = `${footerTop - buttonHeight - marginFromFooter}px`;
      } else {
        button.style.position = "fixed";
        button.style.bottom = "20px";
      }
    },
  },
};
</script>
