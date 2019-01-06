/*
	Kodella Module
*/

//@module ProductReviewList
define(
	'ProductReview.List.View'
,	[	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'SC.Configuration'
	,	'GlobalViews.StarRating.View'
	,	'RecordViews.View'

	,	'productreview_list.tpl'

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

	,	productreview_list_tpl

	,	Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	//@class ProductReview.List.View List user's reviewed products @extend Backbone.View
	return Backbone.View.extend({

		template: productreview_list_tpl

	,	page_header: _('My Reviews').translate()

	,	title: _('My Reviews').translate()

	,	attributes: { 'class': 'ProductReviewListView' }

	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
			var self = this;
		}

	,	childViews: {
			'ProductReviews.Collection': function ()
			{
				var reviews_collection = new Backbone.Collection(this.collection.map(function (reviews)
				{
					return new Backbone.Model({
						touchpoint: 'customercenter'
					,	title: _('$(0)').translate(reviews.get('reviewid'))
					,	detailsURL: '#/reviewlist/' + reviews.get('reviewid')
					,	internalid: reviews.get('reviewid')
					,	columns: [
							{
								label: _('Review Title').translate()
							,	type: 'review-title'
							,	name: 'review-title'
							,	value: reviews.get('reviewTitle')
							}
						,	{
								label: _('Rating').translate()
							,	type: 'rating'
							,	name: 'rating'
							,	value: reviews.get('rating')
							}
						,	{
								label: _('Review Date').translate()
							,	type: 'review-date'
							,	name: 'review-title'
							,	value: reviews.get('created')
							}
						]
					});
				}));

				return new BackboneCollectionView(
				{
					childView: RecordViewsView
				,	collection: reviews_collection
				,	viewsPerRow: 1
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
		//@method getContext @return {ProductReviewList.List.View.Context}
	,	getContext: function ()
		{
			//@class ProductReviewList.List.View.Context
			return {
				//@property {String} pageHeader
				pageHeader: this.page_header
				//@property {Boolean} hasProductReviewed
			,	hasProductReviewed: this.collection.length > 0
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
			}
		}
	});
});