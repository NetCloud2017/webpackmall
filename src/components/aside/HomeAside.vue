<template>
  <div class="tree-view-item">
    <div v-for="(menu , index) in menus" :key="index">
      <div v-if="menu.type == 'link' ">
        <router-link class="link" :to="menus.url" @click.native="toggle(menu)">{{menu.name}}</router-link>
      </div>
      <div 
        v-if="menu.type === 'button'"
        :class="{selected:menu.isSelected, expand:menu.isExpanded}"
        @click="toggle(menu)"
      >
        {{menu.name}}
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24">
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z "></path>
          </svg>
        </div>
      </div>
      <transition name="fade">
        <div class="heading-children" v-show="menu.isExpanded" v-if="subMenu">
         <HomeAside :menus="menus.subMenus"></HomeAside>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props: ["menus"],
  data () {
    return {
      // menus: this.$store.homeNav.state.menus
    }
  },
  created() {
    this.$store.commit("firstInit", { url: this.$route.path });
  },
  methods: {
    toggle(menu) {
      this.$store.commit("findParents", { menu });
    }
  },
  mounted () {
    console.log(this.menus)
  },
  computed: {
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
a {
  text-decoration: none;
  color: #333;
}
.link,
.button {
  display: block;
  padding: 10px 15px;
  transition: background-color 0.2s ease-in-out 0s, color 0.3s ease-in-out 0.1s;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.button {
  position: relative;
}
.link:hover,
.button:hover {
  color: #1976d2;
  background-color: #eee;
  cursor: pointer;
}
.icon {
  position: absolute;
  right: 0;
  display: inline-block;
  height: 24px;
  width: 24px;
  fill: currentColor;
  transition: -webkit-transform 0.15s;
  transition: transform 0.15s;
  transition: transform 0.15s, -webkit-transform 0.15s;
  transition-timing-function: ease-in-out;
}
.heading-children {
  padding-left: 14px;
  overflow: hidden;
}
.expand {
  display: block;
}
.collapsed {
  display: none;
}
.expand .icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.selected {
  color: #1976d2;
}
.fade-enter-active {
  transition: all 0.5s ease 0s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-to {
  height: 0;
}
</style>
