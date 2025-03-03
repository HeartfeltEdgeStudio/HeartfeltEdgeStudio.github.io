<script setup>
import { useAppStore } from '../stores/app';
import { storeToRefs } from 'pinia';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Heartfelt Edge Studio - Our Team',
});
const appStore = useAppStore();
const { team } = storeToRefs(appStore);
</script>

<template>
  <v-sheet border="b-md" color="secondary-2">
    <div class="bg-primary d-flex justify-center px-6 px-sm-16 py-16">
      <div>
        <div class="text-nowrap text-secondary-1 text-h3 font-weight-bold">About Us</div>
        <p class="text-secondary-2 text-h6">
          We are <span class="font-weight-black text-decoration-underline">Heartfelt Edge Studio</span>, a young startup
          born from a love for video games and the drive to create something truly unique.
          <br /><br />
          It all started with a small team, big ideas, and countless late nights in front of a screen. Today, we’ve
          grown into a tight-knit group of developers, artists, and creatives, all united by the same passion.
          <br /><br />
          Our journey took a big leap forward with <span class="font-weight-black text-decoration-underline">DigithON
            2024</span>, a defining moment that made us realize just how ambitious our dream was. But determination
          alone
          wasn’t enough—we needed a team that shared our vision. So we went looking… and we found them. Now, we’re
          working together to bring <span class="font-weight-black text-decoration-underline">our first major title to
            life.</span>
          <br /><br />
          This is just the beginning, but the journey is finally underway. And we can’t wait to bring you along for the
          ride.
        </p>
      </div>
    </div>
  </v-sheet>

  <div class="bg-secondary align-center" style="min-height: auto;">
    <div class="d-flex flex-column">

      <div class="w-100">
        <div class="d-flex justify-center my-8 px-6 px-sm-16 py-12">
          <div>
            <div class="text-nowrap text-secondary-2 text-h3 font-weight-bold ">Behind the Pixels</div>
            <p class="text-secondary-2 text-h6">
              We're a group of developers, artists, and sound designers who just love making games. Some of us bring
              worlds to life with code, others create stunning visuals, and some shape the atmosphere with music and
              sound. Everyone adds their own touch, and somehow, it all comes together into something special!
            </p>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div class="d-flex flex-wrap justify-center pb-16">
          <div v-for="(member, index) in team" :key="index" transition="scroll-y-transition">
            <a v-if="member.socialMedia" :href="member.socialMedia" target="_blank"
              class="elevation-9 text-decoration-none d-flex flex-column align-center justify-center mx-8 my-8"
              style="color: inherit;">
              <v-avatar size="250" class="mb-3  text-center" transition="scroll-y-transition">
                <v-img :src="appStore.methods.getImagePath(member.vImg)" alt="Team Member Image"></v-img>
              </v-avatar>
              <div class="text-nowrap text-center text-secondary-2 text-h3 font-weight-bold">{{ member.name }}</div>
              <p class="text-secondary-2 text-h6  text-center">{{ member.role }}</p>
            </a>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div class="d-flex justify-center px-16 mb-16">
          <div>
            <div class="text-nowrap text-secondary-2 text-h3 font-weight-bold opacity-100">Looking for your next
              adventure?</div>
            <p class="text-secondary-2 text-h6">
              Shoot us an email, we might have a spot for you!
            </p>

            <v-btn :to="'/contact'" color="primary" class="w-100 mx-auto h-50 py-8 my-4  border-md">
              <p class="text-wrap font-weight-bold text-center text-h4" style="margin: auto;">
                OPEN APPLICATION</p>
            </v-btn>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
