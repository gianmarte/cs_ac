define(
    'Kodella.EasyAsk.ProductViews.Price.View.Ext'
,	[
        'ProductViews.Price.View'
	,	'Profile.Model'
	,	'Session'
	,	'SC.Configuration'

	,	'product_views_price.tpl'
	,	'kodella_easyask_item_specs.tpl'

	,	'Backbone'
	,	'underscore'
	]
,	function(
        ProductViewsPriceView
	,	ProfileModel
	,	Session
	,	Configuration

	,	product_views_price_tpl
	,	kodella_easyask_item_specs_tpl

	,	Backbone
	,	_
	)
{
	'use strict';

	// @class ProductViews.Price.View @extends Backbone.View
	var ProductViewsPriceViewExt = ProductViewsPriceView.extend(
	{
		//@property {Function} template
		template: kodella_easyask_item_specs_tpl

		//@method initialize
		//@param {ProductViews.Price.View.Initialize.Options} options
		//@return {Void}
	,	initialize: function ()
		{
			this.model.on('change', this.render, this);
		}

		//@method getUrlLogin Get the login URL contains an origin hash parameter indicating the current URL to came back after login
		//@return {String}
	,	getUrlLogin: function ()
		{
			var url = Session.get('touchpoints.login') + '&origin=' + (Configuration.get('currentTouchpoint') || 'home') + '&origin_hash=';

			return url + encodeURIComponent(this.options.origin === 'PDPQUICK' ? this.model.generateURL().replace('/', '') : Backbone.history.fragment);
		}

		// @method getContext
		// @returns {ProductViews.Price.View.Context}
	,	getContext: function ()
		{
			var price_container_object = this.model.attributes
			//,	is_price_range = !!(price_container_object.get('MinPrice') && price_container_object.get('MaxPrice'))
			,	showComparePrice = false
			,	featuresArr = []
			,	modelNum = price_container_object.get("Model_Number");

			for(var idx = 1; idx <= 10; idx++)
			{
				var featuresStr = 'Features_'+idx;

				if(price_container_object.get(featuresStr))
				{
					featuresArr.push(price_container_object.get(featuresStr));
				}
			}

			console.log("featuresArr", featuresArr);
			/*if (!this.options.hideComparePrice)
			{
				showComparePrice = is_price_range ?
					price_container_object.max.price < price_container_object.compare_price :
					price_container_object < price_container_object.compare_price;
			}*/

			//@class ProductViews.Price.View.Context
			return _.extend({}, ProductViewsPriceView.prototype.getContext.apply(this,arguments), {
					priceFormatted: price_container_object.get("Price") || ''
				,	model: this.model
					// @property {String} comparePriceFormatted
				,	comparePriceFormatted: price_container_object.compare_price_formatted || ''
					// @property {String} minPriceFormatted
				,	minPriceFormatted: price_container_object.get('MinPrice') ? price_container_object.get('MinPrice') : ''
					// @property {String} maxPriceFormatted
				,	maxPriceFormatted: price_container_object.get('MaxPrice') ? price_container_object.get('MaxPrice') : ''
					// @property {Number} price
				,	price: price_container_object.get("Price") ? price_container_object.get("Price") : 0
					// @property {Number} comparePrice
				,	comparePrice: price_container_object.compare_price ? price_container_object.compare_price : 0
					// @property {Number} minPrice
				,	minPrice: price_container_object.get('MinPrice') ? price_container_object.get('MinPrice') : 0
					// @property {Number} maxPrice
				,	maxPrice: price_container_object.get('MaxPrice') ? price_container_object.get('MaxPrice') : 0
					// @property {Boolean} showHighlightedMessage
				,	showHighlightedMessage:	_.indexOf(ProductViewsPriceView.highlightedViews, this.options.origin) >= 0
				,	modelNum: modelNum
				,	features: featuresArr
				,	hasFeatures: featuresArr.length > 0
			});
			//@class ProductViews.Price.View
		}
	}
,	{
		//@property {Array<String>} highlightedViews Contains the list of all origins that in case of using the "LOGIN TO SEE PRICES" feature must render a highlighted notification message
		//@static
		highlightedViews:  ['PDPQUICK', 'PDPFULL']
	});

	return ProductViewsPriceViewExt;
});

//@class ProductViews.Price.View.Initialize.Options
//@property {String?} origin Possible values are:
//	PDPCONFIRMATION 		For the PDP confirmation message
//	ITEMCELL 				For each item being shown in the item list (ex your-domain.com/search)
//	PDPQUICK 				For a PDP being shown on a quick view form
//	PDPFULL 				Full PDP view
//	RELATEDITEM				Related Item
//	PRODUCTLISTDETAILSLATER	Used to render each item that was saved for later
//	PRODUCTLISTDETAILSFULL	Used to render each item that is shown inside My Account in the details of a particular Product List
//	PRODUCTLISTDETAILSEDIT	Used when rendering the form to edit an item inside a product list
//	ITEMVIEWCELL			For all list where items are rendered
//
//@property {Number?} linePrice Specify this value if you want to use a different price rather than the one of the line
//@property {String?} linePriceFormatted This string valid must be present if you want to use a custom price containing the formatted value of linePrice
//@property {Boolean?} hideComparePrice
//@property {Item.Model|Product.Model} model