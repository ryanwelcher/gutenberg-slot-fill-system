/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginPostPublishPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

// Register the plugin.
registerPlugin( 'example-edit-post-plugin-post-publish-panel', {
	render: () => (
		<PluginPostPublishPanel
			className="custom-panel-class"
			title={ __( 'My Custom Panel', 'gutenberg-slot-fill-system' ) }
			initialOpen
		>
			<p>{ __( 'Post Publish Panel', 'gutenberg-slot-fill-system' ) }</p>
		</PluginPostPublishPanel>
	),
	icon: Avocado,
} );
