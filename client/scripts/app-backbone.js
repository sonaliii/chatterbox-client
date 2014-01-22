/*var Status = Backbone.Model.extend({
    url: '/status'
});

var Statuses = Backbone.Collection.extend({
    model: Status
});

var NewStatusView = Backbone.View.extend({
    events: {
        'submit form': 'addStatus'
    },

    initialize: function() {
        this.collection.on('add', this.clearInput, this);
    },

    addStatus: function(e) {
        e.preventDefault();

        this.collection.create({ text: this.$('textarea').val() });
    },

    clearInput: function() {
        this.$('textarea').val('');
    }
});

var StatusesView = Backbone.View.extend({
    initialize: function() {
        this.collection.on('add', this.appendStatus, this);
    },

    appendStatus: function(status) {
        this.$('ul').append('<li>' + status.escape('text') + '</li>');
    }
});

$(document).ready(function() {
    var statuses = new Statuses();
    new NewStatusView({ el: $('#new-status'), collection: statuses });
    new StatusesView({ el: $('#statuses'), collection: statuses });
});*/

var Message = Backbone.Model.extend({
  url: 'https://api.parse.com/1/classes/chatterbox/'
});

var Messages = Backbone.Collection.extend({
  model: Message
});

var NewMessageView = Backbone.View.extend({
  events: {
    'submit': 'addMessage'
  },

  initialize: function() {
    this.collection.on('add', this.clearInput, this);
  },

  addMessage: function(e) {
    e.preventDefault();

    this.collection.create({
      text: this.$('.textBox').val(),
      username: window.location.search.slice(10),
      roomname: $('.rooms').val()
    });
  },

  clearInput: function(){
    this.$('.textBox').val('');
  }
});

var MessagesView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', this.appendMessage, this);
  },

  appendMessage: function(message) {
    $(this.el).append('<div>' + message.get('text') + '</div>');
  }
});

$(document).ready(function() {
  var messages = new Messages();
  new NewMessageView({ el: $('.submitForm'), collection: messages});
  new MessagesView({ el: $('.display'), collection: messages});
});

















