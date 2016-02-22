// Live3d Route
Router.route('/live3d', {
  name: 'live3d',
  action: function () {
    this.render('live3d');
    SEO.set({ title: 'live3d - ' + Meteor.App.NAME });
  }
});
