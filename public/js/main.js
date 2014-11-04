require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'vendor/jquery-1.10.2.min',
		swig: 'vendor/swig.min',
		less: 'vendor/less.min'
	}
});
require(['less']);
require(['app'], function (app) {
	app.init();
});