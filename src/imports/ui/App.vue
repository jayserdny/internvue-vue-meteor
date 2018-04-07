<template>
  <transition name="fade">
    <router-view />
  </transition>
</template>


<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>

<script>
  import { Meteor } from 'meteor/meteor';

  export default {
    name: 'app',
    meteor: {
      meteorUser() {
        this.$store.commit('updateUser', Meteor.user())
      }
    },
  };
</script>