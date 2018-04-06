<template>
  <div class="container margin-bottom:10px">
    <div class="row offset-top">
      <div class="col-12">
        <p class="gray-text"><strong>Our users have landed internship programs at</strong></p>
      </div>
    </div>
    <div class="row justify-content-center align-content-center text-center">
      <div class="col-sm custom-padding">
        <img alt="Jp Morgan and Chase" height="50" 
             src="https://www.paxata.com/wp-content/uploads/morgan-chase-logo.png" 
             width="100"
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="OgiIvy" height="50" 
             src="http://www.hispanicprblog.com/wp-content/uploads/2011/10/ogilvy-logo.png" 
             width="128" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="The Met" height="100" 
             src="http://logok.org/wp-content/uploads/2015/01/The-Met-Logo-2016-640x480.png" 
             width="100" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="Lincoln Center" height="100" 
             src="https://assets.themuse.com/uploaded/companies/28/small_logo.png?v=11318d072beb58da0e5e51cdb10859a339453745ea5f6e063f67e7a0b712266c" 
             width="130" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="Bank of America" height="100" 
             src="http://diylogodesigns.com/blog/wp-content/uploads/2016/08/Bank-of-America-Logo-vector-png-download.png" 
             width="150" 
        />
  
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .offset-top {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .custom-padding {
    padding: 19px 15px 0;
    vertical-align: middle;
    margin-bottom: 20px;
  }

  .black-white {
    img {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }

  }
</style>

<script>
  export default {
    name: "HomeSponsors"
  };
</script>