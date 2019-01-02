/*
    KODELLA MODULE
*/

define('ProductReviewList.Collection'
    [
        'ProductReviewList.Model'
    ,   'Backbone'
    ]
,   function 
    (
        ListModel
    ,   Backbone
    )
    {

    'use strict'
    return Backbone.Collection.extend({
        model: ListModel
    ,   cacheSupport: true
    ,   url: 'services/ProductReviewList.Service.ss'
    ,   initialize: function()
        {
            this.once('sync reset', function ()
			{
				if (!this.original)
				{
					this.original = this.clone();
				}
			});
        }
    ,   parse: function(response)
        {
            this.totalRecordsFound = response.totalRecordsFound;
            this.recordsPerPage = response.recordsPerPage;

            return response.records;
        }
    });
});