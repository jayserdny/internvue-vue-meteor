<template>
  <div class="container justify-content-center align-content-center text-center">
    <div class="row offset-top">
      <div class="col-12">
        <p><strong>Our users have got internship programs at</strong></p>
      </div>
    </div>
    <div class="row black-white">
      <div class="col-sm custom-padding">
        <img alt="Microsoft" height="38" 
             src="https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/brands/microsoftlogo.svg?1459843129" 
             width="175"
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="jQuery" height="28" 
             src="https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/brands/jquery.svg?1459843129" 
             width="128" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="RBS" height="28" 
             src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/rbslogo.svg?1459843129" 
             width="95" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="Air BnB" height="37" 
             src="https://d3but80xmlhqzj.cloudfront.net/production/images/static/brands/airbnblogo.svg?1459843129" 
             width="110" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="MIT" height="39" 
             src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/mitlogo.svg?1459843129" 
             width="70" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="Bose" height="26" 
             src="https://d3but80xmlhqzj.cloudfront.net/production/images/static/brands/boselogo.svg?1459843129" 
             width="156" 
        />
      </div>
      <div class="col-sm custom-padding">
        <img alt="Wikipedia" height="27" 
             src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/wikipedia_wordmark.svg?1459843129" 
             width="161" 
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .offset-top {
    margin-top: 20px;
  }

  .custom-padding {
    padding: 19px 15px 0;
    vertical-align: middle;
  }

  .black-white {
    img {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    }

  }
</style>

<script>
  export default {
    name: "HomeSponsors"
  };
</script>