/*
	Kodella Module
*/

// @module ProductReviewsList
// Handles the rendering of the different views depending on the URL route
define('ProductReviewList.Router'
,	[
		'ProductReviews.Model'
	,	'ProductReviewList.Collection'
    ,	'ProductReview.List.View'
    ,	'ProductReview.Detail.View'
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

            var reviewCollection = new Collection;

            var listview = new ReviewListView({
                collection: reviewCollection,
                application: this.application
            });

            console.log("reviewCollection",reviewCollection);
            
            listview.showContent();
        }
    ,   ProductReviewedDetails: function(id){
            
        }
    });
});