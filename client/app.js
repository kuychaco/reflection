var Reflection = Backbone.Model.extend({});

var Reflections = Backbone.Firebase.Collection.extend({
  url: 'https://super-reflection.firebaseIO.com/reflections',
  model: Reflection
});