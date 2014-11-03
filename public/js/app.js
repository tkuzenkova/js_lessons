define(['jquery', 'templates'], function ($, tmpl) {
	var API_URL = '//localhost:3000/api/';
	var usersControllerUrl = 'beers';
	var ul = null;

	var app = {
		init: function () {
			$(document).on('templates:ready', app._init)
		},
		_init: function(){
			$('#content').html( tmpl.render('holder', {title: 'Beer list'}) );
		},
		loadBeers: function () {
			$.ajax({
				url: API_URL + usersControllerUrl,
				success: function (data) {
					ul = $('#content ul');
					if (ul.length == 0) {
						ul = $('<ul></ul>');
						console.log(ul)
						$('#content').append(ul);
					}
					data.map(function (el) {
						var li = document.createElement('li');
						$(li).click(function (ev) {
							console.log(ev, this);
							var self = this;
							$(this).hide(1000, function () {
								$(self).remove();
							});
						}).html(el.username)
						ul.append(li)
					})
				}
			})
		}
	}

	return app;
})