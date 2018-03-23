import Vue from 'vue'

import NotFound from './ui/NotFound.vue'
import Home from './ui/Pages/Home/Home.vue'
import Items from './ui/Items.vue'
import Notes from './ui/Notes.vue'
import GoogleMap from './ui/GoogleMap.vue'
import Async from './ui/Async.vue'
import About from './ui/About.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/shop', name: 'shop', component: Items },
  { path: '/notes', name: 'notes', component: Notes, meta: { showCart: true } },
  { path: '/map', name: 'map', component: GoogleMap },
  { path: '/async', name: 'async', component: Async },
  { path: '/about', name: 'about', component: About },
  { path: '*', name: 'not-found', component: NotFound },
]
