<template>
  <div class="header d-flex justify-space-between">
    <div class="header__logo">
      <v-img
        height="50"
        src="../assets/logo.png"
      />
    </div>

    <div class="header__form d-flex">
      <v-img
        class="header__form-img"
        height="24"
        src="../assets/btn-blue.svg"
      />
      <v-img
        class="header__form-img"
        height="24"
        src="../assets/btn-black.svg"
      />
      <v-img
        class="header__form-img"
        height="24"
        src="../assets/btns.svg"
      />
      <v-input
        class="header__form-input"
      >
      </v-input>
    </div>

    <div class="header__profile">
      <v-img
        class="header__profile-img"
        height="50"
        src="../assets/avatar.png"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header
  height: 120px
  &__logo
    margin-left: 24px
    margin-top: 11px
  &__form
    margin-top: 24px
    &-img
      margin-right: 12px
    &-input
      width: 190px
      height: 20px
      background-color: #fff
      border: 1px solid #000
      border-radius: 7px
      margin-left: 40px
      margin-right: 50px
  &__profile
    margin-right: 14px
    margin-top: 11px
    &-img
      border-radius: 10px
</style>