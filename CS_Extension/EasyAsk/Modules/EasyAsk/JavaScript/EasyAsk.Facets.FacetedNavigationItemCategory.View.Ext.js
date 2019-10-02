define('Kodella.EasyAsk.EasyAsk.Facets.FacetedNavigationItemCategory.View.Ext'
	, [
		'Categories.Utils'
		, 'SC.Configuration'
		, 'Facets.FacetedNavigationItemCategory.View'

		, 'facets_faceted_navigation_item_category.tpl'
		, 'kodella_easyask_facets_faceted_navigation_item_category.tpl'

		, 'Backbone'
		, 'Backbone.CompositeView'
		, 'underscore'
	]
	, function (
		CategoriesUtils
		, Configuration
		, FacetedNavigationItemCategory

		, facets_faceted_navigation_item_category_tpl
		, kodella_easyask_facets_faceted_navigation_item_category_tpl

		, Backbone
		, BackboneCompositeView
		, _
	) {
		'use strict';

		// @class Facets.FacetedNavigationItemCategory.View @extends Backbone.View
		return FacetedNavigationItemCategory.extend({

			template: kodella_easyask_facets_faceted_navigation_item_category_tpl
			
			// @method getContext @return {Facets.FacetedNavigationItemCategory.View.Context}
		,	getContext: function () {
				var showFacet = this.categories.length
					, values = []
					, self = this
					, showMax = Configuration.get('categories.sideMenu.showMax')
					, uncollapsible = Configuration.get('categories.sideMenu.uncollapsible')
					, collapsed = Configuration.get('categories.sideMenu.collapsed');

				_.each(this.categories, function (category) {
					if (category.fullurl === self.categoryUrl) {
						values.push({
							displayName: category.name
							, label: category.name
							, link: category.fullurl
							, isActive: category.fullurl === self.categoryUrl
							, additionalFields: CategoriesUtils.getAdditionalFields(category, 'categories.sideMenu.additionalFields')
						});
					}
				});

				console.log("this.model.get('breadcrumb')", this.model.get('breadcrumb'));

				var max = showMax || values.length
					, displayValues = _.first(values, max)
					, extraValues = _.rest(values, max);

				var breadcrumb = this.model && (this.model.get('breadcrumb') || [])
					, parentName = '';

				if (breadcrumb && breadcrumb.length) {
					var parentsName = [];

					_.each(breadcrumb, function(parent, index)
					{
						console.log("index", index);

						if(index < breadcrumb.length - 1)
						{
							parent.index = index;
							parentsName.push(parent);
						}
					});
				}

				console.log("parentsName", parentsName);

				// @class Facets.FacetedNavigationItemCategory.View.Context
				return {
					//@property {String} htmlId
					htmlId: _.uniqueId('commercecategory_')
					// @property {String} facetId
					, facetId: 'commercecategory'
					// @property {Boolean} showFacet
					, showFacet: !!showFacet
					//@property {Array<Object>} values
					, values: values
					// @property {Array<Object>} displayValues
					, displayValues: displayValues
					//@property {Array<Object>} extraValues
					, extraValues: extraValues
					//@property {Boolean} showExtraValues
					, showExtraValues: !!extraValues.length
					//@property {Boolean} isUncollapsible
					, isUncollapsible: !!uncollapsible
					//@property {Boolean} isCollapsed
					, isCollapsed: !uncollapsible && collapsed
					//@property {String} parentName
					, parentName: parentsName
					// @class Facets.FacetedNavigationItemCategory.View
				};
			}
		});

	});