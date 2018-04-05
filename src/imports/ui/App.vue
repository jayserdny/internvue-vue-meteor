<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import AppNav from "./Components/AppNav/AppNav.vue";

export default {
  name: 'app',
  meteor: {
    meteorUser() {
      this.$store.commit('updateUser', Meteor.user())
    }
  },
};
</script>

<style lang="less" src="style/main.less" />