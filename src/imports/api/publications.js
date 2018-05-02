import { Meteor } from 'meteor/meteor'
import { Notes, Items, Questions } from './collections'

Meteor.publish('notes', function (limit) {
  return Notes.find({}, {
    sort: { created: -1 },
    limit,
  })
})

Meteor.publish('items', function () {
  return Items.find({})
})

Meteor.publish('users', () => {
  return Meteor.users.find({});
});

Meteor.publish('questions', () => {
  return Questions.find();
});