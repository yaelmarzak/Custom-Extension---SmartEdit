import * as angular from 'angular';

// This creates an AngularJS module called trailPageModule.
export const trailPageModule = angular.module('trailPageModule', [])

	// The AngularJS recipe specifies a new component called trailPage that will display the new page.
	// It can be used in the markup of other parts of the application using <trail-page>.
	.component('trailPage',

		{
			// This property specifies the name of the file that contains the markup used to render the new page.
			templateUrl: 'trailPageTemplate.html',

			// This property specifies the controller of the new page. It can be used to add custom behavior to the page.
			controller: (toolbarServiceFactory: any, alertService: any) => {
				'ngInject';


				const toolbarService = toolbarServiceFactory.getToolbarService('trailToolbar');

				// This piece of code adds a button, called trail.button.
				toolbarService.addItems([{
					type: 'ACTION',
					key: 'trail.button',
					nameI18nKey: 'Trail',

					// This is the callback function that will be executed when the toolbar button is clicked.
					callback: () => {
						alertService.showInfo("Hello from the trail");
					},
					iconClassName: 'icon-duplicate se-toolbar-menu-ddlb--button__icon',
				}]);
			}
		});
