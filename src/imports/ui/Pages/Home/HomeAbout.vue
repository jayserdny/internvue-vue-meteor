<template>
  <section>   
    <div class="container justify-content-center align-content-center text-center">
      <div class="row offset-top">
        <div class="col-12">
          <h6 class="gray-text"><strong>OUR AMAZING USER STORIES</strong></h6>
          <br />
          <blockquote class="blockquote">
            <p class="mb-0 text-center">
              "It's ok to ask the interviewer for clarification for or <br>to repeat the question.You want to know what the interviewer is 
              looking for before you go ahead and assume you know the answer."
            </p>
            <br />
            <footer class="blockquote-footer text-right">Tip from Kevin K., <cite title="Source Title">Bank of America Intern 2017</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="container justify-content-center">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0JQzRpPs0xM" allowfullscreen></iframe>
            </div>
            <div class="card-body">
              <p class="card-text">Hear our users talking about their stories.</p>
            </div>
          </div>
        </div>
        <div class="col-sm my-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, quam non finibus feugiat, ante diam porttitor urna, quis vehicula est 
          lacus vulputate augue. Pellentesque lacus augue, elementum sed ultrices id, semper sed purus. Mauris laoreet odio ex, sed scelerisque nisi 
          lacinia eu. Etiam rhoncus augue quis sapien pulvinar, sit amet vestibulum nunc imperdiet. Praesent ac nisl quis lacus dictum pulvinar id 
          facilisis ligula. Aliquam ipsum neque, varius vitae diam quis, elementum maximus quam. Maecenas pharetra arcu ante, eu porta ante dapibus sed.</p>
        </div>
      </div>  
    </div>
    <br />
    <div class="jumbotron jumbotron-fluid text-white">
      <div class="container paddings-top-bottom">
        <h4>Why are internships so important? </h4> 
        <br />
        <blockquote class="blockquote">
          <p class="mb-0 text-center">
            "Graduates who complete three or more internships are more likely to secure full-time employment, with 81.1 percent of graduates reporting that the 
            internships helped them shift their career directions."
          </p>
          <br />
          <footer class="blockquote-footer text-right text-white">Sharp’s 2016 <cite title="Source Title">State of Millennial Hiring Report</cite></footer>
        </blockquote>
      </div>
    </div>
  </section>
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

  .jumbotron {
    background-color: #4daaf6;
    font-size: 20px;
    text-align: center;
    padding: 30px;
    font-style: bold;
    margin-top: 30px;
  }
  
  .card-body {
    background-color: #fbfbfb;
  }

  .paddings-top-bottom {
    padding-top: 2%;
    padding-bottom: 2%;
  }
</style>

<script>
export default {
  name: "HomeAboutPage"
};
</script>