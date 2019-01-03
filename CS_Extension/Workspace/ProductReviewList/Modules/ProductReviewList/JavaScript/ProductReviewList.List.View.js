/*
	Kodella Module
*/

//@module ProductReviewList
define(
	'Kodella.ProductReviewList.ProductReviewList.List.View'
,	[	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'SC.Configuration'
	//,	'ProductReviewList.Detail.View'
	,	'GlobalViews.Confirmation.View'

	,	'productreview_list.tpl'
	,	'backbone_collection_view_cell.tpl'
	,	'backbone_collection_view_row.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		BackboneCompositeView
	,	BackboneCollectionView
	,	Configuration
	//,	ReviewDetailsView
	,	GlobalViewsConfirmationView

	,	productreview_list_tpl
	,	backbone_collection_view_cell_tpl
	,	backbone_collection_view_row_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	//@class ProductReview.List.View List user's reviewed products @extend Backbone.View
	return Backbone.View.extend({

		template: productreview_list_tpl

	,	page_header: _('All Product Reviews').translate()

	,	title: _('My Prodcut Reviews').translate()

	,	attributes: { 'class': 'ProductReviewListView' }

	,	events: {
			'click [data-action="remove"]': 'removeAddress'
		}

	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
			var self = this;
			this.collection.on('reset sync add remove change destroy', function ()
			{
				self.collection.sort();
				self.render();
			});
		}

	,	childViews: {
			'ProductReviews.Collection': function ()
			{
				return new BackboneCollectionView(
				{
					childView: ReviewDetailsView
				,	collection: this.collection
				,	viewsPerRow: Configuration.get('itemsPerRow', 2)
				,	cellTemplate: backbone_collection_view_cell_tpl
				,	rowTemplate: backbone_collection_view_row_tpl
				});
			}
		}

		//@method getSelectedMenu
	,	getSelectedMenu: function ()
		{
			return 'reviewlist';
		}
		//@method getBreadcrumbPages
	,	getBreadcrumbPages: function ()
		{
			return {
				text: this.title
			,	href: '/reviewlist'
			};
		}
		//@method getContext @return {Address.List.View.Context}
	,	getContext: function ()
		{
			console.log("this.collection.length > 0", this.collection.length > 0);
			console.log("this.collection.length", this.collection.length);
			//@class Address.List.View.Context
			return {
				//@property {String} pageHeader
				pageHeader: this.page_header
				//@property {Boolean} hasProductReviewed
			,	hasProductReviewed: this.collection.length > 0
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
			};
		}
	});
});