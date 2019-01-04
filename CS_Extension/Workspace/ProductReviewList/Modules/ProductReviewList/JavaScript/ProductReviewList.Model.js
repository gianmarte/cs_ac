
define('Kodella.ProductReviewList.ProductReviewList.Model'
,	[
		'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	var ProductReviewListModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ProductReviewList.Service.ss'))
	,	test: function(){
			console.log("this", this.get('reviewid'));
	}
	});

	return ProductReviewListModel;
});