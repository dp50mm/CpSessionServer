Meteor.publish('markerStore', function () {
  return markerStore.find();
});
