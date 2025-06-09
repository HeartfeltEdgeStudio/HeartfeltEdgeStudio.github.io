<script setup>
import { useAppStore } from '../stores/app';
import { storeToRefs } from 'pinia';
import { useHead } from '@vueuse/head'; // Import useHead to modify the page title dynamically
import JSZip from 'jszip'; // Import JSZip library

const appStore = useAppStore();
const { logos } = storeToRefs(appStore);
const { eventPics } = storeToRefs(appStore);
const { screenshots } = storeToRefs(appStore);
const { art } = storeToRefs(appStore);
// Set dynamic page title
useHead({
  title: 'Joyful Masks - Factsheet and Game Information'
});

// Function to zip logos and eventPics and download them
async function zipAndDownload() {
  const zip = new JSZip();

  // Function to add images to the zip
  const addImagesToZip = async (images, folderName) => {
    if (!Array.isArray(images)) {
      console.error(`Expected an array for ${folderName}, but got`, images);
      return;  // Early exit if images is not an array
    }

    for (let image of images) {
      if (!image) continue;  // Skip if image is falsy (e.g., null or undefined)

      const imagePath = appStore.methods.getImagePath(image);

      try {
        const response = await fetch(imagePath);
        const blob = await response.blob();
        zip.file(`${folderName}/${image}`, blob);
      } catch (err) {
        console.error(`Error fetching ${image}:`, err);
      }
    }
  };

  const addUrlShortcutsToZip = (zipInstance, links) => {
    for (const { name, url } of links) {
      if (!name || !url) {
        console.warn('Invalid link format:', { name, url });
        continue;
      }
      const urlShortcutContent = `[InternetShortcut]\nURL=${url}`;
      zipInstance.file(`${name}.url`, urlShortcutContent);
    }
  };

  // Add logos and eventPics to the zip file using .value to access the actual arrays
  await addImagesToZip(logos.value, 'logos');
  await addImagesToZip(eventPics.value, 'eventPics');
  await addImagesToZip(screenshots.value, 'screenshots');
  await addImagesToZip(art.value, 'art');
  addUrlShortcutsToZip(zip, [{ name: 'JoyfulMasksTrailer', url: 'https://www.youtube.com/watch?v=WUKgRZFUgSw' }, { name: 'SteamPage', url: 'https://store.steampowered.com/app/3778530/Joyful_Masks/' },]);

  // Generate the zip file
  zip.generateAsync({ type: 'blob' })
    .then(function (content) {
      // Trigger the download of the zip file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'presskit.zip';
      link.click();
    })
    .catch((error) => {
      console.error('Error generating zip file:', error);
    });
}
</script>


