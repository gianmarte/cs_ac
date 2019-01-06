
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.MyProductReview.MyProductReview.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.MyProductReview.MyProductReview.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}