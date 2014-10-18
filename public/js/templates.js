define(['jquery'], function () {
	console.log('loading templates');

	var API_URL = '//localhost:3000/api/views/';

	var templates = {},
		list = ['test', 'holder', 'tr'];

	$.when.apply($, list.map(function(view){
		return $.ajax( API_URL + view )
	})).then(function(){
		[].forEach.call(arguments, function(a, i){templates[list[i]] = a[0]});
		$(document).trigger('templates:ready', templates);
	})

	return templates;

})