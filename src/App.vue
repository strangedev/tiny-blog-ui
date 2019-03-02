<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TagSelector :tags="tags"></TagSelector>
  </div>
</template>

<script>
import TagSelector from './components/TagSelector.vue'

export default {
  name: 'app',
  components: {
      TagSelector
  },
    data: () => ({
        tags: ["Apfel", "Himbeere", "Gehirnpilz", "Giraffentorte", "Ein Schwein"]
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
