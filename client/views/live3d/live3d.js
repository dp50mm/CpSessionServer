var table3dView;
Session.set('data_loaded', false);
Meteor.subscribe('markerStore', function(){
     //Set the reactive session as true to indicate that the data have been loaded
     Session.set('data_loaded', true);
     //table3dView.load();
     console.log('data model ready on host')
});

Template['live3d'].helpers({
    'description': function () {
        return 'live 3d view';
    }
});

Template['live3d'].events({
});

Template['live3d'].onCreated(function () {
  
});

Template['live3d'].onRendered(function () {
    table3dView = new T3D.Renderer();
    table3dView.animate();
});

Template['live3d'].onDestroyed(function () {
    
});