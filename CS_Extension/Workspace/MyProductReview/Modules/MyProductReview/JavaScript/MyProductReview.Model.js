
define('Kodella.MyProductReview.MyProductReview.Model'
,	[
		'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function
	(
		Backbone
  	,	_
  	,	Utils
	)
{
	'use strict';

	var ProductReviewListModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MyProductReview.Service.ss'))
	});

	return ProductReviewListModel;
});