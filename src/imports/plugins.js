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

// Vue Material Design
import VueMaterial from 'vue-material/dist/vue-material.min.js';
Vue.use(VueMaterial);


// Vue Js Google Maps
import VueGoogleMaps from 'vue-googlemaps'
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyCV908coKxEB_GcWuGucl79Zy_rIG4GQSI',
    libraries: ['places'],
  },
})

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
