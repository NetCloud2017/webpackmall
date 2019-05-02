<template>
  <div :class="[ position === 'center'?dailog_view : default_view]">
    <transition name="dailog">
      <slot>
        empty
      </slot>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'dialog',
  props: {
    position: {
      type: 'string',  // center  default
      default: 'center'
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .dailog_view {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0; 
    margin: auto;
  }
</style>

