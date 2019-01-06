
// Example of basic CRUD operations of Kodella.MyProductReview.MyProductReview

define('Kodella.MyProductReview.MyProductReview.Model'
,	[
		'SC.Model'
    ,   'SC.Models.Init'
    ,   'Application'
    ]
,   function
    (
        SCModel
    ,   ModelsInit
    ,   Application
    )
{
    'use strict';

    return SCModel.extend({
        name: 'Kodella.MyProductReview.MyProductReview'
        
        //retrieve all product reviews by the logged in user
    ,   list: function()
        {

            if(ModelsInit.session.isLoggedIn2()){

                // define which fields we want returned
                var custId = ModelsInit.customer.getFieldValues(['internalid']);

                var filters = [
                    new nlobjSearchFilter('custrecord_ns_prr_writer', null, 'anyof', custId.internalid)  
                ];                

                var columns = [
                    new nlobjSearchColumn('internalid')
                ,   new nlobjSearchColumn('custrecord_ns_prr_rating')
                ,   new nlobjSearchColumn('custrecord_ns_prr_text')
                ,   new nlobjSearchColumn('custrecord_ns_prr_item_id')
                ,   new nlobjSearchColumn('created')
                ,   new nlobjSearchColumn('name')
                ,   new nlobjSearchColumn('custrecord_ns_prr_writer')
                ];

                // define record type to be searched
                //var search = nlapiSearchRecord('customrecord_ns_pr_review', null, filters, columns);
                var search = Application.getPaginatedSearchResults({
                    results_per_page: 20
                ,   columns: columns
                ,   filters: filters
                ,   record_type: 'customrecord_ns_pr_review'
                });

                // if you need to, log it so that you can see it
                // var log1 = nlapiLogExecution('DEBUG', 'search', JSON.stringify(search));

                search.records = _.map(search.records, function mapReviews(result) {
                    return {
                        reviewid: result.getValue('internalid')
                    ,   rating: result.getValue('custrecord_ns_prr_rating')
                    ,   text: result.getValue('custrecord_ns_prr_text')
                    ,   itemid: result.getValue('custrecord_ns_prr_item_id')
                    ,   created: result.getValue('created')
                    ,   reviewTitle: result.getValue('name')
                    ,   writer: result.getValue('custrecord_ns_prr_writer')
                    }
                });

                return search;
            }
        }
    ,   get: function(id)
        {
            if(ModelsInit.session.isLoggedIn2())
            {
                //var results = [];
                //define which product review record to return
                var filters = [
                    new nlobjSearchFilter('internalid', null, 'anyof', id)
                ];

                var columns = [
                        new nlobjSearchColumn('custrecord_ns_prr_rating')
                    ,   new nlobjSearchColumn('custrecord_ns_prr_text')
                    ,   new nlobjSearchColumn('custrecord_ns_prr_item_id')
                    ,   new nlobjSearchColumn('created')
                    ,   new nlobjSearchColumn('name')
                    ,   new nlobjSearchColumn('custrecord_ns_prr_writer')                    
                ];

                // define record type to be searched
                //var search = nlapiSearchRecord('customrecord_ns_pr_review', null, filters, columns);

                var search = Application.getAllSearchResults('customrecord_ns_pr_review', filters, columns);

                search.records = _.map(search.records, function mapResult(result) {
                    return {
                        rating: result.getValue('custrecord_ns_prr_rating')
                    ,   text: result.getValue('custrecord_ns_prr_text')
                    ,   itemid: result.getValue('custrecord_ns_prr_item_id')
                    ,   created: result.getValue('created')
                    ,   reviewTitle: result.getValue('name')
                    ,   writer: result.getValue('custrecord_ns_prr_writer')
                    }
                });

                return search;
            }
        }
    });
});