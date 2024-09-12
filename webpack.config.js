const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
module.exports = {
	...defaultConfig,
	entry: {
		'edit-post': './src/available-slots/edit-post',
		common: './src/available-slots/common',
		'dashboard-widget': './src/dashboard',
		'custom-slots': './src/custom-slots',
		portal: './src/portal',
		conditional: './src/conditional-rendering',
	},
};
