<template>
  <div :class="$style.card">
    <NuxtLink to="/">
      <img :src="card.imgLink" alt="">
      <div :class="$style.content">
        <h2>{{ card.productName }}</h2>
        <p>
          {{ card.decription }}
        </p>
        <div :class="$style.price">
          {{ card.price }} руб.
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  mounted () {
    console.log(this.card)
  }
}
</script>
<style lang="sass" module>
.card
  background: none
  max-width: 332px
  width: 100%
  min-width: 200px
  background: #FFFEFB
  border-radius: 4px
  box-shadow: 0 20px 30px rgba(0, 0, 0, .04), 0 6px 10px rgba(0, 0, 0, .02)
  img
    border-radius: 4px 4px 0 0
    display: block
    width: 100%
  .content
    padding: 16px 16px 24px
    h2
      margin-bottom: 16px
    p
      font-size: 16px
    .price
      font-weight: 600
      font-size: 24px
      margin-top: 32px
</style>
