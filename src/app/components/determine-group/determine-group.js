module.exports = {
    template: require('./determine-group.html'),
    controller: function(StepsService) {
        var ctrl = this;
        ctrl.hello = 'Hello World!';

        // by $window.url
        var stepURL = 'interactive/step-1';

        StepsService
            .getInteractiveGroup(stepURL)
            .then(function(response) {
                ctrl.datResponse = response;
            });
    }
};
