<template>
  <div class="home">
    <AppNav />
    <HomeHeader class="home-bg parallax" />
    <HomeSponsors class="white-bg padding-bottom "  />
    <hr class="container" />
    <br />
    <HomeAboutPage />
    <HomeTeam />
    <HomeFooter />
  </div>
</template>

<style lang="css" scoped>

  .home-bg {
    background: linear-gradient(0deg, #2196f3d9, #2196f3d9), url(http://csreduhub.com/wp-content/uploads/2017/01/columbia_university_wallpaper.jpg);
  }
  .full-width {
    width: 100%;
    height: 100%;
  }

  .move-padding {
    margin-top: 64px;
  }

  .padding-bottom {
    padding-bottom: 15px;
  }
  #left{
    float: left;
    margin-right: 40px;
}
#right{
   float: left;
}
.home{
  background-color: #ffffff;
}
</style>

<script>
  import AppNav from "../../Components/AppNav/AppNav.vue";
  import HomeHeader from './HomeHeader.vue';
  import HomeSponsors from './HomeSponsors.vue';
  import HomeFooter from './HomeFooter.vue';
  import HomeAboutPage from './HomeAbout.vue';
  import HomeHow from './HomeHow.vue';
  import HomeTracks from './HomeTracks.vue';
  import HomeMajors from './HomeMajors.vue';
  import HomeTeam from './HomeTeam.vue';

  export default {
    name: "HomePage",
    components: {
      AppNav,
      HomeTeam,
      HomeHeader,
      HomeSponsors,
      HomeFooter,
      HomeAboutPage,
      HomeHow,
      HomeTracks,
      HomeMajors
    }
  };
</script>