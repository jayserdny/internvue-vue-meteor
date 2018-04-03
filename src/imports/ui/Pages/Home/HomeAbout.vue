<template>
  <div> 
    
  <div class="container justify-content-center align-content-center text-center">
    <div class="row offset-top">
      <div class="col-12">
        <h6><strong>OUR AMAZING USER STORIES</strong></h6>
        <P class="lead">It's ok to ask the interviewer for clarification for or <br>to repeat the question.You want to know what the interviewer is looking for before you go ahead and assume you know the answer.</P>
        <p class="text-right">-Tip from Kevin, Bank of America Intern 2017</p>
</div>
</div>
</div>
<div class="container justify-content-center text-center">
  <div class="row ">
    <div class="col" style= "height:350px;">
      <div class="h_iframe">
    <iframe src="https://www.youtube.com/embed/0JQzRpPs0xM"  allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    </div>
    <div class="col text-left align-content-center padding:30px;">
      <h6>Your future is shining. <br>Make it happen with our tool </h6>
      <md-button class="md-raised rounded green-bg white-text text-centered">
              Get Started
            </md-button>
    </div>
</div>  
</div>
<div class="jumbotron jumbotron-fluid text-white">
  <div class="container">
    <h4>Why are internships so important? </h4> 
 <p class="lead"><strong>Graduates who complete three or more internships are more likely to secure full-time employment, with 81.1 percent of graduates reporting that the internships helped them shift their career directions.
 </strong></p>
 <p class="text-right">-Sharp’s 2016 State of Millennial Hiring Report</p>

</div>
</div>

</div>
</template>

<style lang="scss" scoped>
.offset-top {
  margin-top: 30px;
  margin-bottom: 0px;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}
div {
  padding: 15px;
  margin-block-start: 10px;
}
.jumbotron {
  background-color: #4daaf6;
  font-size: 20px;
  text-align: center;
  height: 200px;
  padding: 30px;
  font-style: bold;
  margin-top: 30px;
}
.h_iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 350px;
}
</style>

<script>
export default {
  name: "HomeAboutPage"
};
</script>