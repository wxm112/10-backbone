var app = app || {}

// Kind of like the Rials router with embedded actions;
// Makes the application navigatable, with meaningful URLS.
app.AppRouter = Backbone.Router.extend ({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    var appView = new app.AppView({collection: app.blogPosts});
    appView.render();
  },

  viewPost: function (slug) {
    var post = app.blogPosts.get(slug);
    var postView = new app.PostView({model: post});
    postView.render();
  }
});
