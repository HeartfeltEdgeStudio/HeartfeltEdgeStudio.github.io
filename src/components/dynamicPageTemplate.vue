<script setup>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

useHead({
  title: 'Joyful Masks'
});

const route = useRoute();
const appStore = useAppStore();
const { updates } = storeToRefs(appStore);


// Find the correct object based on the ID from the URL
const update = computed(() => {
  const id = route.fullPath.split('/').pop();
  console.log(id)
  return updates.value.find(item => item.id === id);
});

// Function to format the date
const formatDate = (dateString) => {
  if (!dateString) return ''; // Ensure no errors if date is missing
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};
</script>

<template>
  <div v-if="update">
    <div class="d-flex flex-column align-center" v-if="update.title || update.subtitle || update.cover">
      <div class="py-8 w-75 w-sm-50">
        <div v-if="update.title" class="text-h4 text-sm-h2 text-primary font-weight-black pb-4">{{ update.title }}</div>
        <div v-if="update.subtitle" class="text-h5 text-md-h3 font-weight-medium">{{ update.subtitle }}</div>
      </div>

      <div v-if="update.cover || update.date" class="w-75 w-sm-50">
        <v-img v-if="update.cover" class="rounded" :src="appStore.methods.getImagePath(update.cover)"></v-img>
        <div v-if="update.date" class="text-caption-1 pt-2">{{ formatDate(update.date) }}</div>
      </div>
    </div>

    <div v-if="update.body" class="bg-secondary d-flex flex-column justify-center align-center pt-16 mt-16 "
      style="min-height: auto;">
      <div class="d-flex justify-center px-16 pb-16">
        <div>
          <div class="text-nowrap text-secondary-2 text-h3 font-weight-bold pb-4">{{ update.title }}</div>
          <p class="text-secondary-2 text-h6 text-justify">
            {{ update.body }}
          </p>
        </div>
      </div>

      <div class="w-75 w-sm-50 mb-16 rounded pa-2" style="background: rgba(141, 198, 63, 0.15);"
        v-if="update.images && update.images.length > 0">
        <v-carousel class="bg-secondary">
          <v-carousel-item v-for="(image, index) in update.images" :key="index"
            :src="appStore.methods.getImagePath(image)">
          </v-carousel-item>
        </v-carousel>
      </div>

      <div v-if="update.links && update.links.length > 0" class="w-100 d-flex flex-column justify-center align-center">
        <div class="text-h4 text-sm-h3 font-weight-black pb-8">Related Links</div>
        <v-btn v-for="(link, index) in update.links" :key="index" :href="link[1]" target="_blank" color="primary"
          class="w-50 h-100 py-4 mb-16">
          <p class="text-wrap text-left" style="margin: auto;">
            {{ link[0] }}</p>
        </v-btn>
      </div>
    </div>
  </div>

  <div v-else>
    <NotFound />
  </div>
</template>
