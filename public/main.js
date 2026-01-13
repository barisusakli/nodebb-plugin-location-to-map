$(document).ready(function() {
	$(window).on('action:ajaxify.end', function() {
		if (ajaxify.data.template.name !== 'account/profile') {
			return;
		}

		const myDropdown = document.getElementById('location-to-map-dropdown');
		if (!myDropdown) {
			return;
		}
		myDropdown.addEventListener('show.bs.dropdown', event => {
			const key = myDropdown.dataset.key;
			const location = myDropdown.dataset.location;
			if (!key || !location) {
				return;
			}
			const imgSrc = `https://maps.googleapis.com/maps/api/staticmap?key=${key}&center=${location}&zoom=13&size=600x300&maptype=roadmap`;
			const image = `<img class="img-fluid rounded-1" src="${imgSrc}" />`;
			$('.location-to-map-link').html(image);
		})
	});

});