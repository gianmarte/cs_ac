
function service(request, response)
{
	'use strict';
	try 
	{
		require('Kodella.EasyAsk.EasyAsk.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Kodella.EasyAsk.EasyAsk.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}