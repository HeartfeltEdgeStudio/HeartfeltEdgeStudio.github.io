// vite.config.mjs
import AutoImport from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/unplugin-vue-components/dist/vite.js";
import Fonts from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/unplugin-fonts/dist/vite.mjs";
import Layouts from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vue from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/unplugin-vue-router/dist/vite.js";
import Vuetify, { transformAssetUrls } from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import Pages from "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/node_modules/vite-plugin-pages/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Franc/Desktop/websites/HeartfeltEdgeStudio.github.io/vite.config.mjs";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    VueRouter(),
    Layouts(),
    Pages(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Components(),
    Fonts({
      google: {
        families: [{
          name: "Roboto",
          styles: "wght@100;300;400;500;700;900"
        }]
      }
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router"
      ],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  server: {
    port: 3e3
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRnJhbmNcXFxcRGVza3RvcFxcXFx3ZWJzaXRlc1xcXFxIZWFydGZlbHRFZGdlU3R1ZGlvLmdpdGh1Yi5pb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRnJhbmNcXFxcRGVza3RvcFxcXFx3ZWJzaXRlc1xcXFxIZWFydGZlbHRFZGdlU3R1ZGlvLmdpdGh1Yi5pb1xcXFx2aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0ZyYW5jL0Rlc2t0b3Avd2Vic2l0ZXMvSGVhcnRmZWx0RWRnZVN0dWRpby5naXRodWIuaW8vdml0ZS5jb25maWcubWpzXCI7Ly8gUGx1Z2luc1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgRm9udHMgZnJvbSAndW5wbHVnaW4tZm9udHMvdml0ZSdcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcclxuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLi8nLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZ1ZVJvdXRlcigpLFxyXG4gICAgTGF5b3V0cygpLFxyXG5cdFBhZ2VzKCksXHJcbiAgICBWdWUoe1xyXG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfVxyXG4gICAgfSksXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luI3JlYWRtZVxyXG4gICAgVnVldGlmeSh7XHJcbiAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGNvbmZpZ0ZpbGU6ICdzcmMvc3R5bGVzL3NldHRpbmdzLnNjc3MnLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKCksXHJcbiAgICBGb250cyh7XHJcbiAgICAgIGdvb2dsZToge1xyXG4gICAgICAgIGZhbWlsaWVzOiBbe1xyXG4gICAgICAgICAgbmFtZTogJ1JvYm90bycsXHJcbiAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJyxcclxuICAgICAgICB9XSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgIF0sXHJcbiAgICAgIGVzbGludHJjOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRlZmluZTogeyAncHJvY2Vzcy5lbnYnOiB7fSB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogW1xyXG4gICAgICAnLmpzJyxcclxuICAgICAgJy5qc29uJyxcclxuICAgICAgJy5qc3gnLFxyXG4gICAgICAnLm1qcycsXHJcbiAgICAgICcudHMnLFxyXG4gICAgICAnLnRzeCcsXHJcbiAgICAgICcudnVlJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Fzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxXQUFXLDBCQUEwQjtBQUc1QyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWUsV0FBVztBQUNuQyxPQUFPLFdBQVc7QUFaNE4sSUFBTSwyQ0FBMkM7QUFlL1IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ0gsSUFBSTtBQUFBLE1BQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLFVBQVUsQ0FBQztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
