require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'vendor/jquery-1.10.2.min',
		swig: 'vendor/swig.min'
	}
});

require(['app'], function (app) {
	app.init();
});