// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    logos: [
      "logos/HeartfeltEdgeStudio-02.png",
      "logos/HeartfeltEdgeStudio.png",
      "logos/HeartfeltEdgeStudio2.jpg",
      "logos/HeartfeltEdgeStudio2.png",
      "logos/HeartfeltEdgeStudioRectangularLogo.png",
      "logos/HeartfeltEdgeStudioSquare.jpg",
      "logos/HeartfeltEdgeStudioWhite.png",
    ],
    eventPics: [
      "pics/TeamPic.png",
      "pics/digithonPic.png",
      "pics/digithon2.jpeg",
    ],
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
    ],
    updates: [
      {
        id: "HeartfeltEdgeStudioDigithonFinalist",
        title: "Heartfelt Edge Studio is a Digithon finalist",
        date: "2024-09-19",
        subtitle: "Digithon 2024",
        body: " We’re thrilled to be among the top 100 startups selected for Digithon 2024! We’re excited to showcase our ideas, connect with industry leaders, and gain valuable feedback. This opportunity will help us demonstrate our unique concepts and build relationships with fellow innovators who share our passion for transforming the gaming world. ",
        cover: "miscellaneous/digithonAnn.jpg",
        button: "View the announcement",
        images: ["pics/digithonPic.png", "pics/digithon1.jpeg", "pics/digithon2.jpeg", "pics/digithon3.jpeg"],
        links: [["Check out the finalists!", "https://www.digithon.it/finalists"]]
      },
      {
        id: "HeartfeltEdgeStudioDigithonSelection",
        title: "Digithon 2024",
        date: "2024-07-16",
        body: " We applied for Digithon 2024, eager to showcase our innovative gaming solutions. Participating in Digithon 2024 will allow us to network with industry leaders, gain invaluable feedback, and attract potential collaboratos. We're excited about the opportunity to demonstrate our unique gaming concepts and connect with like-minded professionals who share our passion for revolutionizing the gaming industry.",
        cover: "miscellaneous/digithonLogo1.jpg",
        button: "View Our Startup",
        links: [["Check out our pitch!", "https://www.digithon.it/startups/2228/heartfelt-edge-studio"]]
      },
    ],
    methods: {
      getImagePath(imagePath) {
        return new URL(`../assets/${imagePath}`, import.meta.url).href;
      }
    }
  }),
})
