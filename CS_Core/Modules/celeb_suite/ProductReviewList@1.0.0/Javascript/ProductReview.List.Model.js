/*
    KODELLA MODULE
*/
define('ProductReview.List.Model'
, [
    'Backbone'
  , 'underscore'
  , 'Utils'
  ]
, function
  (
    Backbone
  , _
  , Utils
  )
{
  'use strict';

	var ProductReviewListModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl('services/ProductReviewList.Service.ss')
	});

	return ProductReviewListModel;
});