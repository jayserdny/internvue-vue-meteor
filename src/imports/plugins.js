import Vue from 'vue'

// Vue Js Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue Js State Management
import Vuex from 'vuex'
Vue.use(Vuex)

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true
console.log('tracker installed')

import vueScrollto from 'vue-scrollto';
Vue.use(vueScrollto, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -90,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Vue Js Suppy
import VueSupply from 'vue-supply'
Vue.use(VueSupply)

// Vue Js Observe Visibility
import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

// Filters such as moment js
import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}
