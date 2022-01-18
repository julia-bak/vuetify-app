<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="sass">
.lds-dual-ring 
  display: inline-block
  width: 380px
  height: 380px

.lds-dual-ring:after 
  content: " "
  display: block
  width: 364px
  height: 364px
  margin: 38px
  border-radius: 50%
  border: 56px solid #fff
  border-color: #fff transparent #fff transparent
  animation: lds-dual-ring 2.2s linear infinite

@keyframes lds-dual-ring 
  0% 
    transform: rotate(0deg)
  100% 
    transform: rotate(360deg)


</style>