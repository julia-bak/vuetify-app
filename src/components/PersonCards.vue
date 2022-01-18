<template>
  <div class="d-flex flex-wrap justify-space-around flex-row">
    <loader v-if="loading"></loader>
    <person-card
      v-for="person in this.$store.state.people" 
      :key="person.id" 
      :person="person"
    />
    <div class="d-flex justify-center align-center">
      <v-img
        v-if="!loading"
        src="../assets/add.svg"
        width="250"
      />
    </div>
  </div>
</template>

<script>
import PersonCard from './PersonCard.vue'
import Loader from './Loader.vue'

import {mapState} from 'vuex'

export default {
  name: 'PersonCards',
  components: { PersonCard, Loader },
  computed: mapState(['people', 'loading']),
  created() {
    this.$store.dispatch('loadData')
  },
}
</script>
