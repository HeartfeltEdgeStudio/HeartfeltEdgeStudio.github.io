<template>
  <div ref="pageContainer" class="page-container">
    <!-- Sticky Button -->
    <div ref="stickyButton" class="sticky-button">
      <v-btn color="primary" class="mx-auto py-2 py-sm-4" style="height: fit-content;">
        <p class="text-wrap font-weight-bold text-center text-h6 text-sm-h4">
          Claim Exclusive Access
        </p>
      </v-btn>
    </div>

    <!-- Parallax Section -->
    <v-parallax :aspect-ratio="1" class="bg-white" src="../assets/art/keyArtNoWatermark.jpg" cover>
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

          <div class="d-flex flex-column justify-center mx-8 mb-8 px-8 px-md-16 pb-8">
            <p class="text-secondary text-h5 font-weight-bold">
              Watch the <span class="font-weight-black text-primary">trailer</span> and see the adventure unfold.
            </p>

            <div class="bg-secondary-1 d-flex justify-center mt-4 align-center font-weight-bold text-subtitle-1"
              style="height: 30vh;">Coming Soon!
            </div>

            <ConceptArtCarousel class="mt-8 rounded"></ConceptArtCarousel>

            <div class="text-nowrap text-secondary text-h3 pt-16">
              Unlock deeper truths - <span class="font-weight-bold text-primary">join our mailing list</span> for
              exclusive updates, hidden insights, and a glimpse into what lies beneath.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <!-- This Footer is outside this component (layout level) -->
    <FooterComponent />
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
export default {
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
