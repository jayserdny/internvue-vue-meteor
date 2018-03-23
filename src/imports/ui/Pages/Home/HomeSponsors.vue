<template>
      <div class="white-bg offset-top">
            <!-- <p class="left-30 gray-text padding-top ">
                  <strong>Our users have got internship programs at</strong>
            </p> -->

            <section class="brands ">
                  <div class="container">
                        <div class="row">
                              <div class="col-xs-12 text-center">
                                    <p><strong>Our users have got internship programs at</strong></p>
                              </div>
                        </div>
                  </div>
                  <ul class="brand-logos text-center ">
                        <li>
                              <img alt="Microsoft" height="38" 
                                   src="https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/brands/microsoftlogo.svg?1459843129" 
                                   width="175">
                        </li>

                        <li>
                              <img alt="jQuery" height="28" 
                                   src="https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/brands/jquery.svg?1459843129" 
                                   width="128">
                        </li>
                  
                        <li class="hide-xs hide-sm hide-md">
                              <img alt="Twitter" height="55" 
                                   src="https://d98b8t1nnulk5.cloudfront.net/production/images/static/brands/twitterlogo.svg?1459843129"
                                    width="60">
                        </li>

                        <li class="hide-xs">
                              <img alt="RBS" height="28" 
                                   src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/rbslogo.svg?1459843129" 
                                   width="95">
                        </li>

                        <li class="hide-xs">
                              <img alt="Air BnB" height="37" 
                                   src="https://d3but80xmlhqzj.cloudfront.net/production/images/static/brands/airbnblogo.svg?1459843129" 
                                   width="110">
                        </li>

                        <li>
                              <img alt="MIT" height="39" 
                                   src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/mitlogo.svg?1459843129" 
                                   width="70">
                        </li>
                  
                        <li class="hide-xs hide-sm hide-md">
                              <img alt="Bose" height="26" 
                                   src="https://d3but80xmlhqzj.cloudfront.net/production/images/static/brands/boselogo.svg?1459843129" 
                                   width="156">
                        </li>
                        <li class="hide-xs hide-sm hide-md">
                              <img alt="Wikipedia" height="27" 
                                   src="https://dgzoq9b5asjg1.cloudfront.net/production/images/static/brands/wikipedia_wordmark.svg?1459843129" 
                                   width="161">
                        </li>
                  </ul>
            </section>
      </div>
</template>

<style lang="scss" scoped>

h3 {
  font-size: 32px !important;
  line-height: 35px !important;
}

.brands h3, .hero-unit .button-section a {
  font-weight: 400;
}

.col-xs-12 {
  width: 100%;
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-13, .col-lg-14, .col-lg-15, .col-lg-16, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-13, .col-xl-14, .col-xl-15, .col-xl-16, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    float: left;
    padding-left: 10px;
    padding-right: 10px;
}

ul, menu, dir {
  display: block;
  list-style-type: disc;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}

.brand-logos {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

.brand-logos li {
  display: inline-block;
  padding: 19px 25px 0;
  vertical-align: middle;
}
.text-center {
  text-align: center;
}
.full-height {
  height: 20vh;
}

.offset-top {
  margin-top: -14px;
}

.padding-top {
  padding-top: 15px;
  padding-bottom: 15px;
}

.white-bg {
  background-color: #ffffff !important;
}

.fifty-img {
  width: 50% !important;
}

.center-wrap {
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: "HomeSponsors"
};
</script>