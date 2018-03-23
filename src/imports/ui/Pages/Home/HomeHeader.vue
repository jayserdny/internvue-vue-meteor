<template>
  <header class="home-header full-height blue-bg">
      <div class="titles-wrap">
            <h1 class="white-text text-centered break">Get your internship, start today!</h1>
            <p class="text-centered white-text">Never feel anxious and clueless about your interview again!</p>
            <md-button class="md-raised md-small-hide rounded float-right green-bg white-text">
                  Press Enter To Start
            </md-button>
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

  .titles-wrap {
      position: relative;
      float: left;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

</style>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>