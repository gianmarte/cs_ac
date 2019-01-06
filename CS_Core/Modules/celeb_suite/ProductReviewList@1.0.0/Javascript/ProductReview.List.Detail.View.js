/*
	Kodella Module
*/

//@module ProductReviewDetail
define(
	'ProductReview.List.Detail.View'
,	[	'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'SC.Configuration'
	,	'GlobalViews.StarRating.View'

	,	'productreview_details.tpl'

	,	'Backbone'
	,	'underscore'

	]
,	function (
		BackboneCompositeView
	,	BackboneCollectionView
	,	Configuration
	,	GlobalViewsStarRatingView

	,	productreview_details_tpl

	,	Backbone
	,	_

	)
{
	'use strict';

	//@class ProductReview.Detail.View List user's reviewed products @extend Backbone.View
	return Backbone.View.extend({

		template: productreview_details_tpl

	,	page_header: _('Review Details').translate()

	,	title: _('Review Details').translate()

	,	attributes: { 'class': 'ProductReviewDetailView' }

	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
		}

	,	childViews: {
		"ReviewDetail.Rating": function()
			{
				return new GlobalViewsStarRatingView({
					value: this.collection.rating
				,	showRatingCount: false
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
			return [
				{
					text: _('My Reviews').translate()
				,	href: '/reviewlist'
				}
			,	{
					text: "#" + this.collection.reviewid
				,	href: '/reviewlist/'+ this.collection.reviewid
				}
			];
		}
		//@method getContext @return {ProductReview.Detail.View.Context}
	,	getContext: function ()
		{
			var images = this.model.get('itemimages_detail'),
			firstImage = images.urls[0].url;

			//@class ProductReview.Detail.View.Context
			return {
				collection: this.collection
			,	model: this.model
			,	pageHeader: _('Review #$(0) Details').translate(this.collection.reviewid)
				//@property {Boolean} showBackToAccount
			,	showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD'
			,	image: firstImage
			,	itemid: this.model.get('itemid')
			,	displayname: this.model.get('storedisplayname2')
			,	reviewtitle: this.collection.reviewTitle
			,	reviewtext: this.collection.text
			}
		}
	});
});