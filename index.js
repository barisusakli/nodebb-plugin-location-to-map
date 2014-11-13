'use strict';

(function(module) {

	module.getAccount = function(data, callback) {
		if (!data || !data.userData || !data.userData.location) {
			return callback(null, data);
		}

		data.userData.location = data.userData.location + '<br/><img class="img-responsive" src="https://maps.googleapis.com/maps/api/staticmap?center=' + data.userData.location + '&zoom=13&size=600x300&maptype=roadmap" />';

		callback(null, data);
	};
}(module.exports));

