
define(
	'Kodella.ProductReviewList.ProductReviewList.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Kodella.ProductReviewList.ProductReviewList.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	ProductReviewListModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Kodella.ProductReviewList.ProductReviewList.ServiceController'

			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLogin: true
				}
			}

		,	get: function get()
			{
				var id = this.request.getParameter('reviewid');
				console.log("id", id);
				return id ? ProductReviewListModel.get(id) : (ProductReviewListModel.list() || []);
			}
		});
	}
);