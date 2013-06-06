// Change 'replacement_image_kw' to the google image results you want to use
(function() {
var keycodes = [38,38,40,40,37,39,37,39,66,65], 
	konami_index = 0,
	replacement_image_kw = 'grumpy cat';

document.addEventListener('keydown', swap, true);
function swap(key) {
	if (key.keyCode !== keycodes[konami_index++]) {
		konami_index = 0;
		return;
	}
	if (konami_index !== keycodes.length) return;

	google_img_json = null, 
	changeImages = function(data) { 
		google_img_json = data; 
		var p = document.getElementsByTagName('img');
		for(var i in p) { 
			p[i].width = p[i].width;
			p[i].height = p[i].height;
			// Set img src to the image url returned in Google image's JSON response
			p[i].src = data.responseData.results[Math.floor(Math.random()*(data.responseData.results.length))].url;
		}
	};
	if (!google_img_json) { 
		var jp = document.createElement('script');
		jp.setAttribute('type', 'text/javascript');
		jp.setAttribute('src', 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=' + replacement_image_kw + '&callback=changeImages');
		document.getElementsByTagName('head')[0].appendChild(jp);
	} else { 
		changeImages(google_img_json); 
	}
}
})();
