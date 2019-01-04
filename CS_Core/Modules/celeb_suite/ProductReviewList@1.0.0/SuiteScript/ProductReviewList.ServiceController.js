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

        // The values in this object are the validation needed for the current service.
        // Can have values for all the request methods ('common' values) and specific for each one.
    ,	options: {
            common: {
                requireLogin: true
            }
        }

    ,	get: function get()
        {
            var id = this.request.getParameter('internalid');
            var id2 = this.request.getParameter('reviewid');
            console.log("id", id);
            console.log("id2", id2);
            return id ? ProductReviewListModel.get(id) : (ProductReviewListModel.list() || []);
        }
    });
});