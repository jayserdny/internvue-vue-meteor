import Vue from 'vue';
import { Meteor } from 'meteor/meteor';
import NotFound from './ui/NotFound.vue';
import App from './ui/app/App.vue';
import Home from './ui/Pages/Home/Home.vue';
import Landing from './ui/Pages/Landing/landing.vue';
<<<<<<< HEAD
import Option from './ui/Pages/Option/option.vue';
=======
import QuestionsBank from './ui/app/QuestionsBank/QuestionsBank.vue';
import Example from './ui/Example/Example.vue';
>>>>>>> UI/Improvements

/**
 * Method to track meteor user to load corresponding pages
 * @param {String} type: Type of the page
 * @param {Object} ob: Object with name of the page
 * @param {Event} next: Emitter for Vue Router
 */
function track_user(type, ob, next) {
  if (type === "home") {
    if (Meteor.user()) {
      next(ob)
    } 
    else {
      next()
    }
  }

  else if (type === "app") {
    if (Meteor.user()) {
      next()
    } else {
      next(ob)
    }
  }
}

export default [
  { 
    path: '/', 
    name: 'home', 
    component: Landing,
  },
  { 
    path: '/app', 
    name: 'app', 
    component: App,
  },
<<<<<<< HEAD

  { 
    path: '/get-started', 
    name: 'option', 
    component: Option,
    
  },

=======
  {
    path: '/example',
    name: 'example',
    component: Example
  },
  {
    path: '/app/questions-bank',
    name: 'questions-bank',
    component: QuestionsBank
  },
  {
    path: '*',
    component: NotFound
  }
>>>>>>> UI/Improvements
]
