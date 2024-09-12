/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/editor';
import {
	PanelBody,
	Button,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Avocado } from '../../../svg/icons';

const PluginSidebarExample = () => {
	const [ text, setText ] = useState( '' );
	const [ select, setSelect ] = useState( 'a' );

	return (
		<PluginSidebar
			name="plugin-sidebar-example"
			title={ __(
				'PluginSidebar Example',
				'gutenberg-slot-fill-system'
			) }
			icon={ Avocado }
		>
			<PanelBody>
				<h2>
					{ __(
						'This is a heading for the PluginSidebar example.',
						'gutenberg-slot-fill-system'
					) }
				</h2>
				<p>
					{ __(
						'This is some example text for the PluginSidebar example.',
						'gutenberg-slot-fill-system'
					) }
				</p>
				<TextControl
					label={ __( 'Text Control', 'gutenberg-slot-fill-system' ) }
					value={ text }
					onChange={ ( newText ) => setText( newText ) }
				/>
				<SelectControl
					label={ __(
						'Select Control',
						'gutenberg-slot-fill-system'
					) }
					value={ select }
					options={ [
						{
							value: 'a',
							label: __(
								'Option A',
								'gutenberg-slot-fill-system'
							),
						},
						{
							value: 'b',
							label: __(
								'Option B',
								'gutenberg-slot-fill-system'
							),
						},
						{
							value: 'c',
							label: __(
								'Option C',
								'gutenberg-slot-fill-system'
							),
						},
					] }
					onChange={ ( newSelect ) => setSelect( newSelect ) }
				/>
				<Button variant="primary">
					{ __( 'Primary Button', 'gutenberg-slot-fill-system' ) }{ ' ' }
				</Button>
			</PanelBody>
		</PluginSidebar>
	);
};

// Register the plugin.
registerPlugin( 'plugin-sidebar-example', { render: PluginSidebarExample } );
