/*
KODELLA MODULE
*/

//@module ProductReview List
//This file define the functions to be used in ProductList service

define(
    'Kodella.ProductReviewList.ProductReviewList.Model'
,   [
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
        name: 'ProductReviewList'
        
        //retrieve all product reviews by the logged in user
    ,   get: function()
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
                var search = nlapiSearchRecord('customrecord_ns_pr_review', null, filters, columns);

                // if you need to, log it so that you can see it
                // var log1 = nlapiLogExecution('DEBUG', 'search', JSON.stringify(search));

                return _.map(search, function(result) {
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
            }
        }
    });
});