// List View, it will create as child view a collection of Edit Views.

define('Kodella.MyProductReview.MyProductReview.List.View'
,	[	
		'GlobalViews.Pagination.View'
	,	'GlobalViews.ShowingCurrent.View'
	,	'Backbone.CompositeView'
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
		GlobalViewsPaginationView
	,	GlobalViewsShowingCurrentView
	,	BackboneCompositeView
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

		,	'GlobalViews.Pagination': function ()
			{
				return new GlobalViewsPaginationView({
					totalPages: Math.ceil(this.model.get('totalRecordsFound') / this.model.get('recordsPerPage'))
				});
			}
		,	'GlobalViews.ShowCurrentPage': function ()
			{
				return new GlobalViewsShowingCurrentView({
					items_per_page: this.model.get('recordsPerPage')
				,	total_items: this.model.get('totalRecordsFound')
				,	total_pages: Math.ceil(this.model.get('totalRecordsFound') / this.model.get('recordsPerPage'))
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
			console.log("Configuration.defaultPaginationSettings", Configuration.defaultPaginationSettings);
			//@class ProductReviewList.List.View.Context
			return {
				//@property {String} pageHeader
				pageHeader: this.page_header
				//@property {Boolean} hasProductReviewed
			,	hasProductReviewed: this.collection.length > 0
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
			,	showPagination: !!(this.model.get('totalRecordsFound') && this.model.get('recordsPerPage'))
			}
		}
	});
});