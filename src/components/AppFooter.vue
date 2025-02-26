<template>
  <v-footer class="bg-secondary text-center d-flex flex-column w-100" app>
    <v-form ref="form" v-model="valid" lazy-validation class="w-100">
      <v-container class="pb-0">
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field label="E-mail" placeholder="youremail@email.com" outlined v-model="email"
              :rules="emailRules"></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" class="pt-sm-6">
            <v-btn :disabled="!valid" color="success" class="mr-4 px-sm-16 px-md-4" @click="validate">
              Claim Access
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <div class="pt-3 pt-sm-0">
      <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text" size="x-large"></v-btn>
    </div>

    <p class="pt-2">
      Made In Italy
    </p>

    <v-container class="d-flex justify-center mx-auto w-50">
      <v-row class="justify-center">
        <v-col cols="4" class="pa-0 h-25" style="background-color: #008C45;"> </v-col>
        <v-col cols="4" class="pa-0 h-25" style="background-color: #F4F9FF;"> </v-col>
        <v-col cols="4" class="pa-0 h-25" style="background-color: #CD212A;"> </v-col>
      </v-row>
    </v-container>

    <p class="text-primary font-italic">
      “HEARTFELT GAMES WITH A CUTTING EDGE”
    </p>

    <v-img width="200" class="my-5" src="../assets/HeartfeltEdgeStudioWhite.png" />

    <a href="#" class="text-decoration-none" style="color: inherit;">
      <v-container class="pb-3">
        <v-row class="justify-center">
          <v-icon icon="mdi-arrow-up-circle-outline" size="x-large"></v-icon>
        </v-row>
      </v-container>
      <p>Back To Top</p>
    </a>

    <v-container>
      <v-row class="justify-center align-center text-primary">
        <v-icon icon="mdi-copyright" size="small"></v-icon>&nbsp{{ new Date().getFullYear() }}&nbsp—&nbsp<strong>Heartfelt Edge Studio</strong>
      </v-row>
    </v-container>

  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-music-note-eighth',
    ],
    valid: true,
    email: '',
    emailRules: [
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),



  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>