<template>
  <v-app id="app">
    <v-main>
      <Header></Header>
      <v-container>
        <person-card></person-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PersonCard from './components/PersonCard.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    PersonCard,
    Header,
  },

  data: () => ({
  }),
};
</script>

<style lang="sass">
#app
  background-color: #F8F8F8
  font-family: 'Montserrat', sans-serif
</style>