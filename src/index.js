// require library from node_modules
var angular = require('angular');

// declare services
// var StepsService = require('./app/services/StepsService.js');

// declare components
var determineGroup = require('./app/components/determine-group/determine-group.js');
var jimmy = require('./app/components/jimmy/jimmy.js');

// routing
require('angular-ui-router');
var routesConfig = require('./routes');

// sass
require('./index.scss');

// main app
var app = 'app';
module.exports = app;

// component calls
angular
  .module(app, ['ui.router'])
  // .service('StepsService', StepsService)
  .config(routesConfig)
  .component('determineGroupComp', determineGroup)
  .component('jimmyComp', jimmy);
