'use strict';

define('admin/plugins/location-to-map', ['settings'], function (Settings) {
	var ACP = {};

	ACP.init = function () {
		Settings.load('location-to-map', $('.location-to-map-settings'));
		$('#save').on('click', function () {
			Settings.save('location-to-map', $('.location-to-map-settings'));
		});
	};

	return ACP;
});
