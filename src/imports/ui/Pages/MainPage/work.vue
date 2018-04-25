<template>
  <div>
    <div class="wrapper">
      <!-- Sidebar Holder -->
      <nav id="sidebar" :class="{'active': (menu_show == true) }">
        <div class="sidebar-header">
          <i class="ti-angle-left" href="" hspace="5px"></i> 
          <p>Questions & Answers Building</p>
        </div>
        <div class ="sidenav-icons">
          <img src="/images/icons/checklist1.png" height="40px;" width="40px" hspace="15"/><!--*******-->
          <img src="/images/icons/folder.png" height="40px;" width="40px" />
        </div>
        <ul class="list-unstyled components">
          <li>
            <a href="#traditionalSubmenu" data-toggle="collapse" aria-expanded="false">
              Traditional &nbsp;&nbsp;
            </a>
            <ul class="collapse list-unstyled" id="traditionalSubmenu">
              <li>
                <a href="#">Tell me about yourself?</a>
              </li>
              <!-- should be query for questions -->
              <li>
                <a href="#">What did you do at your last internship?</a>
              </li>
              <li>
                <a href="#">How did you do at School?</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#behaviouralSubmenu" data-toggle="collapse" aria-expanded="false">
              Behavioral &nbsp;&nbsp;
            </a>
            <ul class="collapse list-unstyled" id="behaviouralSubmenu">
              <li>
                <a href="#">Describe your ability to adapt to new or changing technologies and/or systems.</a>
              </li>
              <!-- should be query for questions -->
              <li>
                <a href="#">Describe a situation when you demonstrated initiative.</a>
              </li>
              <li>
                <a href="#">How do you juggle multiple priorities? What methods do you use to make sure nothing falls through the cracks and to minimize mistakes?</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#IndustrySubmenu" data-toggle="collapse" aria-expanded="false">
              Choose your Industry &nbsp;&nbsp;
            </a>
            <ul class="collapse list-unstyled" id="IndustrySubmenu">
              <li>
                <a href="#">Finance</a>
              </li>
              <!-- should be query for Industries -->
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Information Technology</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- Page Content Holder -->
      <div id="content" :class="{'active': menu_show }">
        <nav class="navbar navbar-default navbar-expand-lg h6-nav-bar">
          <div class="container-fluid">
            <div class="navbar-header">
              <button  v-on:click="toggleMenu()" type="button" id="sidebarCollapse" class="btn btn-light navbar-btn">
                <span class="ti-align-justify"></span>
              </button>
            </div>
            <div class="float-right ml-auto navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="navbar-nav ml-auto">
                <li>
                  <a href="#">Log In</a>
                </li>
              </ul>
              <div class="act-buttons">
                  <button class="btn btn-success-gradiant waves-effect waves-light font-13" data-toggle="modal" data-target="#loginModal">
                    Sign Up
                  </button>
              </div>
            </div>
          </div>
        </nav>
        <p><strong>Choose a category from left side</strong>
         <i class="fa fa-bookmark" style="font-size:24px; color:white; margin-left: 20px;"></i></p>
       <div id="tips" >
        <i class="ti-info-alt" lable ="Need Tips"></i>
       </div>

       <div class="footer"><i class="ti-angle-up" href="" hspace="1px"></i>
       <p>write your response</p>
       </div>
      </div>
    </div>
  </div>
</template>
<style scoped> 
  
  p {
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #fff;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }
  .navbar {
    padding: 15px 10px;
    background: #263238;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
  }
  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
    background: transparent;
    
  }
  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }
  #sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #263238;
    color: #fff;
    transition: all 0.3s;
    overflow-y: scroll;
    
  }
  #sidebar.active {
    margin-left: -250px;
  }
  #sidebar .sidebar-header {
    padding: 20px;
    background: #263238;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
  }

  #sidebar .sidebar-header:hover {
    color: #32c6a6;
    background: #263238;
  }
  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 2px solid #263238;
  }
  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }
  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }
  #sidebar ul li a:hover {
    color: #8FBC8F;
    background: #263238;
  }
  a[data-toggle="collapse"] {
    position: relative;
  }
  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #263238;
  }
  ul.CTAs {
    padding: 20px;
  }
  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .sidenav-icons{
    margin-inline-start: 30px;
    margin-bottom: 10px;
  }
  
  /* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
  #content {
    width: calc(100% - 250px);
    padding: 30px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #425058;
    color: #fff;
    text-align: center;
  }
  #content.active {
    width: 100%;
  }

  .navbar {
    background-color: transparent;
  }

 #tips{
  position: fixed;
  right: 0;
  top: 50%;
  width: 8em;
  margin-top: -2.5em;
}
 
  /* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #content {
      width: 100%;
    }
    #content.active {
      width: calc(100% - 250px);
    }
  }

  .footer{ 
      position: absolute;    
       text-align: center;    
       bottom: 0px; 
       width: 100%;
   }  
</style>
<script>
  export default {
    data: () => {
      return {
        menu_show: false
      }
    },
    methods: {
      
      toggleMenu() {
        console.log("got here")
        this.menu_show = !this.menu_show;
      }
    }
  };
</script>