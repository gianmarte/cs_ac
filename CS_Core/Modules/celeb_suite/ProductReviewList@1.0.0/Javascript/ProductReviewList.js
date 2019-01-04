/*
	Kodella Module
*/

// @module ProductReviewList
// Implements the experience of seeing all the customer Orders experience, this is the 'Order History' experience in MyAccount. Includes the Order module (Model, Collection, Views, Router)
define('ProductReviewList'
,	[	
		'ProductReviewList.Router'
	,	'SC.Configuration'
	,	'underscore'
	,	'Utils'
	]
,	function (
		Router
	,	Configuration
	,	_
	)
{
	'use strict';

	// @class OrderHistory @extends ApplicationModule
	return	{
		// @property {MenuItem} MenuItems
		MenuItems: function () 
		{
			return {
				id: 'reviewlist'
            ,	name: _('Reviews').translate()
            ,   url: 'reviewlist'
			,	index: 5
			};
		}

		// @method mountToApp
	,	mountToApp: function (application)
		{
			return new Router(application);
		}
	};
});
