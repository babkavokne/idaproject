<template>
  <div @click="click" v-if="visible" :class="$style.modal" class="wrapper">
    <sidebar :class="$style.sidebar" />
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    visible: {
      type: Boolean
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" module>
.modal
  position: fixed
  height: 100vh
  top: 0
  bottom: 0
  right: 0
  left: 0
  background: rgba(0, 0, 0, .1)
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  .sidebar
    cursor: default
</style>
