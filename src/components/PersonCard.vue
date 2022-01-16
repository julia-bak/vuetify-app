<template>
  <v-row class="d-flex justify-space-between">
    <v-col 
      class="person" 
      v-for="person in people" 
      :key="person.id" 
    >
      <v-card class="person__card">
        <v-img
          class="person__card-img"
          :src="person.Photo"
        >
        </v-img>
        <v-card-title class="person__card-name">
          {{ person.Name}}
        </v-card-title>

         <v-card-subtitle class="person__card-profession">
          {{ person.Title}}
        </v-card-subtitle>
        <hr class="person__card-hr">

      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import axios from 'axios'

export default {
  name: 'PersonCard',
  data: () => ({
    people: [],
  }),
  mounted() {
    axios
      .get('https://api.in.dev-team.club/people')
      .then(res => (this.people = res.data))
      .then(console.log('from axios', this.people))
    },
}
</script>

<style scoped lang="sass">
.person__card
  width: 260px
  height: 420px
  border-radius: 10px
  background-color: #fff

  &-img
    max-height: 145px
    max-width: 260px
    border-radius: 10px

  &-name
    font-weight: 700
    font-size: 18px

  &-profession
    font-weight: 500
    font-size: 14px
    color: #6E6B7B
    padding-bottom: 8px

  &-hr
    color: #454545
    opacity: .1
    height: 2px
    width: 236px
    margin-left: 13px
</style>