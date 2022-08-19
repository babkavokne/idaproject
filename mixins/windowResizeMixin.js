export default {
  data () {
    return {
      clientWindow: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', this.viewHandle)
  },
  methods: {
    viewHandle () {
      this.clientWindow = window.innerWidth
    }
  }
}
