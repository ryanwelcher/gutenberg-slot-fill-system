/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-document-setting-panel', {
	render: () => (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Custom Panel', 'gutenberg-slot-fill-system' ) }
			className="custom-panel"
		>
			{ __( 'Custom Panel Contents', 'gutenberg-slot-fill-system' ) }
		</PluginDocumentSettingPanel>
	),
	icon: Avocado,
} );
