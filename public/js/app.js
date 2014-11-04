define(['jquery', 'templates'], function ($, tmpl) {
	var API_URL = '//localhost:3000/api/';
	var usersControllerUrl = 'beers';
	var ul = null;

	var app = {
		init: function () {
			$(document).on('templates:ready', app._init)
		},
		_init: function(){
			$.ajax({
				url: API_URL + usersControllerUrl,
				success: function(data){
					var beers = data.map(function(beer){ console.log(beer); return tmpl.render('option', beer); });
					var html = tmpl.render('holder', {title: 'Beer list', beers: beers});
					$('#content').html( html );
					//http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
				}
			});
		},
		//app.addBeer({name: 'new beer', type: 'cool', quantity: '12'})
		addBeer: function(beer){
			$.ajax({
				url: API_URL + usersControllerUrl,
				type: 'POST',
				data: beer,
				success: function(data){
					console.log('success', data);
				}
			});
		},
		//app.updateBeer({_id: '', name: 'new beer', type: 'cool', quantity: '12'})
		updateBeer: function(beer){
			$.ajax({
				url: API_URL + usersControllerUrl + '/' + beer._id,
				type: 'PUT',
				data: beer,
				success: function(data){
					console.log('success', data);
				}
			});
		}
	}
	window.app = app;

	return app;
})