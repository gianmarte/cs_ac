// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Kodella.MyProductReview.MyProductReview'
	,	[	
			'Kodella.MyProductReview.MyProductReview.Router'
		,	'SC.Configuration'
		,	'underscore'
		]
	,	function (
			Router
		,	Configuration
		,	_
		)
	{
		'use strict';

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