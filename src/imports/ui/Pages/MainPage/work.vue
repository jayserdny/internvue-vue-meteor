<template>
  <div>
    <div class="wrapper">
      <!-- Sidebar Holder -->
      <nav id="sidebar" :class="{'active': (menu_show === true) }">
        <div class="sidebar-header">
          <router-link tag="i" class="ti-angle-left back-button" :to="{name: 'option'}" hspace="5px"></router-link>
          <p>Questions & Answers Building</p>
        </div>
        <hr />
        <div class="sidenav-icons" id="myTab" role="tablist">
          <a @click="selectTab('questions');" href="#" >
            <img src="/images/icons/checklist1.png" height="40px;" width="40px" hspace="15" />
          </a>
          <a @click="selectTab('saved');" href="#">
            <img src="/images/icons/folder.png" height="40px;" width="40px" />
          </a>
        </div>
        <hr />
        <div class="tab-content">

          <!-- QUESTIONS TAB -->
          <div :class="{'tab-pane': true, 'show': (selected_tab === 'questions'), 'active': (selected_tab === 'questions')}">
            <ul class="list-unstyled components">
              <!-- TRADITIONAL QUESTIONS AREA START -->
              <li>
                <a @click="toggle_dropdown('traditional')" href="#" aria-expanded="true">
                  Traditional &nbsp;&nbsp;
                </a>
                <ul :class="{'collapse': true, 'list-unstyled': true, 'show': (traditional_show === true)}">
                  <li v-for="(question, index) in traditional_questions" v-bind:key="question._id">
                    <a @click="chooseQuestion(question)" href="#" :class="{'selected': (display_message == question.question)}">
                      {{ index + 1 }}.&nbsp;&nbsp;{{ question.question }}
                    </a>
                  </li>
                </ul>
              </li>

              <!-- TRADITIONAL QUESTIONS AREA END -->

              <!-- BEHAVIORAL QUESTIONS AREA START -->
              <li>
                <a @click="toggle_dropdown('behavioral')" href="#" aria-expanded="true">
                  Behavioral &nbsp;&nbsp;
                </a>
                <ul :class="{'collapse': true, 'list-unstyled': true, 'show': (behavioral_show === true)}">
                  <li v-for="(question, index) in behavioral_questions" v-bind:key="question._id">
                    <a @click="chooseQuestion(question)" href="#" :class="{'selected': (display_message == question.question)}">
                      {{ index + 1 }}.&nbsp;&nbsp;{{ question.question }}
                    </a>
                  </li>
                </ul>
              </li>
              <!-- BEHAVIORAL QUESTIONS AREA END -->

              <!-- INDUSTRY AREA START -->
              <li>
                <a @click="toggle_dropdown('industry')" href="#" aria-expanded="true">
                  Choose your Industry &nbsp;&nbsp;
                </a>
                <ul :class="{'collapse': true, 'list-unstyled': true, 'show': (industry_show === true)}">
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
              <!-- INDUSTRY AREA END -->
            </ul>
          </div>
          <!-- QUESTIONS TAB END -->

          <!-- SAVED TAB START -->
          <div :class="{'tab-pane': true, 'appear': (selected_tab == 'saved'), 'show': (selected_tab == 'saved'), 'active': (selected_tab == 'saved')}">
            WIP
          </div>
          <!-- SAVED TAB END -->
        </div>

      </nav>

      <!-- Page Content Holder -->
      <div id="content" :class="{'active': menu_show }">
        <nav class="navbar navbar-default navbar-expand-lg h6-nav-bar">
          <div class="container-fluid">
            <div class="navbar-header">
              <button v-on:click="toggleMenu()" type="button" id="sidebarCollapse" class="btn navbar-btn">
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
        <p>
          <strong class="appear">{{ display_message }}</strong>
          <i class="fa fa-bookmark" style="font-size:24px; color:white; margin-left: 20px;"></i>
        </p>
        <p v-if="selected_question !== null && answer !== null && answer !== ''">
          <strong class="answer-place">Answer:&nbsp;&nbsp;&nbsp;</strong>{{ answer }}
        </p>
        <div id="tips">
          <i class="ti-info-alt" lable="Need Tips"></i>
        </div>

        <div class="footer">
          <p v-if="selected_question !== null">
            <textarea rows="7" cols="80" v-model="answer" v-on:change="autoSave();" placeholder="Write your answer here"></textarea>
          </p>
          <i class="ti-angle-up" href="" hspace="1px"></i>
          <p>write your response</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .answer-place {
    color: #02eba8 !important;
  }

  .selected {
    font-weight: 600;
  }

  hr {
    background-color: rgba(125, 125, 125, 0.52);
  }

  p {
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #fff;
  }

  .back-button {
    margin-top: -13px;
    margin-right: 8px;
    margin-left: -10px;
    font-size: 36px;
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
    width: 320px;
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
    margin-left: -320px;
  }

  #sidebar .sidebar-header {
    padding: 20px 20px 0 20px;
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
    padding: 0 20px 20px 20px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    color: #8fbc8f;
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

  .sidenav-icons {
    margin-inline-start: 30px;
    margin-bottom: 10px;
  }

  #content {
    width: calc(100% - 320px);
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

  #tips {
    position: fixed;
    right: 0;
    top: 50%;
    width: 8em;
    margin-top: -2.5em;
  }

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -320px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #content {
      width: 100%;
    }
    #content.active {
      width: calc(100% - 320px);
    }
  }

  .footer {
    position: absolute;
    text-align: center;
    bottom: 0px;
    width: 100%;
  }

  .list-unstyled .show {
    li {
      opacity: 0;
      animation: fadeIn 0.3s ease-in both;
    }
  }

  .appear {
    opacity: 0;
    animation: fadeIn 0.3s ease-in both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -2%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>

<script>
  import { Meteor } from "meteor/meteor";
  import { Questions } from "../../../api/collections";

  export default {

    // Variables to initialize on created event of the component
    created() {
      (this.CHOOSE_CATEGORY = "Choose a category from left side"),
        (this.CHOOSE_QUESTION = "Now choose a question from the left side");
    },
    

    // Instance variables of the component
    data: () => {
      return {
        traditional_questions: [],
        behavioral_questions: [],
        menu_show: false,
        traditional_show: false,
        behavioral_show: false,
        industry_show: false,
        display_message:
          "Choose a category from left side" || this.CHOOSE_CATEGORY,
        is_category_selected: false,
        selected_tab: "questions",
        selected_question: null,
        answer: null
      };
    },

    // Methods of the component
    methods: {

      /**
       * Method to autosave answer without any user interaction
       * @method autoSave
       * @return void
       */
      autoSave() {
        let answer = {
          id: this.selected_question._id,
          answer: this.answer
        };
        localStorage.setItem(this.selected_question._id, JSON.stringify(answer));
      },

      /**
       * Method to switch between questions and saved questions
       * @method selectTab
       * @param {String} tab: Name of the tab to selected
       * @return void
       */
      selectTab(tab) {
        this.selected_tab = tab;
      },

      /**
       * Method to choose question from sidebar
       * @method chooseQuestion
       * @param {Object} question: Choosen Question
       */
      chooseQuestion(question) {
        this.display_message = question.question; // Update the correct displayed message
        this.selected_question = question; // Save a reference of the selected object

        if (localStorage.getItem(question._id)) {
          this.answer = JSON.parse(localStorage.getItem(question._id)).answer;
        }
        
        else {
          this.answer = null;
        }
      },

      /**
       * Method to toggle menu
       * @method toggleMenu
       * @return void
       */
      toggleMenu() {
        this.menu_show = !this.menu_show;
      },

      /**
       * Method to toggle dropdown and hide oppened ones
       * @method toggle_dropdown
       * @param {String} item: reference to the dropdown being opened
       * @return void
       */
      toggle_dropdown(item) {
        if (item === "traditional") {
          if (this.traditional_show === true) {
            this.traditional_show = false;
            this.is_category_selected = false;
            this.display_message = this.CHOOSE_CATEGORY;
            this.selected_question = null;

          } else {
            this.display_message = this.CHOOSE_QUESTION;
            this.traditional_show = true;
            this.behavioral_show = false;
            this.industry_show = false;
            this.is_category_selected = true;
          }

        } else if (item === "behavioral") {

          if (this.behavioral_show === true) {
            this.behavioral_show = false;
            this.is_category_selected = false;
            this.display_message = this.CHOOSE_CATEGORY;
            this.selected_question = null;

          } else {
            this.display_message = this.CHOOSE_QUESTION;
            this.behavioral_show = true;
            this.traditional_show = false;
            this.industry_show = false;
            this.is_category_selected = true;
          }

        } else if (item === "industry") {

          if (this.industry_show === true) {
            this.industry_show = false;
            this.is_category_selected = false;
            this.display_message = this.CHOOSE_CATEGORY;
            this.selected_question = null;

          } else {
            this.display_message = this.CHOOSE_QUESTION;
            this.industry_show = true;
            this.behavioral_show = false;
            this.traditional_show = false;
            this.is_category_selected = true;
          }
        }
      }
    },

    // Meteor specific methods
    meteor: {
      // Subscribe to the reactive publication of question
      // posted on server side
      $subscribe: {
        questions() {
          return [];
        }
      },

      // Query the traditional question from server side
      // and propagate them to an array
      traditional_questions() {
        return Questions.find({ type: "traditional" });
      },

      // Query the behavioral question from server side
      // and propagate them to an array
      behavioral_questions() {
        return Questions.find({ type: "behavioral" });
      }
    }
  };
</script>