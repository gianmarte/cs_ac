define(
	'Kodella.EasyAsk.EasyAsk.Facets.ItemCell.View.Ext'
	, [
		'Facets.ItemCell.View'
		, 'ProductLine.Stock.View'
		, 'Product.Model'
		, 'GlobalViews.StarRating.View'
		, 'Cart.QuickAddToCart.View'
		, 'Kodella.EasyAsk.CartExt.View.Ext'
		, 'ProductViews.Option.View'
		, 'ProductLine.StockDescription.View'
		, 'SC.Configuration'
		, 'Utils'
		, 'Item.Model'
		, 'Kodella.EasyAsk.EasyAsk.GlobalViews.StarRating.View.Ext'

		, 'Backbone'
		, 'Backbone.CompositeView'
		, 'Backbone.CollectionView'
		, 'underscore'
	]
	, function (
		FacetsItemCellView
		, ProductLineStockView
		, ProductModel
		, GlobalViewsStarRating
		, CartQuickAddToCartView
		, QuickAddToCartViewExt
		, ProductViewsOptionView
		, ProductLineStockDescriptionView
		, Configuration
		, Utils
		, ItemModel
		, GlobalViewsStarRatingExt

		, Backbone
		, BackboneCompositeView
		, BackboneCollectionView
		, _
	) {
		'use strict';

		// @class Facets.ItemCell.View @extends Backbone.View
		return FacetsItemCellView.extend({

			//@method initialize Override default method to convert this View into Composite
			//@param {Facets.ItemCell.View.Initialize.Options} options
			//@return {Void}
			initialize: function () {
				FacetsItemCellView.prototype.initialize.apply(this, arguments);
			}

			, childViews: _.extend({}, FacetsItemCellView.prototype.childviews, {
				'ItemDetails.Options': function () {
					return "";
				}
			,	'GlobalViews.StarRating': function()
				{
	
					var view = new GlobalViewsStarRatingExt({
						model: this.model
					,	showRatingCount: false
					,	queryOptions: Utils.parseUrlOptions(location.href)
					});
	
					return this.options.showStarRating === false ? null : view;
				}
			,	'Cart.QuickAddToCart': function ()
				{
					var product = new ProductModel({
						item: this.model
					,	quantity: this.model.get('_minimumQuantity', true)
					});
	
					return new QuickAddToCartViewExt({
						model: product
					,	application: this.options.application
					});
				}
			})

			// @method getContext @returns {Facets.ItemCell.View.Context}
			, getContext: function () {
				//@class Facets.ItemCell.View.Context
				console.log("this.model", this.model);
				console.log("this.model.get('Price')", this.model.get('Price'));
				var onlinePrice = this.model.get("Price") || '$0.00'
				,	listPrice = this.model.get("List_Price") || '$0.00'
				,	onlinePriceInt = parseFloat(onlinePrice.substring(1, onlinePrice.length).replace(",", "")).toFixed(2)
				,	listPriceInt = parseFloat(listPrice.substring(1, listPrice.length).replace(",", "")).toFixed(2)
				,	savePrice = '$' + parseFloat(listPriceInt - onlinePriceInt).toFixed(2)
				,	stockMsg = this.model.get('Kit_Package_Stock_Message').toString()
				,	itemStatusInstock = stockMsg.substring(stockMsg.indexOf("status")+8, stockMsg.indexOf("hidden")-13)
				,	itemMsgInStock = stockMsg.substring(stockMsg.indexOf("details")+9, stockMsg.lastIndexOf("</span>"))
				,	itemStatusSpecial = stockMsg.substring(stockMsg.indexOf('h3')+4, stockMsg.lastIndexOf(':')-8)
				,	itemMsgSpecial = stockMsg.substring(stockMsg.lastIndexOf(":")+2, stockMsg.lastIndexOf('</div>')-6);

				return {
					// @property {String} itemId
					itemId: this.model.get('Product_Id')
					// @property {String} name
					, name: this.model.get('Featured_Description')
					// @property {String} url
					, url: this.model.get('Item_URL')
					//@property {String} sku
					, sku: this.model.get('Model_Number')
					// @property {Boolean} isEnvironmentBrowser
					, isEnvironmentBrowser: SC.ENVIRONMENT.jsEnvironment === 'browser' && !SC.ENVIRONMENT.isTouchEnabled
					// @property {ImageContainer} thumbnail
					, thumbnail: this.model.get('Image_1_URL') //this.model.getThumbnail()
					// @property {Boolean} itemIsNavigable
					, itemIsNavigable: !_.isUndefined(this.options.itemIsNavigable) ? !!this.options.itemIsNavigable : true
					//@property {Boolean} showRating
					, showRating: SC.ENVIRONMENT.REVIEWS_CONFIG && SC.ENVIRONMENT.REVIEWS_CONFIG.enabled
					, hasRating: this.model.get('Review_Average') ? true : false
					// @property {Number} rating
					, rating: this.model.get('Review_Average')
					, ratingCount: this.model.get("Number_Of_Reviews")
					//@property {String} track_productlist_list
					, track_productlist_list: this.model.get('track_productlist_list')
					//@property {String} track_productlist_position
					, track_productlist_position: this.model.get('track_productlist_position')
					//@property {String} track_productlist_category
					, track_productlist_category: this.model.get('track_productlist_category')
					, hasBadge: this.model.get("Special_Feature_Badge") ? true : false
					, featureBadge: this.model.get("Special_Feature_Badge")
					, price: this.model.get("Price")
					, hasListPrice: this.model.get("List_Price") ? true : false
					, listPrice: this.model.get("List_Price")
					, savePrice: savePrice
					, hasStockMsg: this.model.get('Kit_Package_Stock_Message') ? true : false
					, stockStatus: stockMsg.indexOf("status") >= 0 ? itemStatusInstock : itemStatusSpecial
					, stockMsg: stockMsg.indexOf("details") >= 0 ? itemMsgInStock : itemMsgSpecial
				};
				//@class Facets.ItemCell.View
			}
		});
	});
