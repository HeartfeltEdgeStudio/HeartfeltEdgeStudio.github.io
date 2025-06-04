<template>
  <div>
    <v-carousel class="bg-secondary elevation-9">
        
      <v-carousel-item src="../assets/screenshots/study_window_view.png" cover
        @click="openOverlay('study_window_view.png')"></v-carousel-item>

      <v-carousel-item src="../assets/screenshots/tv_puzzle.png" cover
        @click="openOverlay('tv_puzzle.png')"></v-carousel-item>
        
      <v-carousel-item src="../assets/screenshots/postit_wall.png" cover
        @click="openOverlay('postit_wall.png')"></v-carousel-item>

      <v-carousel-item src="../assets/screenshots/storage_birds_eye_view.png" cover
        @click="openOverlay('storage_birds_eye_view.png')"></v-carousel-item>

      <v-carousel-item src="../assets/screenshots/recording_device.png" cover
        @click="openOverlay('recording_device.png')"></v-carousel-item>

      <v-carousel-item src="../assets/screenshots/vfx_picture.png" cover
        @click="openOverlay('vfx_picture.png')"></v-carousel-item>
    </v-carousel>

    <!-- Overlay Dialog -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-text class="text-center">
          <v-img v-if="selectedImage" :src="getImagePath(selectedImage)" max-height="600px" contain></v-img>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const dialog = ref(false);
    const selectedImage = ref("");

    const openOverlay = (imageName) => {
      selectedImage.value = imageName;
      dialog.value = true;
    };

    const getImagePath = (imageName) => {
      console.log(imageName);
      return new URL(`../assets/screenshots/${imageName}`, import.meta.url).href;
    };

    return { dialog, selectedImage, openOverlay, getImagePath };
  },
};
</script>
