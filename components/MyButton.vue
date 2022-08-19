<template>
  <button @click="clickEmit" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean
    }
  },
  methods: {
    clickEmit () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" module>
button
  background: #7BAE73
  border-radius: 10px
  border: none
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
  padding: 10px 0 11px
  width: 100%
  text-align: center
  font-weight: 600
  font-size: 12px
  color: #FFF
  border-radius: 4px
  cursor: pointer
  line-height: 15px
  position: relative
  transition: all .1s
  &:before
    position: absolute
    content: ""
  &:disabled
    background: #EEE
    color: #B4B4B4
    cursor: default
    &:active, &:hover
      background: #EEE
  &:hover
    background: #6B9564
  &:active
    background: #4A6B45

</style>
