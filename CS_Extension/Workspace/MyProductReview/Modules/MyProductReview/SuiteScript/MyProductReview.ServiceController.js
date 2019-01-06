
define(
	'Kodella.MyProductReview.MyProductReview.ServiceController'
,	[
	'ServiceController'
    ,   'SC.Models.Init'
    ,   'Kodella.MyProductReview.MyProductReview.Model'
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

        name: 'Kodella.MyProductReview.MyProductReview.ServiceController'

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