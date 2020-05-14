angular.module('smartedittrailTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/smartedittrail/abAnalyticsDecorator/abAnalyticsDecoratorContentTemplate.html',
    "<div>\n" +
    "    <p>\n" +
    "        <strong>{{ $ctrl.smarteditComponentId | limitTo:16 }}{{ $ctrl.smarteditComponentId.length > 16 ? '...' : ''}}</strong>\n" +
    "    </p>\n" +
    "    <p>{{ $ctrl.smarteditComponentType | limitTo:16 }}{{ $ctrl.smarteditComponentType.length > 16 ? '...' : ''}}</p>\n" +
    "    <p>{{ $ctrl.abAnalytics }}</p>\n" +
    "</div>"
  );


  $templateCache.put('web/features/smartedittrail/abAnalyticsDecorator/abAnalyticsDecoratorTemplate.html',
    "<div>\n" +
    "    <div class=\"row\" data-uib-popover-template=\"$ctrl.contentTemplate\" data-popover-title=\"{{$ctrl.title}}\" data-popover-placement=\"'top'\" data-popover-trigger=\"'mouseenter'\">\n" +
    "        <div data-ng-transclude></div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
