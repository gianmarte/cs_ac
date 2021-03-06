// @module Kodella.EasyAsk.ProductViewsExt
define('Kodella.EasyAsk.ProductViewsExt.View'
,	[
		'kodella_easyask_productviewsext.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		kodella_easyask_productviewsext_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class Kodella.EasyAsk.ProductViewsExt.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_easyask_productviewsext_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ProductViewsExt.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return Kodella.EasyAsk.ProductViewsExt.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.EasyAsk.ProductViewsExt.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});