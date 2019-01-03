
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.ProductReviewList.ProductReviewList.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.ProductReviewList.ProductReviewList.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}