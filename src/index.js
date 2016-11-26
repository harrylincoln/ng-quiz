var angular = require('angular');

var hello = require('./app/hello');
var jimmy = require('./app/jimmy');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello)
  .component('jimmy', jimmy);
