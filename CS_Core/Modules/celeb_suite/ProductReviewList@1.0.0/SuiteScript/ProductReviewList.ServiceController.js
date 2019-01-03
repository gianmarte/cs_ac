/*
    KODELLA MODULE
*/

define(
    'ProductReviewList.ServiceController'
,   [
        'ServiceController'
    ,   'SC.Models.Init'
    ,   'ProductReview.List.Model'
    ]
,   function
    (
        ServiceController
    ,   ModelsInit
    ,   ProductReviewListModel
    )
{
    'use strict';

    return ServiceController.extend({
        name: 'ProductReviewList.ServiceController'
    ,   options: {
            common: {
                requireLogin: true
            }
        }
    ,   get: function()
        {
            return ProductReviewListModel.get();
        }   
    });
});