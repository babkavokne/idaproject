<template>
  <div :class="$style.sidebar" @click.stop>
    <h1 v-if="clientWindow >= 768">
      Добавление товара
    </h1>
    <div :class="$style.panel">
      <h1 v-if="clientWindow <= 768">
        Добавление товара
      </h1>
      <my-input
        :modelValue="cardInfo.productName"
        @update:modelValue="log"
        @blur="setInvalid"
        :invalid="!cardInfo.productName"
        :class="$style.input"
        label="Наименование товара"
        placeholder="Введите наименование товара"
        input-name="productName"
        required />
      <my-input
        :modelValue="cardInfo.decription"
        @update:modelValue="log"
        :class="$style.input"
        label="Описание товара"
        type="textarea"
        placeholder="Введите описание товара"
        input-name="decription" />
      <my-input
        :modelValue="cardInfo.imgLink"
        @update:modelValue="log"
        @blur="setInvalid"
        :invalid="!cardInfo.imgLink"
        :class="$style.input"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
        input-name="imgLink"
        required />
      <my-input
        :modelValue="cardInfo.price"
        @update:modelValue="log"
        @blur="setInvalid"
        :invalid="!cardInfo.price"
        :class="$style.input"
        label="Цена товара"
        placeholder="Введите цену"
        input-name="price"
        digital
        required />
      <my-button @click="$emit('click', {...cardInfo})" :disabled="!valiable" :class="$style.btn">
        Добавить товар
      </my-button>
    </div>
  </div>
</template>

<script>
import resizeMixin from '~/mixins/windowResizeMixin'

export default {
  name: 'Sidebar',
  mixins: [resizeMixin],
  data () {
    return {
      cardInfo: {
        productName: '',
        decription: '',
        imgLink: '',
        price: ''
      }
    }
  },
  methods: {
    setInvalid (e) {
      this.invalid = true
    },
    log (e) {
      // if (e.target.name === 'price') {
      //   this.cardInfo[e.target.name] = e.target.
      // }
      this.cardInfo[e.target.name] = e.target.value
    }
  },
  computed: {
    valiable () {
      return this.cardInfo.productName && this.cardInfo.imgLink && this.cardInfo.price
    }
  }
}
</script>

<style lang="sass" module>
.sidebar
  width: 100%
  max-width: 332px
  min-width: 250px
  h1
    margin-bottom: 16px
  .panel
    position: sticky
    top: 24px
    background-color: #FFFEFB
    border-radius: 4px
    padding: 24px
    box-shadow: 0 20px 30px rgba(0, 0, 0, .04), 0 6px 10px rgba(0, 0, 0, .02)
    .input:not(:first-child)
      margin-top: 16px
    .btn
      margin-top: 24px

@media (max-width: 380px)
  .sidebar
    h1
      font-size: 24px
</style>
