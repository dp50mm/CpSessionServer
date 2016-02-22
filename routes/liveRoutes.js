// Live Route
Router.route('/live', {
  name: 'live',
  action: function () {
    this.render('live');
    SEO.set({ title: 'Live - ' + Meteor.App.NAME });
  }
});