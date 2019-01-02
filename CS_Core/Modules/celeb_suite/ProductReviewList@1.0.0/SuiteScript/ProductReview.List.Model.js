/*
KODELLA MODULE
*/

//@module ProductReview List
//This file define the functions to be used in ProductList service

define(
    'ProductReview.List.Model'
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
    ,   get: function(custId)
        {
            var productReviews = {};

            if(ModelsInit.session.isLoggedIn2()){

                var filters = [
                    new nlobjSearchFilter('internalid', null, 'anyof', custId)
                ,   new nlobjSearchFilter('id', 'custrecord_ns_prr_writer', 'isnotempty') 
                ];

                var columns = [
                    new nlobjSearchColumn('internalid', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('created', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('name', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('custrecord_ns_prr_writer', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('custrecord_ns_prr_rating', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('custrecord_ns_prr_text', 'CUSTRECORD_NS_PRR_WRITER')
                ,   new nlobjSearchColumn('custrecord_ns_prr_item_id', 'CUSTRECORD_NS_PRR_WRITER')
                ];

                Application.getAllSearchResults('customer', filters, columns).forEach(function (reviewList){
                    productReviews.internalid = reviewList.getValue('internalid', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.createDate = reviewList.getValue('created', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.reviewTitle = reviewList.getValue('name', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.writer = reviewList.getValue('custrecord_ns_prr_writer', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.rating = reviewList.getValue('custrecord_ns_prr_rating', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.reviewText = reviewList.getValue('custrecord_ns_prr_text', 'CUSTRECORD_NS_PRR_WRITER');
                    productReviews.itemId = reviewList.getValue('custrecord_ns_prr_item_id', 'CUSTRECORD_NS_PRR_WRITER');
                });
            }

            return productReviews;
        }
    });
});