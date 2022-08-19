<template>
  <div class="wrapper" :class="$style.local_wrapper">
    <sidebar @click="createPost" v-if="clientWindow >= 768" :class="$style.sidebar" />
    <div :class="$style.main">
      <div :class="$style.header">
        <my-button :disabled="modalVisible" @click="showModal" v-if="clientWindow < 768" :class="$style.btn">
          Добавить товар
        </my-button>
        <my-select :class="$style.select" />
      </div>
      <div  :class="$style.contnent">
        <card v-for="card in cards" :key="card.id" :card="card"/>
      </div>
    </div>
    <my-modal @click="hideModal" :visible="modalVisible"/>
  </div>
</template>

<script>
import windowResizeMixin from '~/mixins/windowResizeMixin'

export default {
  name: 'IndexPage',
  data () {
    return {
      modalVisible: false,
      cards: [
        { id: '1', productName: 'Наименование товара', decription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', imgLink: '@/assets/images/card-image.jpg', price: '10 000' },
        { id: '2', productName: 'Наименование товара', decription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', imgLink: '@/assets/images/card-image.jpg', price: '10 000' },
        { id: '3', productName: 'Наименование товара', decription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', imgLink: '@/assets/images/card-image.jpg', price: '10 000' },
        { id: '4', productName: 'Наименование товара', decription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк', imgLink: '@/assets/images/card-image.jpg', price: '10 000' },
      ]
    }
  },
  mixins: [windowResizeMixin],
  methods: {
    showModal () {
      this.modalVisible = true
    },
    hideModal () {
      this.modalVisible = false
    },
    createPost (cardInfo) {
      this.cards.push({ id: Date.now(), productName: cardInfo.productName, decription: cardInfo.decription, imgLink: cardInfo.imgLink, price: cardInfo.price })
      console.log(this.cards)
    },
    cardResize () {
      if (this.$el.querySelectorAll('[class*="card_"]').length <= 2) {
        return
      }
      if ((this.$el.querySelectorAll('[class*="card_"]').length - 5) % 3 === 0) {
        this.$el.querySelectorAll('[class*="card_"]')[this.$el.querySelectorAll('[class*="card_"]').length - 1].style.maxWidth = this.$el.querySelectorAll('[class*="card_"]')[0].offsetWidth + 'px'
        this.$el.querySelectorAll('[class*="card_"]')[this.$el.querySelectorAll('[class*="card_"]').length - 2].style.maxWidth = this.$el.querySelectorAll('[class*="card_"]')[0].offsetWidth + 'px'
      } else {
        this.$el.querySelectorAll('[class*="card_"]')[this.$el.querySelectorAll('[class*="card_"]').length - 1].style.maxWidth = this.$el.querySelectorAll('[class*="card_"]')[0].offsetWidth + 'px'
      }
    }
  },
  mounted () {
    this.cardResize()
    window.addEventListener('resize', this.cardResize)
  }
}
</script>

<style lang="sass" module>
.local_wrapper
  display: flex
  column-gap: 16px
  position: relative
  .main
    display: flex
    flex-direction: column
    width: 100%
    .header
      display: flex
      margin-bottom: 15px
      justify-content: flex-end
      .btn
        max-width: 120px
    .contnent
      display: flex
      flex-wrap: wrap
      gap: 16px
      &>*
        flex: 1 1 calc(33% - 10px)

@media (max-width: 767px)
  .local_wrapper
    .main
      .header
        justify-content: space-between
      .contnent
        &>*

@media (max-width: 496px)
  .local_wrapper
    justify-content: center
    .main
      max-width: 332px
      .header
        max-width: 332px
        width: 100%
      .contnent
        &>*
</style>
