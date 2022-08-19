<template>
  <div :class="$style.input">
    <label :for="inputName">{{ label }}<div v-show="required" :class="$style.dot" /></label>
    <p :class="$style.invalid" v-if="required && invalid && blured">Поле является обязательным</p>
    <textarea
      v-if="type === 'textarea'"
      @click="emitter('click', $event)"
      @focus="emitter('focus', $event), blured = false"
      @blur="emitter('blur', $event), blured = true"
      @input="emitter('update:modelValue', $event)"
      :value="modelValue"
      id=""
      :placeholder="placeholder"
      :name="inputName"
    />
    <input
      v-else
      @click="emitter('click', $event)"
      @input="emitter('update:modelValue', numeric($event))"
      @focus="emitter('focus', $event), blured = false"
      @blur="emitter('blur', $event), blured = true"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :name="inputName"
    />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      blured: false
    }
  },
  props: {
    invalid: {
      type: Boolean
    },
    modelValue: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    required: {
      type: Boolean
    },
    digital: {
      type: Boolean
    }
  },
  methods: {
    emitter (eventName, e) {
      this.$emit(eventName, e)
    },
    numeric (e) {
      if (this.digital === true) {
        console.log(e.inputType)
        if (e.inputType === 'deleteContentBackward') {
          e.target.value = parseInt(e.target.value.replace(/\s+/g, ''), 10)
          e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1)
        }
        e.target.value = e.target.value.replace(/\D+/g, '')
          .split('')
          .reverse()
          .map((char, i) => char + (i % 3 ? '' : ' '))
          .reverse()
          .join('').toString()
        return e
      }
      return e
    }
  }
}
</script>

<style lang="sass" module>
.input
  display: flex
  flex-direction: column
  position: relative
  transition: all 1s
  .invalid
    position: absolute
    bottom: -14px
    font-size: 8px
    line-height: 10px
    color: #FF8484
    & + input, & + textarea
      outline: 1px solid #FF8484

label
  width: fit-content
  font-size: 10px
  display: inline-block
  color: #49485E
  margin-bottom: 4px
  line-height: 13px
  position: relative
  .dot
    position: absolute
    content: ""
    width: 4px
    height: 4px
    background: #FF8484
    top: 0
    right: -4px
    border-radius: 50%

input, textarea
  font-size: 12px
  padding: 10px 16px 11px
  border: none
  box-shadow: 0px 2px 5px rgba(0,0,0, .1)
  font-family: 'Source Sans Pro', sans-serif
  border-radius: 4px
  width: 100%
  color: #3F3F3F
  overflow: hidden
  &::placeholder
    color: #B4B4B4
    transition: all .3s
  &:hover::placeholder, &:focus::placeholder
    transform: scale(1.1) translateX(12px)

textarea
  height: 108px
  resize: none

</style>
