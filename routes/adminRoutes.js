// Admin Route
Router.route('/admin', {
  name: 'admin',
  action: function () {
    this.render('admin');
    SEO.set({ title: 'Admin - ' + Meteor.App.NAME });
  }
});