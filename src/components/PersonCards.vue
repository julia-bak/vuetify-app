<template>
  <div class="d-flex">
    <loader v-if="loading" style="margin:0 auto"></loader>
    <div class="d-flex flex-wrap justify-space-around flex-row">
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
    console.log(this.people.length)
  },
}
</script>
