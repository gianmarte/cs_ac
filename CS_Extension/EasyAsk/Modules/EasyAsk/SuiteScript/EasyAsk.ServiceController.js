
define(
	'Kodella.EasyAsk.EasyAsk.ServiceController'
	, [
		'ServiceController'
		, 'SC.Models.Init'
		, 'Kodella.EasyAsk.EasyAsk.Model'
	]
	, function (
		ServiceController
		, ModelsInit
		, EasyAskModel
	) {
		'use strict';

		return ServiceController.extend({

			name: 'Kodella.EasyAsk.EasyAsk.ServiceController'

			, get: function get() {
				return EasyAskModel.get();
			}
		});
	}
);