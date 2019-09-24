<template>
  <v-app>
    <Toolbar />
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  components: {
    Toolbar
  }
}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
#app {
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-weight: 400;
  letter-spacing: 0.011em;
  font-size: 21px;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  color: #494949;
}
</style>
