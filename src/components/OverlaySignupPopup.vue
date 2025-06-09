<template>
  <v-overlay persistent v-model="visible" class="align-center justify-center overflow-auto" :opacity="0.8">
    <v-card ref="popupCard" class="mx-4" :style="popupCardStyles">
      <div class="d-flex justify-end">
        <v-icon icon="$cancel" @click="visible = false"></v-icon>
      </div>

      <v-card-item>
        <div class="d-flex flex-column">
          <div class="text-h4 mb-1 font-weight-bold">
            Claim Exclusive Access
          </div>
          <div class="text-h6 font-weight-regular">
            Unlock hidden secrets and gain exclusive access to untold stories from the world of Joyful Masks.
            Sign up now and <span class="font-weight-bold text-primary">be one of the few to reveal what lies beneath
              the surface</span>.
          </div>
        </div>
      </v-card-item>

      <v-card-actions class="d-flex flex-column align-center justify-center">
        <form ref="form" class="w-100"
          action="https://heartfeltedgestudio.us16.list-manage.com/subscribe/post?u=599738d46e1d892b9f695a0f6&amp;id=fc6bc1565f&amp;f_id=00c6c2e1f0"
          method="POST" target="_blank">
          <v-text-field label="E-mail" placeholder="youremail@email.com" outlined v-model="email" :rules="emailRules"
            name="EMAIL" type="email" required></v-text-field>

          <!-- Anti-bot field -->
          <input type="text" name="b_599738d46e1d892b9f695a0f6_fc6bc1565f" tabindex="-1" value=""
            style="position: absolute; left: -5000px;" aria-hidden="true" />

          <v-btn type="submit" class="w-100 h-100 py-4 mt-2 bg-primary elevation-9">
            <p class="text-wrap text-left" style="margin: auto;">
              Give me some cool content!
            </p>
          </v-btn>
        </form>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "OverlaySignupPopup",
  props: {
    delay: {
      type: Number,
      default: 5000 // milliseconds
    },
    oncePerSession: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
    popupCardStyles() {
      return {
        width: "100%",
        maxWidth: "500px"
      };
    }
  },
  mounted() {
    if (this.oncePerSession && sessionStorage.getItem("overlayShown")) return;

    setTimeout(() => {
      this.visible = true;
      if (this.oncePerSession) {
        sessionStorage.setItem("overlayShown", "true");
      }
    }, this.delay);
  }
};
</script>
