/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module OrderHistory
define('ProductReview.Detail.Item.View'
,	[	
		'Backbone.CompositeView'
	,	'Backbone.CollectionView'
	,	'Address.Details.View'
	,	'Transaction.Line.Views.Cell.Actionable.View'
	,	'OrderHistory.List.Tracking.Number.View'
	,	'Transaction.Line.Views.QuantityAmount.View'
	,	'OrderHistory.Item.Actions.View'
	,	'TrackingServices'
	,	'Location.VenueDetails.View'
	,	'SC.Configuration'
	,	'Profile.Model'
	,	'productreview_item.tpl'

	,	'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function (
		BackboneCompositeView
	,	BackboneCollectionView
	,	AddressView
	,	TransactionLineViewsCellActionableView
	,	OrderHistoryListTrackingNumberView
	,	TransactionLineViewsQuantityAmountView
	,	OrderHistoryItemActionsView
	,	TrackingServices
	,	LocationVenueDetailsView
	,	Configuration
	,	ProfileModel
	,	productreview_item_tpl

	,	Backbone
	,	_
	,	Utils
	)
{
	'use strict';

	//@class OrderHistory.Packages.View @extend Backbone.View
	return Backbone.View.extend({
		//@property {Function} template
		template: productreview_item_tpl
		//@method initialize
	,	initialize: function ()
		{
			BackboneCompositeView.add(this);
		}
		//@property {Object} childViews
	,	childViews: {
		'Items.Collection': function ()
			{
				return new BackboneCollectionView({
						collection: this.collection
					,	childView: TransactionLineViewsCellActionableView
					,	viewsPerRow: 1
				});
			}
		}

		//@method getContext @return OrderHistory.Packages.View.Context
	,	getContext: function ()
		{
			//@class OrderHistory.Packages.View.Context
			return {
					//@property {Model} model
					model: this.model
			};

		}
	});

});