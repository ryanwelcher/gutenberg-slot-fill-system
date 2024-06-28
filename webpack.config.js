const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'edit-post': './src/available-slots/edit-post',
		'edit-site': './src/available-slots/edit-site',
		'dashboard-widget': './src/dashboard',
		'custom-slots': './src/custom-slots',
		portal: './src/portal',
		unified: './src/available-slots/unified',
	},
};
