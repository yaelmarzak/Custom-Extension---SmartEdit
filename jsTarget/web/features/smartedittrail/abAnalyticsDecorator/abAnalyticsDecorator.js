/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
angular.module('abAnalyticsDecoratorModule', ['smartedittrailTemplates', 'ui.bootstrap', 'pascalprecht.translate', 'abAnalyticsDecoratorControllerModule'])
    .directive('abAnalyticsDecorator', function() {
        return {
            templateUrl: 'abAnalyticsDecoratorTemplate.html',
            restrict: 'C',
            transclude: true,
            replace: false,
            controller: 'abAnalyticsDecoratorController',
            controllerAs: '$ctrl',
            bindToController: {
                smarteditComponentId: '@',
                smarteditComponentType: '@',
                smarteditProperties: '@',
                active: '<'
            }
        };
    });
