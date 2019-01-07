// List View, it will create as child view a collection of Edit Views.

define('Kodella.MyProductReview.MyProductReview.List.Cell.View'
,	[	
		'Backbone.CompositeView'
	,	'GlobalViews.StarRating.View'

	,	'productreview_detail_cell.tpl'

	,	'Backbone'
    ,	'underscore'
    
	]
,	function (
		BackboneCompositeView
	,	GlobalViewsStarRatingView

	,	productreview_detail_cell_tpl

	,	Backbone
	,	_

	)
{
	'use strict';

	//@class ProductReview.List.View List user's reviewed products @extend Backbone.View

	return Backbone.View.extend({

		template: productreview_detail_cell_tpl

	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
        }
    
	,	childViews: {
            "ReviewList.Rating": function()
            {
                return new GlobalViewsStarRatingView({
                    value: this.model.get('rating')
                ,	showRatingCount: false
                });
            }
		}
		//@method getContext @return {ProductReviewList.List.Cell.View.Context}
	,	getContext: function ()
		{
			//@class ProductReviewList.List.Cell.View.Context
			return {
                id: this.model.get('internalid')
            ,   detailsURL: this.model.get('detailsURL')
            ,   title: this.model.get('title')
            ,   touchpoint: this.model.get('touchpoint')
            ,   columns: this.model.get('columns')
			}
		}
	});
});