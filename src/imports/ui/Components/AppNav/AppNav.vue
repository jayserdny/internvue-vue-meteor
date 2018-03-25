<template>
  <div>
    <md-toolbar md-elevation="1.5" class="md-primary transparent-bg fixed-header paddings">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title"><strong>InternClue</strong></span>

      <div class="md-toolbar-section-end">
        <md-button class="md-small-hide" @click="showSidepanel = true">About us</md-button>
        <md-button class="md-small-hide" @click="showSidepanel = true">How does it work</md-button>
        <md-button class="md-small-hide" @click="showSidepanel = true">Intern Stories</md-button>
        <div class="md-small-hide vertical-separator"></div>
        <md-button class="md-small-hide" @click="showDialog = true">Sign in</md-button>
        <md-button class="md-raised md-small-hide rounded green-bg white-text">New Start</md-button>
      </div>
      
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-fixed>
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
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
      showDialog: false
    })
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
</style>