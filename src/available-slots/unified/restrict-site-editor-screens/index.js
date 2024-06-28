/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginDocumentSettingPanel,
	store as editorStore,
} from '@wordpress/editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * The component to be rendered  as part of the plugin.
 */
const SiteEditorDocumentSettingPanel = () => {
	// Allowed areas in the Site Editor.
	const allowedSiteEditorScreens = [
		'wp_template', // Templates
		'wp_block', // Patterns
		'wp_template_part', // Template Parts
	];

	const { isViewable, postType } = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );

		return {
			isViewable: postTypeObject?.viewable, // A viewable post type is one than can be viewed in the WordPress admin. Internal ones are not set to viewable.
			postType: postTypeName,
		};
	}, [] );

	// If the post type is viewable, do not render my plugin.
	if ( isViewable || ! allowedSiteEditorScreens.includes( postType ) ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __(
				'Unified: Restricted to Site Editor screens',
				'gutenberg-slot-fill-system'
			) }
			className="custom-panel"
		>
			<p>
				{ sprintf(
					// eslint-disable-next-line @wordpress/i18n-translator-comments
					__(
						'Only appears on Editor Screens that are in the allowed list. %s',
						'gutenberg-slot-fill-system'
					),
					allowedSiteEditorScreens.join( ', ' )
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-unified-site-editor-only', {
	render: SiteEditorDocumentSettingPanel,
} );
