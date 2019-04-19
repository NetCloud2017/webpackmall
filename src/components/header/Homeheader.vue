<template>
  <div>
     <header class="home_header">
       <User></User>
       <div>
          home logo
       </div>
     </header>
  </div>
</template>
<script>
import User from '../userlogo/User'
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
