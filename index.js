'use strict';

(function(module) {

	module.getAccount = function(data, callback) {
		if (!data || !data.userData || !data.userData.location) {
			return callback(null, data);
		}

		data.userData.location = '<img class="img-responsive" src="https://maps.googleapis.com/maps/api/staticmap?center=' + data.userData.location + '&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284" />';

		callback(null, data);
	};
}(module.exports));

