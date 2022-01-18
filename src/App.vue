<template>
  <v-app id="app">
    <v-main>
      <Header></Header>
      <v-container>
        <person-cards></person-cards>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PersonCards from './components/PersonCards.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    PersonCards,
    Header,
  },
}
</script>

<style lang="sass">
#app
  background-color: #F8F8F8
  font-family: 'Montserrat', sans-serif
</style>