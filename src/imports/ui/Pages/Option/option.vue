<template>
  <!-- HERO HEADER -->
  <div id="option" class="full-height option-bg parallax">
    <div class="container">
      <!--Navbar -->
        <!-- Image and text -->
          <nav class="navbar navbar-light bg-transparent">
            <a class="navbar-brand text-white" href="#">
              <img src="" width="30" height="30" class="d-inline-block align-top" alt="">
              <strong>PrepDecks</strong>
              </a>
              <div class="justify-content-right align-content-right text-right margin-10px">
                <!-- Dashboard-->
                <a class="btn btn-success-gradiant btn-sm m-t-30 text-black " data-toggle="collapse">
                  <span>DashBoard </span>
                </a>
              </div>
          </nav>
             <!-- Row  -->
            <div class="row justify-content-center">
              <!-- Column -->
              <div id="headline" class="col-md-12 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                <h4 class="subtitle op-8 text-white">Your future is shining – Choose a tool to make it happen!</h4>
                </div>  
              </div>
            <!-- wrapper -->
              <div class="wrapper justify-content-left align-middle text-middle">
                
                 <router-link :to="{name: 'work'}" tag="div">
                  <img src="/images/optionImages/question.png" height="100px" alt="question" align="left" hspace="20" />
                  <h4><strong> Questions Bank </strong></h4>
                  <p><strong>Explore traditional, behavioral, and industry-specific interview questions </strong></p>
                   </router-link>
                  
                <div>
                  <img src="/images/optionImages/lightBulb.png" height="100px" align="left" hspace="20" />
                  <h4>
                    <strong> Tips </strong>
                  </h4>
                  <p>
                    <strong>Gain insights from our guidance on interviews and particular questions</strong>
                  </p>
                </div>
                <div>
                  <img src="/images/optionImages/chartGuy.png" height="100px" align="left" hspace="20" />
                  <h4>
                    <strong> Interview PrepDecks </strong>
                  </h4>
                  <p>
                    <strong>Create Customized company PrepDecks</strong> </p>
           </div>
         </div>
      </div>
    </div>
</template>


<style lang="css" scoped>
.option-bg {
  background: linear-gradient(#2196f3d9, #2196f3d9, transparent),
    url(/images/covers/hero.jpg);
}

.full-height {
  height: 100vh;
}

p {
  font-size: 13px;
}

img {
  margin-left: -0.1em;
  margin-top: -0.1em;
}

.wrapper {
  display: grid;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.wrapper > div {
  border: 2px solid #cac6c1;
  border-radius: 5px;
  background-color: #fff;
  padding-top: -0.5em;
  padding-left: -1em;
  color: black;
  margin: 15px;
  height: 100px;
}

#headline {
  margin-top: 80px;
}
</style>

<script>
export default {
  name: "Option"

};
  </script>