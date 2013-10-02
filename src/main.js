// Step 3

// var DrinkView = Backbone.View.extend({
//   initialize: function(options) {
//     this.name = options.name;
//   },
//   render: function () {
//     console.log('You should drink', this.name);
//   }
// });

// var sprite = new DrinkView({
//   name: 'Sprite'
// });
// sprite.render();

// var water = new DrinkView({
//   name: 'Water'
// });
// water.render();


// Step 4

// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>I don\'t do anything :(</button>');
//   }
// });

// var view = new ButtonView({
//   el: $(".bview")
// });
// view.render();


// Step 5

// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button><h1>Big Button</h1></button>');
//   }
// });

// var view = new ButtonView({
//   el: $('.big-button')
// });
// view.render();


// Step 6

// var stockTemplate = _.template('<b><%= name %>:</b> <%= price %>');
// var StockView = Backbone.View.extend({
//   className: 'stock-price',

//   initialize: function(options){
//     this.name = options.name;
//     this.price = options.price;
//   },
//   render: function(){
//     var newStockHtml = stockTemplate({ name: this.name, price: this.price });
//     $(this.el).html(newStockHtml);
//   }
// });

// var aapl = new StockView({
//   name: 'AAPL',
//   price: 380
// });

// console.log(aapl.el);

// aapl.render();
// $('.stocks').append(aapl.el);

// var goog = new StockView({
//   name: 'GOOG',
//   price: 800
// });
// goog.render();
// $('.stocks').append(goog.el);


// Step 7

// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({
//   className: 'dress',

//   initialize: function (options) {
//     this.color = options.color;
//     this.price = options.price;
//   },

//   render: function () {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//     $(this.el).html(newDressHtml);
//   }
// });

// var dressOne = new DressView({
//   color: 'green',
//   price: 14.99
// });
// var dressTwo = new DressView({
//   color: 'red',
//   price: 18.99
// });

// dressOne.render();
// dressTwo.render();
// $('body').append(dressOne.el);
// $('body').append(dressTwo.el);


// Step 8

// var buttonTemplateHtml = $('#templates .button').html();
// var buttonTemplate = _.template(buttonTemplateHtml);


// var ButtonView = Backbone.View.extend({
//   initialize: function(options){
//     this.buttontext = options.buttontext;
//   },
//   render: function () {
//     var newButtonHtml = buttonTemplate({ buttonText: this.buttontext });
//     $(this.el).html(newButtonHtml);
//   }
// });

// var buttonOne = new ButtonView({
//   buttontext: "This is button one!"
// });
// var buttonTwo = new ButtonView({
//   buttontext: "This is button two!"
// });
// buttonOne.render();
// buttonTwo.render();
// $('.buttons').append(buttonOne.el);
// $('.buttons').append(buttonTwo.el);


// Step 9

// var profileTemplate = _.template('<%= name %> (Age: <%= age %>)');

// var ProfileView = Backbone.View.extend({
//   initialize: function(options) {
//     this.name = options.name;
//     this.age = options.age;
//   },
//   render: function() {
//     var newProfileHtml = profileTemplate({ name: this.name, age: this.age});
//     $(this.el).html(newProfileHtml);
//   }
// });

// var profileView = new ProfileView({
//   name: 'Bob',
//   age: 45
// });

// profileView.render();
// $('body').append(profileView.el);


// Step 10

// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({

//   events: {
//     'click button.buy': 'purchase'
//   },

//   initialize: function (options) {
//     this.color = options.color;
//     this.price = options.price;
//   },

//   render: function () {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//     $(this.el).html(newDressHtml);
//   },

//   purchase: function () {
//     alert('You bought it for $' + this.price);
//   }
// });

// var dressOnSaleYo = new DressView({
//   color: 'burnt orange',
//   price: 59.99
// });
// dressOnSaleYo.render();
// $('body').append(dressOnSaleYo.el);


// Step 11

// var pingServer = _.extend({}, Backbone.Events);

// var StudentView = Backbone.View.extend({
//   initialize: function (options) {
//     this.name = options.name;
//   },

//   ping: function () {
//     pingServer.trigger('ping', this.name);
//   }
// });

// var InstructorView = Backbone.View.extend({
//   totalPings: 0,

//   initialize: function (options) {
//     this.listenTo(pingServer, 'ping', this.recordPop);
//     this.name = options.name;
//   },

//   recordPop: function (name) {
//     this.totalPings += 1;
//   }
// });

// var alice = new StudentView({ name: 'Alice' });
// var bob = new StudentView({ name: 'Bob' });
// var instructor = new InstructorView({ name: 'Dr. Professor' });

// alice.ping();
// alice.ping();
// console.log('Instructor should have 2 pings:', instructor.totalPings);
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// console.log('Instructor should have 7 pings:', instructor.totalPings);

