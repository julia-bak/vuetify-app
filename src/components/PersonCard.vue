<template>
  <v-card class="card" >
    <v-img
      class="card__img"
      :src="person.Photo"
      :alt="person.Name"
    >
    <div class="card__img--tags" >
      <div class="card__img--tags-tag "
        :style="setTagColor(tag.Color)"
        v-for="tag in person.Tags" 
        :key="tag.index"
      >
        <p class="card__img--tags-text d-flex justify-center">{{ tag.Name }}</p>
      </div>
    </div>
    </v-img>

    <div class="card__name text-capitalize">
      {{ person.Name }}
    </div>

    <div class="card__profession">
      {{ person.Title }}
    </div>

    <hr class="card__hr">

    <div class="card__info" v-if="person.Profit">
      <div class="card__info--title d-flex justify-space-between">
        <span class="card__info--title-text">Profit</span>
        <span class="card__info--title-amount">+ ${{ person.Profit[0].Amount }}</span>
      </div>
      <div class="card__info--percentage d-flex">
        <div 
          v-for="profit in person.Profit" 
          :key="profit.index"
          class="card__info--percentage-done" 
          :style="setPercentage(profit.Amount, profit.Color, 10)"
        >
        </div>
      </div>
    </div>

    <div v-else class="card__info--title-text d-flex justify-center">No information about Profit</div>

    <div class="card__info" v-if="person.Attention">
      <div class="card__info--title d-flex justify-space-between">
        <span class="card__info--title-text">Attention</span>
        <span class="card__info--title-amount">{{ person.Attention[0].Amount }} h</span>
      </div>
      <div class="card__info--percentage d-flex">
        <div 
          v-for="attention in person.Attention" 
          :key="attention.index"
          class="card__info--percentage-done" 
          :style="setPercentage(attention.Amount, attention.Color, 1)"
        >
        </div>
      </div>

      <div class="card__progress" v-if="person.Attention">
        <div class="card__progress--block d-flex justify-center">
          <div v-if="person.Attention[0]" class=" d-flex align-center justify-end" style="width:50%">
            <div class="card__progress--block-num">
              {{ person.Attention[0].Amount }} %
            </div>
            <div 
              class="card__progress--block-progress"
              :style="setProgress(person.Attention[0].Amount, person.Attention[0].Color)"
            >
            </div>
          </div>

        <div v-if="person.Attention[1]" class=" d-flex align-center justify-start" style="width:50%">
          <div 
            class="card__progress--block-progress"
            :style="setProgress(person.Attention[1].Amount, person.Attention[1].Color)"
          >
          </div>
          <div class="card__progress--block-num">
            {{ person.Attention[1].Amount }} %
          </div>
        </div>

        </div>

        <div class="card__progress--block d-flex justify-center">
          <div v-if="person.Attention[2]" class="d-flex align-center justify-end" style="width:50%">
            <div class="card__progress--block-num">
              {{ person.Attention[2].Amount }} %
            </div>
            <div 
              class="card__progress--block-progress"
              :style="setProgress(person.Attention[2].Amount, person.Attention[2].Color)"
            >
            </div>
          </div>

          <div v-if="person.Attention[3]" class="d-flex align-center justify-start" style="width:50%">
            <div 
              class="card__progress--block-progress"
              :style="setProgress(person.Attention[3].Amount, person.Attention[3].Color)"
            >
            </div>
            <div class="card__progress--block-num">
              {{ person.Attention[3].Amount }} % 
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-else class="card__info--title-text d-flex justify-center" style="margin-top:30px">No information about Attention</div>
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
    setPercentage(amount, color, num) {
      return {
        "width": `${(amount/num).toFixed(2)}%`,
        "background-color": `#${color}`,
      }
    },
    setProgress(amount, color) {
      return {
        "width": `${(amount/2)}px`,
        "background-color": `#${color}`,
      }
    },
    setTagColor(color) {
      return {
        "background-color": `#${color}`,
      }
    },
  },
}
</script>

<style scoped lang="sass">

.card
  width: 260px
  height: 420px
  border-radius: 10px
  background-color: #fff
  margin-bottom: 40px

  &__img
    height: 145px
    width: 260px
    border-radius: 10px
    position: relative

    &--tags
      position: absolute
      right: 0
      top: 5%
      
      &-tag
        height: 20px
        border-radius: 5px
        width: 50px
        margin-bottom: 5px
        margin-right: -30px
        &:hover
          transition: .8s
          margin-right: 0

      &-text
        color: #fff
        font-weight: 600
        font-size: 12px

  &__progress
    margin-left: 10px

    &--block
      &-progress
        margin: 10px 5px 5px 0
        border-radius: 7px
        height: 37px
        
      &-num
        color: #6E6B7B
        font-size: 14px
        margin: 0 5px 
        

  &__name
    margin: 5px 0 0 10px
    font-weight: 700
    font-size: 18px
    color: #524D64

  &__profession
    margin: 5px 0 0 10px
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
    margin-bottom: 8px

  &__info
    margin-bottom: 5px

    &--title
      margin-right: 15px
      margin-left: 15px
      color: #6E6B7B

      &-amount 
        font-weight: 500
        font-size: 14px

      &-text
        font-weight: 300
        font-size: 13px
        color: #6E6B7B
        margin-bottom: 5px 
        
    &--percentage
      margin: 0  10px
      border-radius: 5px
      background: #D7D7D7
      height: 16px

      &-done
        border-radius: 5px 5px 5px 0px
        margin-left: -5px
        &:first-child
          margin-left: 0
          border-radius: 5px
          z-index: 5
        &:nth-child(2)
          z-index: 4
        &:nth-child(3)
          z-index: 3
        &:nth-child(4)
          z-index: 2

</style>