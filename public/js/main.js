require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'vendor/jquery-1.10.2.min',
		swig: 'vendor/swig.min'
	}
});

require(['jquery', 'templates', 'swig', 'app'], function ($, tmpl, swig, app) {
	console.log('ready', app);
	app.init();
});