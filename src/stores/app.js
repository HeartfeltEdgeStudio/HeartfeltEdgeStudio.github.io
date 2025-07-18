// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    logos: [
      "logos/JoyfulMasksLogoBlack.png",
      "logos/JoyfulMasksLogoWhite.png",
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
      "pics/digithon1.jpeg",
      "pics/digithon2.jpeg",
      "pics/digithon3.jpeg",
      "pics/svilupparty2.jpeg",
      "pics/svilupparty3.jpeg",
    ],
    screenshots: [
      "screenshots/Freud_book.png",
      "screenshots/Freud_book_picture.png",
      "screenshots/postit_wall.png",
      "screenshots/recording_device.png",
      "screenshots/safe_puzzle.png",
      "screenshots/storage_birds_eye_view.png",
      "screenshots/study_window_view.png",
      "screenshots/teddy.png",
      "screenshots/toy_rocket.png",
      "screenshots/tv_puzzle.png",
      "screenshots/tv_static.png",
      "screenshots/vfx_picture.png",
    ],
    art: [
      "art/albertoCharacter.png",
      "art/watch.png",
      "art/university.png",
      "art/trophyModel.png",
      "art/screenDeskModel.png",
      "art/keyArt.png",
      "art/conceptTrophyStudy.png",
      "art/conceptTrophy.png",
      "art/albertoCharacter2.png",
      "art/university.jpg",
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
        role: "Game Designer",
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
        name: "Raffaele Marino",
        role: "Game Artist, 3D & Animation",
        vImg: "team/raffaeleM.png",
        socialMedia: "https://www.linkedin.com/in/raffaele-marino-5640b9293/"
      },
      {
        name: "Francesco Chiarini",
        role: "Concept Artist, Assets and Characters, 3D Modeling",
        vImg: "team/francescoC.jpeg",
        socialMedia: "https://www.linkedin.com/in/francesco-chiarini-176923223/"
      },
      {
        name: "Nicole Antoniolli",
        role: "Game Artist, 3D Modeler",
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
        id: "Svilupparty2025Announcement",
        title: "Svilupparty 2025",
        date: "2025-04-14",
        body: "We’re excited to announce that Joyful Masks will be at Svilupparty 2025 in Bologna! Join us at our booth where we’ll be showcasing an exclusive demo of our latest game. We’ll also be releasing a brand-new trailer, giving you a first look at what's coming next. Don’t miss out on the chance to grab some cool gadgets and goodies while you’re there. Whether you’re a developer, a player, or just curious about what we’ve been working on, we’d love to meet you in person. Svilupparty 2025 – Bologna Look for the Joyful Masks booth and come say hi! #Svilupparty2025 #JoyfulMasks #IndieGames #GameDev #BolognaEvents",
        cover: "https://www.ipid.dev/wp-content/uploads/2021/01/svilupparty_small-1.png",
        button: "Come Say Hello!",
        links: [["Official Event Link", "https://www.ipid.dev/svilupparty"]]
      },
      {
        id: "HeartfeltEdgeStudioDigithonFinalist",
        title: "Heartfelt Edge Studio is a Digithon finalist",
        date: "2024-09-19",
        subtitle: "Digithon 2024",
        body: "We’re thrilled to be among the top 100 startups selected for Digithon 2024! We’re excited to showcase our ideas, connect with industry leaders, and gain valuable feedback. This opportunity will help us demonstrate our unique concepts and build relationships with fellow innovators who share our passion for transforming the gaming world.",
        cover: "miscellaneous/digithonAnn.jpg",
        button: "View The Announcement",
        images: ["pics/digithonPic.png", "pics/digithon1.jpeg", "pics/digithon2.jpeg", "pics/digithon3.jpeg"],
        links: [["Check out the finalists!", "https://www.digithon.it/finalists"]]
      },
      {
        id: "HeartfeltEdgeStudioDigithonSelection",
        title: "Digithon 2024",
        date: "2024-07-16",
        body: "We applied for Digithon 2024, eager to showcase our innovative gaming solutions. Participating in Digithon 2024 will allow us to network with industry leaders, gain invaluable feedback, and attract potential collaboratos. We're excited about the opportunity to demonstrate our unique gaming concepts and connect with like-minded professionals who share our passion for revolutionizing the gaming industry.",
        cover: "miscellaneous/digithonLogo1.jpg",
        button: "View Our Startup",
        links: [["Check out our pitch!", "https://www.digithon.it/startups/2228/heartfelt-edge-studio"]]
      },
    ],
    methods: {
      getImagePath(imagePath) {
        try {
          new URL(imagePath);
          return imagePath;
        } catch (e) {
          return new URL(`../assets/${imagePath}`, import.meta.url).href;
        }
      }
    }
  }),
})
