<template>
  <v-card class="card" >
    <v-img
      class="card__img"
      :src="person.Photo"
      :alt="person.Name"
    />

    <v-card-title class="card__name">
      {{ person.Name}}
    </v-card-title>

    <v-card-subtitle class="card__profession">
      {{ person.Title}}
    </v-card-subtitle>

    <hr class="card__hr">

    <div class="card__profit">
      <div class="card__profit--title d-flex justify-space-between">
        <p class="card__profit--title-text">Profit</p>
        <p class="card__profit--title-sum">+ ${{ person.Profit[0].Amount }}</p>
      </div>
      <div class="card__profit--percentage d-flex">
        <div 
          class="card__profit--percentage-done" 
          :style="profitPercentage(person.Profit[0].Amount, person.Profit[0].Color)"
        >
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true,
    }
  },
  methods: {
    profitPercentage(sum, color) {
      return {
        "width": `${(sum/10).toFixed(2)}%`,
        "background-color": `#${color}`,
      }
    },
  },
}
</script>

<style scoped lang="sass">

.tag 
  width: 50px
  height: 50px
  position: absolute
  background-color: red


.card
  width: 260px
  height: 420px
  border-radius: 10px
  background-color: #fff
  margin-bottom: 40px

  &__img
    max-height: 145px
    max-width: 260px
    border-radius: 10px
    position: relative

  &__name
    font-weight: 700
    font-size: 18px
    color: #524D64

  &__profession
    font-weight: 500
    font-size: 14px
    color: #6E6B7B
    padding-bottom: 8px

  &__hr
    color: #454545
    opacity: .1
    height: 2px
    width: 236px
    margin-left: 13px
    margin-bottom: 15px

  &__profit
    &--title
      margin-right: 15px
      margin-left: 15px
      color: #6E6B7B

      &-sum 
        color: #6E6B7B
        font-weight: 500
        font-size: 14px

      &-text
        font-weight: 300
        font-size: 13px
        
    &--percentage
      margin-right: 10px
      margin-left: 10px
      border-radius: 5px
      background: #D7D7D7
      height: 16px
      
      &-done
        border-radius: 5px

</style>