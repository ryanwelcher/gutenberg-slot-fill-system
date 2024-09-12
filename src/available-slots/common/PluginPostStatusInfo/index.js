/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginPostStatusInfo } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-post-status-info', {
	render: () => (
		<PluginPostStatusInfo className="my-custom-class-name">
			<p>
				{ __(
					'Post Status Info SlotFill',
					'gutenberg-slot-fill-system'
				) }
			</p>
		</PluginPostStatusInfo>
	),
	icon: Avocado,
} );
