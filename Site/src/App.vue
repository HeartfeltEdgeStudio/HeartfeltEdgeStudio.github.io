<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">

        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Activity</a></li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center py-10 xs:py-10">
      <div class="w-11/12 space-y-1 md:space-y-2">

        <h1
          class="3xl:text-8xl 3xl:py-20 2xl:text-8xl 2xl:py-16 xl:text-7xl lg:text-6xl lg:py-18 md:text-5xl sm:text-4xl text-xl font-Bebas font-bold leading-tight text-gray-700">
          Heartfelt games with a cutting edge
        </h1>

      </div>

      <div class="w-8/12 flex justify-end">
        <img src="./assets/HeartfeltEdgeStudioPadded.png" alt="user image" />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">

    <a href="https://www.digithon.it/finalists" target="_blank">
      <h3 class="heading3 my-5">Activity</h3>
      <div class="card">
        <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-100 lg:w-100 xl:w-1/2">
          <h4 class="project-title item">Heartfelt Edge Studio is a Digithon 2024 finalist</h4>
          <p class="font-work_sans pr-12 text-xl">
            We’re thrilled to be among the top 100 startups selected for Digithon 2024! We’re excited to showcase our
            ideas,
            connect with industry leaders, and gain valuable feedback. This opportunity will help us demonstrate our
            unique concepts and build
            relationships with fellow innovators who share our passion for transforming the gaming world.
          </p>
          <button class="text-sky-800 font-bold text-3xl tracking-wider">
            View The Announcement
          </button>
        </div>
        <div class="card-image bg-white-100">
          <img class="object-cover w-full h-100 rounded-xl md:h-100" src="./assets/digithon.jpg" />
        </div>
      </div>
    </a>

    <a href="https://www.digithon.it/startups/2228/heartfelt-edge-studio" target="_blank">
      <div class="card">
        <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-100 lg:w-100 xl:w-1/2">
          <h4 class="project-title item">Digithon 2024</h4>
          <p class="font-work_sans pr-12 text-xl">
            We applied for Digithon 2024, eager to showcase our innovative gaming solutions.
            Participating in Digithon 2024 will allow us to network with industry leaders, gain invaluable feedback, and
            attract potential collaboratos.
            We're excited about the opportunity to demonstrate our unique gaming concepts and connect with like-minded
            professionals who share our passion
            for revolutionizing the gaming industry.
          </p>
          <button class="text-sky-800 font-bold text-3xl tracking-wider">
            View Our Startup
          </button>
        </div>
        <div class="card-image bg-white-100">
          <img class="object-cover w-full h-100 rounded-xl md:h-100" src="./assets/DigithonLogo.jpg" />
        </div>
      </div>
    </a>
  </div>

  <div class="banner-1 xl:flex items-center md:justify-evenly" id="about">
    <img style="height: 100vh;width: 100vh;object-fit: scale-down;" src="./assets/HeartfeltEdgeStudioSmallLogo.png"
      alt="user image" />
    <div class="m-0 p-0 sm:pb-12 md:mb-0">
      <h4 class="project-title md:text-7xl text-5xl item">What drives us to create video games?</h4>
      <p class="font-work_sans md:text-5xl text-3xl">
        Our dream is to make something we can be proud of, sharing our vision with the world.
      </p>
    </div>
  </div>

  <div class="banner-2 flex h-full items-center">
    <div class="w-7/12 p-2 d-flex align-items-center">
      <h2 class="heading3 sm:text-3xl md:text-4xl text-2xl font-Bebas font-bold">
        Heartfelt games with a cutting edge
      </h2>
    </div>
    <div class="w-5/12">
      <div class="flex flex-wrap justify-end gap-2">

        <a href="https://www.linkedin.com/company/heartfelt-edge-studio"><button class="bg-white p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z">
              </path>
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364 c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274 L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479 C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"></path>
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677 c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638 c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001 c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"></path>
              <path fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12 c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698 c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19 c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z">
              </path>
            </svg>
          </button></a>

        <a href="https://x.com/HeartfeltEdge"><button
            class="bg-white p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <linearGradient id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1" x1="4.338" x2="38.984" y1="-10.056"
                y2="49.954" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#4b4b4b"></stop>
                <stop offset=".247" stop-color="#3e3e3e"></stop>
                <stop offset=".686" stop-color="#2b2b2b"></stop>
                <stop offset="1" stop-color="#252525"></stop>
              </linearGradient>
              <path fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)"
                d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28 C42,40.209,40.209,42,38,42z">
              </path>
              <path fill="#fff"
                d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z">
              </path>
              <polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
              <polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
            </svg>
          </button></a>

        <a href="https://www.instagram.com/heartfeltedgestudio?igsh=enY2amZxZXRlZWNm"><button
            class="bg-white p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fd5"></stop>
                <stop offset=".328" stop-color="#ff543f"></stop>
                <stop offset=".348" stop-color="#fc5245"></stop>
                <stop offset=".504" stop-color="#e64771"></stop>
                <stop offset=".643" stop-color="#d53e91"></stop>
                <stop offset=".761" stop-color="#cc39a4"></stop>
                <stop offset=".841" stop-color="#c837ab"></stop>
              </radialGradient>
              <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z">
              </path>
              <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#4168c9"></stop>
                <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
              </radialGradient>
              <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z">
              </path>
              <path fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z">
              </path>
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
              <path fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z">
              </path>
            </svg>
          </button></a>

        <a href="https://www.facebook.com/people/Heartfelt-Edge-Studio/61561683022764/"><button
            class="bg-white p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#0d61a9"></stop>
                <stop offset="1" stop-color="#16528c"></stop>
              </linearGradient>
              <path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)"
                d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32 c1.105,0,2,0.895,2,2V40z">
              </path>
              <path
                d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208 l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                opacity=".05"></path>
              <path
                d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204 l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                opacity=".07"></path>
              <path fill="#fff"
                d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4 h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z">
              </path>
            </svg>
          </button></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
