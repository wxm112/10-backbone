// Kind of like the Rials router with embedded actions;
// Makes the application navigatable, with meaningful URLS.
var AppRouter = Backbone.Router.extend ({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    var appView = new AppView({collection: blogPosts});
    appView.render();
  },

  viewPost: function (slug) {
    var post = blogPosts.get(slug);
    var postView = new PostView({model: post});
    postView.render();
  }
});
