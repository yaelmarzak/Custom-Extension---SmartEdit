!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,__webpack_require__),a.l=!0,a.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)__webpack_require__.d(r,a,function(t){return e[t]}.bind(null,a));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(e,t,r){e.exports=r(10)(1)},function(e,t,r){e.exports=r(3)(0)},function(e,t){e.exports=angular},function(e,t){e.exports=vendor_chunk},function(e,t,r){var a={"./services/abAnalyticsService.js":5,"./templates.js":6};function webpackContext(e){var t=webpackContextResolve(e);return r(t)}function webpackContextResolve(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}webpackContext.keys=function webpackContextKeys(){return Object.keys(a)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=4},function(e,t){angular.module("abAnalyticsServiceModule",[]).service("abAnalyticsService",["$q",function(e){this.getABAnalyticsForComponent=function(){return e.when({aValue:30,bValue:70})}}])},function(e,t){},function(e,t,r){var a={"./abAnalyticsToolbarItem/abAnalyticsToolbarItem.js":8,"./templates.js":9};function webpackContext(e){var t=webpackContextResolve(e);return r(t)}function webpackContextResolve(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}webpackContext.keys=function webpackContextKeys(){return Object.keys(a)},webpackContext.resolve=webpackContextResolve,e.exports=webpackContext,webpackContext.id=7},function(e,t){angular.module("abAnalyticsToolbarItemModule",["smartedittrailContainerTemplates"]).component("abAnalyticsToolbarItem",{templateUrl:"abAnalyticsToolbarItemTemplate.html"})},function(e,t){angular.module("smartedittrailContainerTemplates",[]).run(["$templateCache",function(e){"use strict";e.put("web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemTemplate.html","<h2>AB Analytics</h2>\n<p>This is a dummy toolbar item used to demonstrate functionality.</p>\n"),e.put("web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemWrapperTemplate.html","<ab-analytics-toolbar-item></ab-analytics-toolbar-item>"),e.put("web/features/smartedittrailContainer/trailPage/trailPageTemplate.html",'\x3c!-- To contain the top toolbar (and make it look SmartEdit like ) --\x3e\r\n<div class="se-toolbar-group">\r\n    <toolbar data-css-class="se-toolbar--shell"\r\n             data-image-root="imageRoot"\r\n             data-toolbar-name="smartEditHeaderToolbar"></toolbar>\r\n    <toolbar data-css-class="se-toolbar--perspective"\r\n             data-toolbar-name="trailToolbar"></toolbar>\r\n</div>\r\n\r\n\x3c!-- The actual content of the page --\x3e\r\n<div class="se-landing-page">\r\n    <br><br>\r\n    Trail Page\r\n</div>')}])},function(e,t){e.exports=smarteditcommons},function(e,t,r){"use strict";r.r(t);var a=r(1);function importAll(e){e.keys().forEach(function(t){e(t)})}var o=r(0),n=r(2).module("trailPageModule",[]).component("trailPage",{templateUrl:"trailPageTemplate.html",controller:["toolbarServiceFactory","alertService",function(e,t){"ngInject";e.getToolbarService("trailToolbar").addItems([{type:"ACTION",key:"trail.button",nameI18nKey:"Trail",callback:function(){t.showInfo("Hello from the trail")},iconClassName:"icon-duplicate se-toolbar-menu-ddlb--button__icon"}])}]});r.d(t,"SmartedittrailContainer",function(){return i}),function doImport(){importAll(r(4)),importAll(r(7))}();var i=function(){function SmartedittrailContainer(){}return SmartedittrailContainer=a.__decorate([Object(o.SeModule)({imports:["smarteditServicesModule","abAnalyticsToolbarItemModule",n.name],config:["$routeProvider",function(e){"ngInject";o.SeRouteService.init(e),o.SeRouteService.provideLegacyRoute({path:"/trail",route:{template:"<trail-page></trail-page>"},priority:1,titleI18nKey:"Trail Page"})}],initialize:["featureService",function(e){"ngInject";e.addToolbarItem({toolbarId:"smartEditPerspectiveToolbar",key:"abAnalyticsToolbarItem",type:"HYBRID_ACTION",nameI18nKey:"ab.analytics.toolbar.item.name",priority:2,section:"left",iconClassName:"icon-message-information se-toolbar-menu-ddlb--button__icon",include:"abAnalyticsToolbarItemWrapperTemplate.html"})}]})],SmartedittrailContainer)}()}]);