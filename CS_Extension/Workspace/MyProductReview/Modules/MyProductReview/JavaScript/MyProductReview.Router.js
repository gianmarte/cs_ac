// @module module_dep_name
define('Kodella.MyProductReview.MyProductReview.Router'
,	[
		'Kodella.MyProductReview.MyProductReview.Model'
	,	'Kodella.MyProductReview.MyProductReview.Collection'
	,	'Kodella.MyProductReview.MyProductReview.List.View'
	,	'Kodella.MyProductReview.MyProductReview.Detail.View'
	,   'Profile.Model'
	,   'Product.Model'

	,	'Backbone'
	,	'underscore'
	]
,	function 
	(
		ReviewsModel
	,	Collection
	,	ReviewListView
	,	ReviewDetail
	,   ProfileModel
	,   ProductModel

	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Router.extend({
		routes:
		{
			'reviewlist': 'ProductReviewedList',
			'reviewlist/:id': 'ProductReviewedDetails'
		}
	,   initialize: function(Application)
		{
			this.application = Application;
			this.profileModel = ProfileModel.getInstance();
		}
	,   ProductReviewedList: function()
		{
			if (this.profileModel.get('isLoggedIn') !== 'T')
			{
				return this.application.getLayout().notFound();
			}

			var reviewCollection = new Collection();
			var reviewModel = new ReviewsModel();

			var listview = new ReviewListView({
				collection: reviewCollection,
				application: this.application,
				model: reviewModel
			});
			
			reviewCollection.fetch().done(function() {
				reviewModel.fetch().done(function() {
					listview.showContent();
				});
			});
		}
	,   ProductReviewedDetails: function(id)
		{
			if(this.profileModel.get('isLoggedIn') !== 'T')
			{
				return this.application.getLayout().notFound();
			}

			var product = new ProductModel();
			var collection = new Collection();
			var item = product.get('item');
			var self = this;

			collection.fetch().done(function() 
			{

				for(var i = 0; i < collection.models.length; i++)
				{
					if(id == collection.models[i].attributes.reviewid)
					{
						var review_details = collection.models[i].attributes;

						item.fetch({data: {id: collection.models[i].attributes.itemid}}).done(function() 
						{   
							var detailview = new ReviewDetail({
								application: self.application
							,   collection: review_details
							,   model: item
							});
							detailview.showContent();
						});
					}
				}
				
			});
		}
	});
});
