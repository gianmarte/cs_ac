/*
	Kodella Module
*/

// @module ProductReviewsList
// Handles the rendering of the different views depending on the URL route
define('Kodella.ProductReviewList.ProductReviewList.Router'
,	[
		'Kodella.ProductReviewList.ProductReviewList.Model'
	,	'Kodella.ProductReviewList.ProductReviewList.Collection'
    ,	'Kodella.ProductReviewList.ProductReviewList.List.View'
    ,	'Kodella.ProductReviewList.ProductReviewList.Detail.View'
    ,   'Profile.Model'
    ,   'Product.Model'

	,	'Backbone'
	,	'underscore'
	]
,	function (
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

            var listview = new ReviewListView({
                collection: reviewCollection,
                application: this.application
            });

            console.log("reviewCollection",reviewCollection);
			
			reviewCollection.fetch().done(function() {
				listview.showContent();
			});
        }
    ,   ProductReviewedDetails: function(id){
            
        }
    });
});
