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
	// Retrieve information about the current post type.
	const { isViewable, postType } = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );

		return {
			isViewable: postTypeObject?.viewable, // A viewable post type is one than can be viewed in the WordPress admin. Internal ones are not set to viewable.
			postType: postTypeName,
		};
	}, [] );

	// If the post type is viewable, do not render my plugin.
	if ( isViewable ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __(
				'Unified Site Editor Example',
				'gutenberg-slot-fill-system'
			) }
			className="custom-panel"
		>
			<p>
				{ sprintf(
					// eslint-disable-next-line @wordpress/i18n-translator-comments
					__(
						'Site Editor Only: post type is %s',
						'gutenberg-slot-fill-system'
					),
					postType
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-unified-site-editor', {
	render: SiteEditorDocumentSettingPanel,
} );
