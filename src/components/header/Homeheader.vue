<template>
  <div>
     <header class="home_header">
       <el-cow>
         <el-col span="6">
          <User></User>
         </el-col>
         <el-col span="12">
          <div>
            home logo
          </div>
         </el-col>
         <el-col span="6">
           <Login></Login>
         </el-col>
       </el-cow>
     </header>
  </div>
</template>
<script>
import User from '../userlogo/User';
import Login from '../Login/Login'
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    User,
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home_header{
    display: flex;
  }
</style>
