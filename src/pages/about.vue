<template>
  <v-sheet border="b-md" color="secondary-2">
    <div class="bg-primary d-flex justify-center px-16 py-16">
      <div>
        <div class="text-nowrap text-secondary-1 text-h3 font-weight-bold">About Us</div>
        <p class="text-secondary-2 text-h6">We are <span class="font-weight-black text-decoration-underline">Heartfelt
            Edge Studio</span>, a young startup born from a love for video games and the drive to create something truly
          unique.
          <br />
          <br />
          It all started with a small team, big ideas, and countless late nights in front of a screen. Today, we’ve
          grown into a tight-knit group of developers, artists, and creatives, all united by the same passion.
          <br />
          <br />
          Our journey took a big leap forward with <span class="font-weight-black text-decoration-underline">DigithON
            2024</span>, a defining
          moment that made us realize just how
          ambitious our dream was. But determination alone wasn’t enough -we needed a team that shared our vision. So
          we
          went looking… and we found them. Now, we’re working together to bring <span
            class="font-weight-black text-decoration-underline">our
            first major title to life.</span>
          <br />
          <br />
          This is just the beginning, but the journey is finally underway. And we can’t wait to bring you along for the
          ride.
        </p>
      </div>
    </div>
  </v-sheet>

  <div class="bg-secondary align-center"
    style="min-height: auto;" cover>
    <div class="d-flex flex-column">

      <div class="w-100">
        <div class="d-flex justify-center mx-8 my-8 px-16 py-12">
          <div>
            <div class="text-nowrap text-secondary-2 text-h3 font-weight-bold opacity-100">Behind the Pixels</div>
            <p class="text-secondary-2 text-h6">
              We're a group of developers, artists, and sound designers who just love making games. Some of us bring
              worlds to life with code, others create stunning visuals, and some shape the atmosphere with music and
              sound. Everyone adds their own touch, and somehow, it all comes together into something special!
            </p>
          </div>
        </div>
      </div>
      
      <div class="w-100 ">
        <div class="d-flex flex-wrap justify-center  pb-16">
          <div v-for="(member, index) in team" :key="index" class=""
            transition="scroll-y-transition">
            <a v-if="member.socialMedia" :href="member.socialMedia" target="_blank"
              class="text-decoration-none d-flex flex-column align-center justify-center mx-16 my-16" style="color: inherit;">
              <v-avatar size="500" class="mb-3">
                <v-img :src="getImagePath(member.vImg)" alt="Team Member Image"></v-img>
              </v-avatar>
              <div class="text-nowrap text-secondary-2 text-h3 font-weight-bold">{{ member.name }}</div>
              <p class="text-secondary-2 text-h6">{{ member.role }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Eddie",
          role: "Lead of Barking and Naps",
          vImg: "team/doggo.jpeg",
          socialMedia: "https://enpa.org/"
        },
        {
          name: "Francesco Lolli",
          role: "Lead of Strategy, Communications, and Operations",
          vImg: "team/francescoL.jpeg",
          socialMedia: "https://www.linkedin.com/in/francescololli00/"
        },
        {
          name: "Mattia Cacciatore",
          role: "Lead of Game Development, Coordination and Workforce",
          vImg: "team/mattiaC.png",
          socialMedia: "https://www.linkedin.com/in/mattia-cacciatore-060348239/"
        },
        {
          name: "Francesco Gentile",
          role: "Game Developer, Project Manager",
          vImg: "team/francescoG.jpg",
          socialMedia: "https://www.linkedin.com/in/francesco-gentile-6768391b3/"
        },
        {
          name: "Matteo Marcantoni",
          role: "Game Developer",
          vImg: "team/matteoM.jpeg",
          socialMedia: "https://www.linkedin.com/in/matteo-marcantoni/"
        },
        {
          name: "Francesco Chiarini",
          role: "Concept Artist, Assets and Characters, 3D Modeling",
          vImg: "team/francescoC.jpeg",
          socialMedia: "https://www.linkedin.com/in/francesco-chiarini-176923223/"
        },
        {
          name: "Nicole Antoniolli",
          role: "Game Artist, 3D Modeling",
          vImg: "team/nicoleA.jpg",
          socialMedia: "https://www.linkedin.com/in/nicole-antoniolli-13b52186/"
        },
        {
          name: "Adriana Infante",
          role: "3D Modeler, Texture Artist",
          vImg: "team/adrianaI.jpg",
          socialMedia: "https://www.linkedin.com/in/adriana-infante-410565230/"
        },
        {
          name: "Pietro De Lorenzi",
          role: "Sound Designer, Game Audio Specialist",
          vImg: "team/pietroD.jpeg",
          socialMedia: "https://www.linkedin.com/in/pietro-de-lorenzi-8bb464270/"
        },
        {
          name: "Luca Ricci",
          role: "Game Composer",
          vImg: "team/lucaR.png",
          socialMedia: "https://www.linkedin.com/in/luca-ricci-composer/"
        },
        // Add more team members here
      ]
    }
  },
  methods: {
    // A method to dynamically resolve image paths for Vite
    getImagePath(imagePath) {
      return new URL(`../assets/${imagePath}`, import.meta.url).href;
    }
  }
}
</script>