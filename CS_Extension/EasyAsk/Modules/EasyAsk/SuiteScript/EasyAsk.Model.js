
// Example of basic CRUD operations of Kodella.PDPModalWidget.PDPModalWidget

define('Kodella.EasyAsk.EasyAsk.Model'
	, [
		'SC.Model'
		, 'SC.Models.Init'
		, 'Application'

		, 'underscore'
	]
	, function (
		SCModel
		, ModelsInit
		, Application

		, _
	) {
		'use strict';

		return SCModel.extend({

			name: 'Kodella.EasyAsk.EasyAsk'

            , get: function () 
            {
                try
                {
                    var url = 'https://665798.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=251&deploy=1'
                    ,   timeStamp = Math.round(+new Date() / 1000)
                    /*,   authorization = 'OAuth realm="665798",'+
                        'oauth_consumer_key="499137b60efa9aa931761971b07d9aae28ed0ef1d0af7bf5518f572c5f68816f",'+
                        'oauth_consumer_secret="550c05ba52f05a90471edf73a1376dadb2b8d2707becfb743626d9b3a6cb98a9",'+
                        'oauth_token="e149c516faf62c7476c8c37cd7f4bc668afcc32bc83eff593f03627d89f0ab8d",'+
                        'oauth_timestamp="'+timeStamp+'",'+
                        'oauth_nonce="Kdao6lzAZSA",'+
                        'oauth_signature_method="HMAC-SHA1",'+
                        'oauth_version="1.0",'+
                        'oauth_signature="9PRG0UxBoqAqqJn20yUcjVjkXjA%3D"'*/
                    ,   authorization = 'NLAuth nlauth_account="665798",'+
                        'nlauth_email="ns.lonestar@kodella.com",'+
                        'nlauth_signature="#zeKLY9pY6uK",'+
                        'nlauth_role="1032"'
                    ,   headers = {
                        'User-Agent-x': 'SuiteScript-Call'
                    ,   "Authorization": authorization
                    ,   "Content-Type": 'application/json'
                    };

                    nlapiLogExecution("DEBUG", "headers", headers);
                    nlapiLogExecution("DEBUG", "authorization", authorization);

                    var output = nlapiRequestURL(url, null, headers, null, "GET");

                    nlapiLogExecution("DEBUG", "output",output);
                    nlapiLogExecution("DEBUG", "output.getBody()", output.getBody());

                    return output.getBody();
                }
                catch(e)
                {
                    nlapiLogExecution('ERROR', "e", e);
                }

			}
		});
	});