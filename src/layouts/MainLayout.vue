<template>
    <v-main>
      <navbar></navbar>
      <v-container>
        <person-cards> </person-cards>
      </v-container>
    </v-main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import PersonCards from '@/components/PersonCards.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    PersonCards,
  },
}
</script>