<template>
  <div class="home_view">
    <Homeheader></Homeheader>
    <el-row>
      <el-col>
        <main class="main">
          <home-aside :menus="menus"></home-aside>
        </main>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Homeheader from '../components/header/Homeheader'
import HomeAside from '../components/aside/HomeAside'
export default {
  name: 'Home',
  data () {
    return {
      menus: this.$store.homeNav.menus,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Homeheader,
    HomeAside
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
