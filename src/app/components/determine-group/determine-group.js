module.exports = {
  template: require('./determine-group.html'),
  controller: function () {
    this.hello = "yo, this is the determine page";
    // // by $window.url
    // var stepURL = 'interactive/step-1';

    // StepsService
    //     .getInteractiveGroup(stepURL)
    //     .then(function(response) {
    //         ctrl.datResponse = response;
    //     });
  }
};
