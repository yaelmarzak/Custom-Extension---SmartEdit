/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
import {doImport} from './forcedImports';
doImport();
import {IFeatureService, SeModule, SeRouteService} from 'smarteditcommons';
import {trailPageModule} from './trailPage/trailPage';
/**
 * @ngdoc overview
 * @name smartedittrailContainer
 * @description
 * Placeholder for documentation
 */
@SeModule({
	imports: [
		'smarteditServicesModule',
		'abAnalyticsToolbarItemModule',
		trailPageModule.name
	],
	config: ($routeProvider: angular.route.IRouteProvider) => {
		'ngInject';

		SeRouteService.init($routeProvider);
		SeRouteService.provideLegacyRoute({
			path: '/trail',
			route: {
				template: '<trail-page></trail-page>'
			},
			priority: 1,
			titleI18nKey: 'Trail Page'
		});

	},

	initialize: (featureService: IFeatureService) => {
		'ngInject';
		////////////////////////////////////////////////////
		// Create Toolbar Item
		////////////////////////////////////////////////////
		// Create the toolbar item as a feature.
		featureService.addToolbarItem({
			toolbarId: 'smartEditPerspectiveToolbar',
			key: 'abAnalyticsToolbarItem',
			type: 'HYBRID_ACTION',
			nameI18nKey: 'ab.analytics.toolbar.item.name',
			priority: 2,
			section: 'left',
			iconClassName: 'icon-message-information se-toolbar-menu-ddlb--button__icon',
			include: 'abAnalyticsToolbarItemWrapperTemplate.html'
		});
	}

})
export class SmartedittrailContainer {}
