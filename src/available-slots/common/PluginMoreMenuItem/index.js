/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginMoreMenuItem } from '@wordpress/edit-site';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-common-plugin-more-menu-item', {
	render: () => (
		<PluginMoreMenuItem
			href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ __(
				'Site Editor Example: SlotFill Reference Guide',
				'gutenberg-slot-fill-system'
			) }
		</PluginMoreMenuItem>
	),
	icon: Avocado,
} );
