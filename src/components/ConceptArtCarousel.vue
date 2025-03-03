<template>
  <div>
    <v-carousel class="bg-secondary">
      <v-carousel-item src="../assets/art/conceptTrophyStudy.png" @click="openOverlay('conceptTrophyStudy.png')"></v-carousel-item>
      
      <v-carousel-item src="../assets/art/albertoCharacter.png" @click="openOverlay('albertoCharacter.png')"></v-carousel-item>
      
      <v-carousel-item src="../assets/art/watch.png" cover @click="openOverlay('watch.png')"></v-carousel-item>
      
      <v-carousel-item src="../assets/art/screenDeskModel.png" cover @click="openOverlay('screenDeskModel.png')"></v-carousel-item>
      
      <v-carousel-item src="../assets/art/trophyModel.png" @click="openOverlay('trophyModel.png')"></v-carousel-item>
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
      return new URL(`../assets/art/${imageName}`, import.meta.url).href;
    };

    return { dialog, selectedImage, openOverlay, getImagePath };
  },
};
</script>
