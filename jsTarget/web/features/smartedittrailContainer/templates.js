angular.module('smartedittrailContainerTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemTemplate.html',
    "<h2>AB Analytics</h2>\n" +
    "<p>This is a dummy toolbar item used to demonstrate functionality.</p>\n"
  );


  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemWrapperTemplate.html',
    "<ab-analytics-toolbar-item></ab-analytics-toolbar-item>"
  );


  $templateCache.put('web/features/smartedittrailContainer/trailPage/trailPageTemplate.html',
    "<!-- To contain the top toolbar (and make it look SmartEdit like ) -->\r" +
    "\n" +
    "<div class=\"se-toolbar-group\">\r" +
    "\n" +
    "    <toolbar data-css-class=\"se-toolbar--shell\"\r" +
    "\n" +
    "             data-image-root=\"imageRoot\"\r" +
    "\n" +
    "             data-toolbar-name=\"smartEditHeaderToolbar\"></toolbar>\r" +
    "\n" +
    "    <toolbar data-css-class=\"se-toolbar--perspective\"\r" +
    "\n" +
    "             data-toolbar-name=\"trailToolbar\"></toolbar>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!-- The actual content of the page -->\r" +
    "\n" +
    "<div class=\"se-landing-page\">\r" +
    "\n" +
    "    <br><br>\r" +
    "\n" +
    "    Trail Page\r" +
    "\n" +
    "</div>"
  );

}]);
