<template>
  <div :class="$style.select">
    <div :class="$style.option">
      По умолчанию
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelect'
}
</script>

<style lang="sass" module>
.select
  display: inline-block
  cursor: pointer
  padding: 10px 16px 11px
  background: #FFFEFB
  box-shadow: 0 2px 5px rgba(0,0,0, .1)
  color: #B4B4B4
  border-radius: 4px
  font-size: 12px
  &:focus
    outline: 2px solid black
  .option
    position: relative
    padding-right: 10px
    &::before
      position: absolute
      content: ""
      width: 5px
      height: 5px
      border: 1px solid #B4B4B4
      right: 0px
      top: 50%
      box-sizing: border-box
      border-top: none
      border-left: none
      transform: rotate(45deg) translate(-25%, -25%)

    // &::before, &::after
    //   position: absolute
    //   content: ""
    //   right: -10px
    //   width: 5px
    //   height: 2px
    //   background: #B4B4B4
    // &::after

</style>
