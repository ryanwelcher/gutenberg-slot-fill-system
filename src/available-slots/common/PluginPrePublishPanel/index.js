/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginPrePublishPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-pre-publish-panel', {
	render: () => (
		<PluginPrePublishPanel
			className="custom-panel-class"
			initialOpen
			title={ __( 'My Custom Panel', 'gutenberg-slot-fill-system' ) }
		>
			<p>{ __( 'Pre Publish Panel', 'gutenberg-slot-fill-system' ) }</p>
		</PluginPrePublishPanel>
	),
	icon: Avocado,
} );
