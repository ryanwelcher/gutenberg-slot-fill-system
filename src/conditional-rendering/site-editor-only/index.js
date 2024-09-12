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
const SiteEditorDocumentSettingPanel = () => {
	// Retrieve information about the current post type.
	const isViewable = useSelect( ( select ) => {
		const postTypeName = select( editorStore ).getCurrentPostType();
		const postTypeObject = select( coreStore ).getPostType( postTypeName );

		// A viewable post type is one than can be viewed in the WordPress admin. Internal ones are not set to viewable.
		return postTypeObject?.viewable;
	}, [] );

	// If the post type is viewable, do not render my fill
	if ( isViewable ) {
		return null;
	}

	return (
		<PluginDocumentSettingPanel
			name="custom-panel"
			title={ __( 'Conditional Site Editor Example' ) }
			className="custom-panel"
		>
			<p>{ __( 'Only appears in the Site Editor' ) }</p>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'example-conditional-site-editor', {
	render: SiteEditorDocumentSettingPanel,
} );
