<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Blog></Blog>
  </div>
</template>

<script>
import * as BlogEntryModel from "./model/BlogEntry";
import Blog from "./components/Blog";

export default {
  name: 'app',
  components: {
      Blog,
  },
    data: () => ({
        tags: ["Apfel", "Himbeere", "Gehirnpilz", "Giraffentorte", "Ein Schwein"],
        blogEntries: [
            new BlogEntryModel.default("Article 1", "Content 1", "Firstname Lastname", Date(), ["Apfel", "Gehirnpilz"]),
            new BlogEntryModel.default("Article 2", "Content 2", "Firstname Lastname", Date(), ["Apfel", "Himbeere"]),
            new BlogEntryModel.default("Article 3", "Content 3", "Firstname Lastname", Date(), ["Ein Schwein"])
        ]
    })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
