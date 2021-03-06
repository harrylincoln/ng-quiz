module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('determineGroup', {
      url: '/',
      component: 'determineGroupComp'
    })
    .state('jimmy', {
      url: '/jimmy',
      component: 'jimmyComp'
    });
}
