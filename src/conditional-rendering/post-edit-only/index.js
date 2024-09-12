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
import { __ } from '@wordpress/i18n';

/**
 * The component to be rendered  as part of the plugin.
 */
const ConditionalEditPostDocumentSettingPanel = () => {
	// Retrieve information about the current post type.
	const isViewable = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );
		return postTypeObject?.viewable;
	}, [] );

	// If the post type is not viewable, then do not render my the fill.
	if ( ! isViewable ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Conditional Post Editor Example' ) }
			className="custom-panel"
		>
			<p>{ __( 'Only appears in the Edit Post screen' ) }</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-conditional-post-edit-only', {
	render: ConditionalEditPostDocumentSettingPanel,
} );
