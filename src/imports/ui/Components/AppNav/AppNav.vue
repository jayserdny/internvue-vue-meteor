<template>
  <div v-on:scroll="handleScroll">
    <md-toolbar md-elevation="0" 
                :class="{'md-primary':true, 'md-transparent':(scroll < 500), 'fixed-header': true, 'paddings': true, 'header-hack': true}">

      <md-button class="md-icon-button text-white" @click="showNavigation = true">
        <md-icon class="text-white">menu</md-icon>
      </md-button>
      <span class="md-title text-white"><strong>PrepDecks</strong></span>

      <div class="md-toolbar-section-end">
        <md-button class="md-small-hide" @click="showSidepanel = true">About us</md-button>
        <md-button class="md-small-hide" @click="showSidepanel = true">How does it work</md-button>
        <md-button class="md-small-hide" @click="showSidepanel = true">Intern Stories</md-button>
        <div class="md-small-hide vertical-separator"></div>
        <md-button class="md-small-hide" v-if="user">Profile</md-button>
        <md-button class="md-small-hide" v-else @click="showDialog = true">Sign in</md-button>
        <md-button class="md-raised md-small-hide rounded">Who's Hiring</md-button>
      </div>
      
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-fixed class="drawer-hack">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Welcome Back!</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="Sign In">
          <form @submit.prevent="submitForm">
            <label>username</label>
            <input type="text" v-model="formData.username" />
            <label>password</label>
            <input type="password" v-model="formData.password" />
            <button>Login</button>
          </form>
        </md-tab>

        <md-tab md-label="Sign Up">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          </md-tab>
      </md-tabs>

      <!-- <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions> -->
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'AppNav',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      showDialog: false,
      formData: {
        username: '',
        password: ''
      },
      scroll: 0,
      shadow: 0
    }),
    computed: {
      user() {
        return this.$store.state.auth.user
      }
    },
    methods: {

      /**
       * @method submitForm
       * Method to submit the login form and push another route to the router,
       * after sucess. Otherwise, user should know what happened.
       */
      submitForm() {
        this.$store.dispatch('submitLoginForm', this.formData).then(data => {
          if (data.status == true) {
            this.showDialog = false;
            this.$router.push({ name: "app"});
          }
        })
      },

      /**
       * @method handleScroll
       * Method to watch scroll of the view
       */
      handleScroll() {
        this.scroll = window.scrollY;
        if (this.scroll > 500) {
          this.shadow = 2;
        }

        else if (this.scroll < 500) {
          this.shadow = 0
        }
      },
    },

    /**
     * Method that runs before the component is mount.
     * This should be done since window scope is not available at server,
     * so, it needs to wait before mounting it. This method will add the event
     * listener for the scroll.
     */
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },

    /**
     * Method to remove scroll listener before the component is destroyed.
     */
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" scoped>

  .vertical-separator {
    margin-left: 21px;
    border-left: 1px solid rgb(255, 255, 255);
    height: 19px;
  }

  .md-button, .md-button-clean {
    text-transform: capitalize;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }

  .header-hack {
    z-index: 99998;
  }

  .drawer-hack {
    z-index: 99999;
  }
</style>