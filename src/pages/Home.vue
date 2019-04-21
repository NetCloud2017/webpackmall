<template>
  <div class="home_view">
    <Homeheader></Homeheader>
  </div>
</template>
<script>
import Homeheader from '../components/header/Homeheader'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home_view{
    width: auto;
    padding: 20px 30px 0;
  }
</style>
