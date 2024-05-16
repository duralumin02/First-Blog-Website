// export default {
//   build: {
//     rollupOptions: {
//       input: {
//         contact: "./src/pages/contact.html",
//         signIn: "./src/pages/signIn.html",
//         signUp: "./src/pages/signUp.html",
//         forgot: "./src/pages/forgot.html",
//         about: "./src/pages/about.html",
//         articles: "./src/pages/articles.html",
//       },
//       output: {
//         format: "esm",
//         dir: "dist",
//         entryFileNames: "[name].js",
//       },
//     },
//   },
// };
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        contact: "./src/pages/contact.html",
        signIn: "./src/pages/signIn.html",
        signUp: "./src/pages/signUp.html",
        forgot: "./src/pages/forgot.html",
        about: "./src/pages/about.html",
        articles: "./src/pages/articles.html",
      },
      output: {
        dir: "dist",
        entryFileNames: "[name].js",
      },
    },
  },
});
