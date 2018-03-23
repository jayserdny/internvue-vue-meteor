<template>
  <main>
    <AppNav />
    <router-view />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import AppNav from "./Components/AppNav/AppNav.vue";
import Cart from "./Cart.vue";

export default {
  components: {
    AppNav,
    Cart
  },

  computed: {
    ...mapGetters("layout", ["showCart"])
  }
};
</script>

<style lang="less" src="style/main.less" />