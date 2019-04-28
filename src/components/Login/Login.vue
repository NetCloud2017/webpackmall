<template>
  <div  class="login">
    <section class="login-btn">
      <span>登陆</span>
      <span>注册</span>
    </section>
   
  </div>
</template>
<script>
import axios from 'axios';
import func from '../../../vue-temp/vue-editor-bridge';

export default {
  name: 'login',
  data () {
    return {
      show: false, // 显示loading图

    }
  },
  methods: {
    // 拦截器
    // 用法2 添加token  用于 手机端的app ,用来代替 cookie
    // 同一个实例的拦截器 请求或响应多次时 则执行多次；
    reqForbid () {
      axios.interceptors.request.use((config) => {
        // 请求发出之前执行
        this.show = true;
        if (localStorage.getItem('token')) {
          config.headers['token'] = localStorage.getItem('token');
        }
        return config
      })
    },
    resForbid () {
      axios.interceptors.response.use((res) => {
        this.show = false;

        if (res.data.token) {
          localStorage.setItem('token', res.headers.token);
        }
        return res.config
      })
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .login{
    .login-btn{
      line-height: 50px;
      span{
        margin: 20px;
      }
    }    
  }
</style>
