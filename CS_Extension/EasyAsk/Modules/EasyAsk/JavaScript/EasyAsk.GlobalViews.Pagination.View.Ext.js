/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module GlobalViews.Pagination.View
define(
    'Kodella.EasyAsk.GlobalViews.Pagination.View.Ext'
,	[	
        'GlobalViews.Pagination.View'
    ,   'global_views_pagination.tpl'
    ,   'kodella_easyask_global_views_pagination.tpl'

	,	'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function(
        GlobalViewsPagination
    ,	global_views_pagination_tpl
    ,   kodella_easyask_global_views_pagination_tpl

	,	Backbone
	,	_
	)
{
	'use strict';

	// @class GlobalViews.Pagination.View @extends Backbone.View
	return GlobalViewsPagination.extend({

		template: kodella_easyask_global_views_pagination_tpl

	,	initialize: function ()
		{
			GlobalViewsPagination.prototype.initialize.apply(this, arguments)
		}

		// @method pager @param {String} url_value @returns {String}
	,	_pager: function (url_value)
		{
			return GlobalViewsPagination.prototype._pager.apply(this, arguments);;
		}

	,	_getCurrentPage: function ()
		{
			return GlobalViewsPagination.prototype._getCurrentPage.apply(this, arguments);;
		}

		// @method getPageFromUrl @param {String} url_value @returns {Number}
	,	_getPageFromUrl: function (url_value)
		{
			return GlobalViewsPagination.prototype._getPageFromUrl.apply(this, arguments);;
		}

		//@method precalculateValues Internal method to precalculate paginator state once and being able to use it many times
	,	precalculateValues: function ()
		{
			GlobalViewsPagination.prototype.precalculateValues.apply(this, arguments);
		}

		// @method getContext @return {GlobalViews.Pagination.View.Content}
	,	getContext: function ()
		{
			//@class GlobalViews.Pagination.View
			return GlobalViewsPagination.prototype.getContext.apply(this, arguments);
		}
	});
});