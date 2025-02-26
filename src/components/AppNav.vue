<template>
  <v-app-bar color="secondary" scroll-behavior="collapse">
    <v-app-bar-title>
      <v-img width="130" src="../assets/HeartfeltEdgeStudioWhite.png" />
    </v-app-bar-title>

    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon color="primary" v-bind="props">
        </v-app-bar-nav-icon>
      </template>

      <v-list>
        <v-list-item 
          class="px-8" 
          v-for="(item, i) in items" 
          :key="i" 
          :to="item.path"
          :disabled="isCurrentPage(item.path)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Home', path: '/' },
      { title: 'Our Games', path: '/joyfulmasks' },
      { title: 'About Us', path: '/about' },
      { title: 'Contact Us', path: '/contact' },
      { title: 'Updates', path: '/updates' },
      { title: 'Press', path: '/press' },
    ],
  }),
  methods: {
    isCurrentPage(path) {
      return this.$route.path === path;
    },
  },
};
</script>
