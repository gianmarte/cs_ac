// Collection of Kodella.MyProductReview.MyProductReviewModel

define('Kodella.MyProductReview.MyProductReview.Collection'
,	[
    	'Backbone.CachedCollection'
	,	'Kodella.MyProductReview.MyProductReview.Model'
	,	'underscore'
	,	'Utils'
	]
,	function
	(
    	BackboneCachedCollection
	,	Model
	,	_
	,	Utils
	)
{
	'use strict'
	
	return BackboneCachedCollection.extend({
	
		model: Model
	,	url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MyProductReview.Service.ss'))
	,	parse: function parse(response)
		{
    		return response.records;
		}
	})
});