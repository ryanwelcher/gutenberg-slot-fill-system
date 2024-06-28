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
const RestrictPostTypes = () => {
	// Retrieve information about the current post type.
	const { isViewable, postTypeName } = useSelect( ( select ) => {
		const postType = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postType );
		return {
			isViewable: postTypeObject?.viewable,
			postTypeName: postType,
		};
	}, [] );

	// The list of post types that are allowed to render the plugin.
	const allowedPostTypes = [ 'page' ];

	// If the post type is not viewable or not in the allowed list, do not render the plugin.
	if ( ! isViewable || ! allowedPostTypes.includes( postTypeName ) ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __(
				'Unified Restrict Post Types Example',
				'gutenberg-slot-fill-system'
			) }
			className="custom-panel"
		>
			<p>
				{ sprintf(
					// eslint-disable-next-line @wordpress/i18n-translator-comments
					__(
						'Only appears on Post Types that are in the allowed list. %s',
						'gutenberg-slot-fill-system'
					),
					allowedPostTypes.join( ', ' )
				) }
			</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-unified-restrict-post-types', {
	render: RestrictPostTypes,
} );