<template>
  <OverlaySignupPopup :delay="4000" />
  <div class="white align-center" style="min-height: auto;" cover>

    <div class="d-flex flex-column">
      <div class="w-100">
        <div class="d-flex flex-column justify-center mx-6 mx-sm-8 my-2 py-12">
          <v-btn :to="'/contact'" color="primary" class="w-100 mx-auto h-100 py-8 mb-8 border-md">
            <p class="text-wrap font-weight-bold text-center text-h4" style="margin: auto;">
              REQUEST A COPY OF THE GAME
            </p>
          </v-btn>
          <div class="text-nowrap text-secondary text-h5 text-sm-h3 font-weight-bold">FACTSHEET</div>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-2">Quick Pitch</div>
          <p class="text-secondary text-justify text-body-1">
            <span class="text-italic">Joyful Masks</span> is a <span class="font-weight-black text-primary">3D
              first-person psychological puzzle game with horror elements</span> developed in Unreal Engine 5. Dive
            into a surreal, ever-shifting world where reality bends, memories unravel, and every puzzle brings you
            closer to the truth—or deeper into the unknown.
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">The Premise</div>
          <p class="text-secondary text-justify text-body-1">
            In a university classroom, a radical experiment pushes the limits of neuroscience. Professor Alberto
            Saggi, a brilliant but haunted researcher, undergoes a dangerous procedure—inducing a deep, drug-induced
            coma to allow his assistant, Kurt Wagner, to enter his subconscious through an advanced neuro-interactive
            system.
            <br /><br />
            What begins as a controlled study quickly turns into a descent through a fragmented mind, where familiar
            hallways twist into something living, shadows move on their own, and buried traumas take form. Kurt must
            navigate psychological puzzles and surreal nightmares to uncover the truth about his mentor’s past—before
            the experiment spirals out of control.
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">Target Platforms</div>
          <p class="text-secondary text-justify text-body-1">
            The game is planned for <span class="font-weight-black text-primary">PC (Steam)</span> at launch, with
            possible future expansions to other platforms.
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">Release & Development</div>
          <p class="text-secondary text-justify text-body-1">
            Joyful Masks is currently in <span class="font-weight-black text-primary">pre-alpha</span>, with a demo
            coming soon! We’re planning for a full release for this November and are fully committed to bringing this
            experience to life on our own terms. Every detail is being crafted with care to ensure a haunting and
            immersive journey.
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">Playtime</div>
          <p class="text-secondary text-justify text-body-1">
            Joyful Masks is a richly atmospheric, story-driven experience. With several levels, each taking around 30–60
            minutes, a full playthrough will last <span class="font-weight-black text-primary">approximately five to six
              hours</span>.<br /><br />
            As you navigate the depths of the mind, expect a journey filled with thought-provoking puzzles, quiet
            tension, and the unraveling of a deeply personal story.<br /><br />
            Reality is shifting. Can you make sense of it?
          </p>

          <v-img class="align-end text-justify text-white my-10" height="700" src="../assets/art/keyArt.png"
            cover></v-img>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-2">Watch the <span
              class="font-weight-black text-primary">trailer</span></div>

          <div class="bg-black d-flex  mt-4 w-100 h-100" style="position: relative; padding-bottom: 56.25%;height: 0;">
            <iframe style=" position: absolute;top: 0;left: 0;width: 100%;height: 100%;"
              src="https://www.youtube.com/embed/WUKgRZFUgSw"></iframe>
          </div>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">Gameplay</div>
          <p class="text-secondary text-justify text-body-1">
            Joyful Masks is a richly atmospheric, story-driven experience. With seven levels, each taking around 30–40
            minutes, a full playthrough will last <span class="font-weight-black text-primary">approximately four
              hours</span>.<br /><br />
            Step into the mind of Professor Saggi and navigate a world shaped by <span
              class="font-weight-black text-primary">memories, logic, and hidden truths</span>. Joyful Masks blends
            first-person puzzle-solving with narrative-driven exploration, challenging you to <span
              class="font-weight-black text-primary">untangle the subconscious</span> one step at a time.<br /><br />
            Each level is a self-contained, evolving space filled with <span
              class="font-weight-black text-primary">intricate puzzles</span> that demand observation, reasoning, and
            creativity. As you move through these shifting environments—sometimes cozy, sometimes eerie—you'll uncover
            echoes of the professor’s past, <span class="font-weight-black text-primary">piecing together a
              story</span> buried beneath layers of thought and emotion.<br /><br />
            With no combat or jump scares, Joyful Masks instead builds tension through discovery, immersion, and <span
              class="font-weight-black text-primary">the quiet unease of a world that doesn’t always behave as it
              should</span>. Can you find the patterns, solve the puzzles, and bring clarity to a fractured mind?
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">Aesthetic</div>
          <v-img class="align-end text-justify text-white my-2" height="700" src="../assets/art/university.jpg"
            cover></v-img>
          <p class="text-secondary text-justify text-body-1">
            Joyful Masks draws from a rich <span class="font-weight-black text-primary">Italian atmosphere</span>,
            blending the warmth of cozy, sunlit spaces with the quiet mystery of overgrown courtyards and forgotten
            corridors. Inspired by historic universities, aged villas, and the lush greenery of the Italian
            countryside, our world feels lived-in—filled with history, yet touched by something just out of
            reach.<br /><br />
            The contrast between inviting, familiar places and strange, dreamlike distortions creates an experience
            that is both comforting and intriguing. Every hallway, every puzzle, and every shift in the environment is
            <span class="font-weight-black text-primary">carefully crafted to evoke a sense of discovery</span>,
            making the journey through the mind feel as tangible as the real world.?
          </p>

          <div class="text-nowrap text-secondary text-h5 font-weight-bold pt-4">About Us</div>
          <p class="text-secondary text-justify text-body-1">
            We are <span class="font-weight-black text-primary">Heartfelt Edge Studio</span>, an indie team driven by
            a love for storytelling, atmosphere, and unique gameplay experiences.<br /><br />
            What started as a small group with a big idea has grown into a dedicated team of developers, artists, and
            sound designers, all working together to bring Joyful Masks to life.<br /><br />
            Our goal is to create games that leave an impact—games that challenge perception, spark curiosity, and
            stay with you long after you’ve put down the controller. With Joyful Masks, we’re crafting an experience
            that blends intricate puzzles with deep psychological exploration, inviting players into a world where
            every detail has meaning.<br /><br />
            <span class="font-weight-bold text-primary">This is just the beginning for us, and we can’t wait to share
              what we’ve been working on.</span>
          </p>

          <div class="w-100 text-nowrap text-secondary text-h5 font-weight-bold pt-4 pb-4 w-50">Icons and Logos, The
            Team
          </div>
          <v-btn @click="zipAndDownload" color="primary" class="w-100 mx-auto h-100 py-8 mb-8 border-md">
            <p class="text-wrap font-weight-bold text-center text-h4" style="margin: auto;">
              DOWNLOAD PRESS KIT
            </p>
          </v-btn>
          <v-btn :to="'/contact'" color="primary" class="w-100 mx-auto h-100 py-8 border-md">
            <p class="text-wrap font-weight-bold text-center text-h4" style="margin: auto;">
              REQUEST A COPY OF THE GAME
            </p>
          </v-btn>
          <div v-for="(logo, index) in logos" :key="index" class="d-flex justify-center align-center">
            <img :src="appStore.methods.getImagePath(logo)" alt="Logo" class="w-50" />
          </div>
          <div v-for="(picture, index) in eventPics" :key="index" class="d-flex justify-center align-center">
            <img :src="appStore.methods.getImagePath(picture)" alt="Digithon" class="w-75 w-md-50 py-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>