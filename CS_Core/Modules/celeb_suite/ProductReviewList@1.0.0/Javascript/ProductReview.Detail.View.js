/*
	Kodella Module
*/

//@module ProductReviewList
define(
	'ProductReview.Detail.View'
,	[	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'SC.Configuration'
	,	'GlobalViews.StarRating.View'
	,	'RecordViews.View'
	,	'ProductReview.Detail.Item.View'

	,	'productreview_details.tpl'
	,	'productreview_item.tpl'

	,	'Backbone'
	,	'underscore'
	,	'jQuery'
	,	'Utils'
	]
,	function (
		BackboneCompositeView
	,	BackboneCollectionView
	,	Configuration
	,	GlobalViewsStarRatingView
	,	RecordViewsView
	,	ProductReviewDetailItemView

	,	productreview_details_tpl
	,	productreview_item_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	//@class ProductReview.List.View List user's reviewed products @extend Backbone.View
	return Backbone.View.extend({

		template: productreview_details_tpl

	,	page_header: _('Review Details').translate()

	,	title: _('Review Details').translate()

	,	attributes: { 'class': 'ProductReviewDetailView' }

	,	initialize: function (options)
		{
			BackboneCompositeView.add(this);

			console.log("this.collection", this.collection);
			console.log("this.model", this.model);
		}

	,	childViews: {
			"ItemReviewed.Detail": function(){
				return new BackboneCollectionView({
					collection: this.model
				,	childView: ProductReviewDetailItemView
				,	cellTemplate: productreview_item_tpl
				,	viewsPerRow: 1
				,	childViewOptions:
					{
						application: this.application
					}
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
			,	href: '/reviewlist/'+ this.collection.reviewid
			};
		}
		//@method getContext @return {ProductReviewList.List.View.Context}
	,	getContext: function ()
		{
			//@class ProductReviewList.List.View.Context
			return {
				//@property {String} pageHeader
				pageHeader: this.page_header
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
			}
		}
	});
});