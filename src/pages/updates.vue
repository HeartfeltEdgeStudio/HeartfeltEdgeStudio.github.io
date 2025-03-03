<script setup>
import { useAppStore } from '../stores/app';
import { storeToRefs } from 'pinia';
import { useHead } from '@vueuse/head';  // Import useHead

const appStore = useAppStore();
const { updates } = storeToRefs(appStore);

// Set the page title dynamically
useHead({
  title: 'Updates - Stay Informed with Our Game Dev Journey'
});
</script>

<template>
  <v-sheet border="b-md" color="secondary-2">
    <div class="bg-primary d-flex justify-center px-6 py-16">
      <div>
        <div class="text-nowrap text-secondary-1 text-h3 font-weight-bold">Updates</div>
        <p class="text-secondary-2  text-h6">
          See what’s going on with our game dev journey!<br />
          If you’d like to get updates about events and new content, subscribe to our newsletter!
        </p>
      </div>
    </div>
  </v-sheet>

  <div class="bg-secondary align-center" style="min-height: auto;">
    <div class="d-flex flex-column">
      <div v-for="(update, index) in updates" :key="index" class="d-flex flex-column align-center py-16"
        transition="scroll-y-transition">
        <router-link :to="`/updatedetail/${update.id}`"
          class="text-decoration-none d-flex flex-column align-center justify-center w-100">
          <v-card class="mt-10 border elevation-9" style="width: 90%;" transition="scroll-y-transition">
            <v-img class="align-end text-white" height="320" :src="appStore.methods.getImagePath(update.cover)" cover>
              <v-card-title>{{ update.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">
              {{ update.subtitle }}
            </v-card-subtitle>

            <v-card-text>
              <div class="text-justify">{{ update.body }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" append-icon="mdi-arrow-right" class="h-100">
                <p class="text-wrap text-left" style="margin: auto;">
                  {{ update.button }}
                </p>
              </v-btn>
            </v-card-actions>
          </v-card>
        </router-link>
      </div>

    </div>
  </div>
</template>
