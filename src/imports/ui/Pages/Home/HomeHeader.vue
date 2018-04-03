<template>
  <header class="home-header full-height blue-bg">
    <div class="container w-100 h-100">
      <div class="row align-items-center h-100">
        <div class="col-md-12">
          <h1 class="white-text text-centered break margin-bottom">Land your Dream Internship – Start Today!</h1>
          <p class="text-centered white-text margin-bottom">Feel confident and prepared to ace your next interview!</p>
          <div class="justify-content-center align-content-center text-center">
            <!-- <button type="button" class="btn green-bg white-text">Press Enter To Start</button> -->
            <md-button class="md-raised rounded green-bg white-text text-centered">
              Press Enter To Start
            </md-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

  .break {
    line-height: 33px;
  }

  .full-height {
      height: 70vh;
  }

  .margin-bottom {
    margin-bottom: 25px;
  }

</style>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>