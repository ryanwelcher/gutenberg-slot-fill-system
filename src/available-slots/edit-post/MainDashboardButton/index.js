/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalMainDashboardButton as MainDashboardButton,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalFullscreenModeClose as FullscreenModeClose,
} from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-main-dashboard-button', {
	render: () => (
		<MainDashboardButton>
			<FullscreenModeClose icon={ Avocado } href="http://wordpress.org" />
		</MainDashboardButton>
	),
	icon: Avocado,
} );
