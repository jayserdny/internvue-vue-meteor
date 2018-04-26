import 'intersection-observer';

import { Meteor } from 'meteor/meteor';
import CreateApp from './app';
import { Questions } from './api/collections';

Meteor.startup(() => {
  console.log("here")
  CreateApp({
    ssr: false,
  });
});
