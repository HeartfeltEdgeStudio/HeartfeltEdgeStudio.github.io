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
    <div class="bg-primary d-flex justify-center px-16 py-16">
      <div>
        <div class="text-nowrap text-secondary-1 text-h3 font-weight-bold">Updates</div>
        <p class="text-secondary-2 text-h6">
          See what’s going on with our game dev journey!<br />
          If you’d like to get updates about events and new content, subscribe to our newsletter!
        </p>
      </div>
    </div>
  </v-sheet>

  <div class="bg-secondary align-center" style="min-height: auto;">
    <div class="d-flex flex-column">
      <div class="w-100">
        <div class="d-flex flex-wrap justify-center pb-16">
          <div v-for="(update, index) in updates" :key="index" transition="scroll-y-transition">
            <router-link :to="`/updatedetail/${update.id}`" class="text-decoration-none">
              <div class="d-flex flex-column align-center w-100" id="below">
                <v-card class="w-75 mt-10 border" min-width="md-600" transition="scroll-y-transition">
                  <v-img class="align-end text-white" height="320" :src="appStore.methods.getImagePath(update.cover)" cover>
                    <v-card-title>{{ update.title }}</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pt-4">
                    {{ update.subtitle }}
                  </v-card-subtitle>

                  <v-card-text>
                    <div>{{ update.body }}</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="primary" append-icon="mdi-arrow-right" class="h-100">
                      <p class="text-wrap text-left" style="margin: auto;">
                        {{ update.button }}
                      </p>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
