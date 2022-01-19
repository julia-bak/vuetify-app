<template>
  <v-app id="app">
    <main-layout></main-layout>
  </v-app>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
}
</script>

<style lang="sass">
#app
  background-color: #F8F8F8
  font-family: 'Montserrat', sans-serif
</style>