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

<div class="container justify-content-center align-content-center text-center">
  <div class="row">
    <div class="col">
    <iframe width="400" height="600" src="https://www.youtube.com/embed/0JQzRpPs0xM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div class="col ">
      <h6> Your Future is Shining.</h6>
      <p>Use our tool to help you get your dream internship</p>
      <md-button class="md-raised rounded green-bg white-text text-centered">
              Get Started
            </md-button>
    </div>
</div>  
</div>
<div class="jumbotron text-white">
    
    <p class="lead"><strong>2013, NACE reported that only 63 percent of graduating students who had held paid internships received a job offer by graduation.<br>It found that 60% of respondents in paid internships received at least one job offer. </strong></p>

    
</div>


</div>
</template>

<style lang="scss" scoped>
  
.offset-top {
    margin-top: 20px;
    margin-bottom: 50px;
  
  }

  p {
    font-family: "Times New Roman", Times, serif;
    font-size: 13px;
}

.row{
    overflow: hidden; 
}

[class*="col-"]{
    margin-bottom: -99999px;
    padding-bottom: 99999px;
}
  div {
    padding: 20px;
  }
  .jumbotron{
    background-color: #4daaf6;
    font-size: 20px;
    text-align: center;
    height: 200px;
  }
</style>

<script>
 
  export default {
    name: "HomeAboutPage",
  };
</script>