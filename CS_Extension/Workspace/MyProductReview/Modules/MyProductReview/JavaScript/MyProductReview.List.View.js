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
	,	'Kodella.MyProductReview.MyProductReview.List.Cell.View'

	,	'productreview_list.tpl'
	,	'productreview_detail_cell.tpl'

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
	,	ListCellView

	,	productreview_list_tpl
	,	productreview_detail_cell_tpl

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
			
		}
	,	childViews: {
			'ProductReviews.Collection': function ()
			{
				var reviews_collection = new Backbone.Collection(this.collection.map(function (reviews)
				{
					return new Backbone.Model(
					{
						touchpoint: 'customercenter'
					,	title: _('$(0)').translate(reviews.get('itemname'))
					,	detailsURL: '#/reviewlist/' + reviews.get('reviewid')
					,	internalid: reviews.get('reviewid')
					,	rating: reviews.get('rating')
					,	columns: [
							{
								label: _('Title').translate()
							,	type: 'review-title'
							,	name: 'review-title'
							,	value: reviews.get('reviewTitle')
							}
						,	{
								label: _('Date Published').translate()
							,	type: 'date-published'
							,	name: 'date-published'
							,	value: reviews.get('created')
							}
						]
					});
				}));

				return new BackboneCollectionView(
				{
					childView: ListCellView
				,	collection: reviews_collection
				,	viewsPerRow: 1
				});
			}
		,		'GlobalViews.Pagination': function ()
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