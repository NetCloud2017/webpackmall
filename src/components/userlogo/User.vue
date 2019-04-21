<template>
  <div class="user">
    <section  class="user-box">
      <div class="userlogo">
        <img :src="require('../../assets/images/logo.jpg')" alt="">
      </div>
      <div class="user_name"><span>网民hacker</span></div>
    </section>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" rel="stylesheet/less"  scoped>
  .user{
    .user-box{
      display: flex;
      align-items: center;
      .userlogo{
        width: 50px;
        height: 50px;
        background: #eae;
        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .user_name{
        color: #fff;
        margin-left: 15px;
      }
    }
  }
</style>
