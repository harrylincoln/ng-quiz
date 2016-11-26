function StepsService($http) {
  var API = "/interactives-endpoint/";
    // betty.com/interactives/part-1
    this.getInteractiveGroup = function (pageURL) {

        return $http
        .get(API + pageURL)
        .then(function (response) {
            return response.data;
        }, function (reason) {
            // console.log('there was an error, oh shite');
        });
    };
}
