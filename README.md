# InternVue Vue 2 + Vuex + Meteor Stack

#### Pre requisites 
- You need to have NPM installed in your dev machine. You can follow this tutorial to install it [Install NPM](https://www.npmjs.com/get-npm)
- You need to have Meteor CLI installed. You can follow the steps in the following page [Install Meteor](https://www.meteor.com/install)

#### Installation
There are few steps to get this project running. 

1 - Clone this repo ```https://github.com/jayserdny/internvue-vue-meteor```
2 - In the console, navigate to the folder where you did cloned the repo.
3 - Inside project folder, run the following command to install dependecies: ```meteor npm i```

#### How to run

Here are the commands to run the project depending on what build you want to get.

Dev build: ```meteor```
Prod build: ```meteor --production```

#### Side effects

Due to the 'HMR' (Hot Module Replacement), the project will load CSS after loading scripts for a faster compilation during development. It may cause some flickering or broken style while loading the website. However, this behavior does not happen in a production build (not ```meteor --production``` since HMR is also included but a production release build).

#### Code style

Please keep your code organized and readable. Also, please do leave comments in your code, so, others contributors can understand your work.

In addition, write modularized code. For instance, if you will write a code that will be used in so many pages, you can write it into a component and pass props so same code can be reused in all the pages needed.

#### Project structure

- public // Public assets can be included here
- src
  - imports
  - api // Backend code lives here
    - store // Vuex store for state managment
    - supply // Vuex suppy for state managment
    - ui // All related UI components
      - Components // Reusable components go here
      - Pages // Pages goes here
      - style // main styles goes here
      - App.vue // Vue app is wrapped here
    - app.js // App initializer 
    - client.js // Meteor related code to run in SSR mode
    - filters.js // Filters such as moment js can be included here globally
    - plugins.js // Vue plugins to be used
    - routes.js // All the routes/urls of the application
    - server.js // Meteor code to server side rendering the application
  - index.html // Initial file where Vue is bootstraped
  - index.js // Meteor code to determine where is the project running (Server or client)