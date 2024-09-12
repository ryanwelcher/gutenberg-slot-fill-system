/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import {
	PanelBody,
	Button,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';
import { image } from '@wordpress/icons';

const PluginSidebarMoreMenuItemTest = () => {
	const [ text, setText ] = useState( '' );
	const [ select, setSelect ] = useState( 'a' );
	return (
		<>
			<PluginSidebarMoreMenuItem target="sidebar-name" icon={ image }>
				{ __( 'Custom Menu Item Text' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="sidebar-name"
				icon={ image }
				title="My Sidebar"
			>
				<PanelBody>
					<h2>
						{ __(
							'This is a heading for the PluginSidebar example.'
						) }
					</h2>
					<p>
						{ __(
							'This is some example text for the PluginSidebar example.'
						) }
					</p>
					<TextControl
						label={ __( 'Text Control' ) }
						value={ text }
						onChange={ ( newText ) => setText( newText ) }
					/>
					<SelectControl
						label={ __( 'Select Control' ) }
						value={ select }
						options={ [
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						] }
						onChange={ ( newSelect ) => setSelect( newSelect ) }
					/>
					<Button variant="primary">
						{ __( 'Primary Button', 'gutenberg-slot-fill-system' ) }{ ' ' }
					</Button>
				</PanelBody>
			</PluginSidebar>
		</>
	);
};

registerPlugin( 'plugin-sidebar-more-menu-item-example', {
	render: PluginSidebarMoreMenuItemTest,
} );
