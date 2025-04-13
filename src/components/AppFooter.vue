<template>
  <v-footer class="bg-secondary-1 text-center d-flex flex-column">
    <v-form ref="form" lazy-validation class="w-md-50 w-75"
      action="https://heartfeltedgestudio.us16.list-manage.com/subscribe/post?u=599738d46e1d892b9f695a0f6&amp;id=fc6bc1565f&amp;f_id=00c6c2e1f0"
      method="POST" target="_blank">
      <div class="px-4 pt-4 d-sm-flex align-center">
        <v-text-field label="E-mail" placeholder="youremail@email.com" outlined v-model="email" :rules="emailRules"
          name="EMAIL" type="email" required></v-text-field>

        <v-col cols="12" sm="auto" class="pa-0 pl-sm-5 pb-6 mt-sm-0 mt-1">
          <v-btn color="primary" type="submit" class="w-100 h-100 py-4">
            <p class="text-wrap text-left" style="margin: auto;">
              Claim Exclusive Access
            </p>
          </v-btn>
        </v-col>
      </div>

      <!-- Hidden anti-bot field Mailchimp uses -->
      <input type="text" name="b_599738d46e1d892b9f695a0f6_fc6bc1565f" tabindex="-1" value=""
        style="position: absolute; left: -5000px;" aria-hidden="true">
    </v-form>


    <p class="pt-2">
      Made In Italy
    </p>

    <v-container class="d-flex justify-center mx-auto w-50 w-md-25">
      <v-row class="justify-center">
        <v-col cols="4" class="pa-0 h-25" style="background-color: #008C45;"> </v-col>
        <v-col cols="4" class="pa-0 h-25" style="background-color: #F4F9FF;"> </v-col>
        <v-col cols="4" class="pa-0 h-25" style="background-color: #CD212A;"> </v-col>
      </v-row>
    </v-container>

    <div class="mb-2 d-flex flex-wrap justify-center">
      <a v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank" rel="noopener noreferrer"
        class="mx-1 " style="color: inherit;">
        <v-btn :icon="icon.name" variant="text" size="x-large"></v-btn>
      </a>
    </div>

    <p class="text-primary font-italic my-5">
      “HEARTFELT GAMES WITH A CUTTING EDGE”
    </p>

    <v-img width="200" class="my-5" src="../assets/logos/HeartfeltEdgeStudioWhite.png" />

    <a href="#" @click="onClick" class="text-decoration-none mb-5" style="color: inherit;">
      <v-container class="pb-3">
        <v-row class="justify-center">
          <v-icon icon="mdi-arrow-up-circle-outline" size="x-large"></v-icon>
        </v-row>
      </v-container>
      <p>Back To Top</p>
    </a>

    <v-container>
      <v-row class="justify-center align-center text-primary">
        <v-icon icon="mdi-copyright" size="small"></v-icon>&nbsp{{ new Date().getFullYear()
        }}&nbsp—&nbsp<strong>Heartfelt Edge Studio</strong>
      </v-row>
    </v-container>

  </v-footer>
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
      duration: 600,
      number: 0,
      offset: 0,
      target: 'By Number',
      easing: 'easeInOutCubic',
      icons: [
        { name: "mdi-facebook", link: "https://www.facebook.com/heartfeltedgestudio" },
        { name: "mdi-twitter", link: "https://x.com/HeartfeltEdge?t=WLcw-rhlCxO61F19nIWHaA&s=09" },
        { name: "mdi-linkedin", link: "https://www.linkedin.com/company/heartfelt-edge-studio" },
        { name: "mdi-instagram", link: "https://www.instagram.com/heartfeltedgestudio" },
        { name: "mdi-music-note-eighth", link: "https://www.tiktok.com/@heartfeltedgestudio?_t=ZN-8uEmYOqQNiY&_r=1" },
      ],
      valid: true,
      email: '',
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
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
      this.goTo(this.number, this.options)
    },
  },
}
</script>