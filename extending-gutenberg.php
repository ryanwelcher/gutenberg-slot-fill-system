<?php
/**
 * Plugin Name: The WordPress SlotFill System
 * Description: Plugin of Slot Fill Examples.
 * Version: 1.0.0
 * Author: Ryan Welcher
 * Author URI: www.ryanwelcher.com
 * Plugin URI: https://github.com/ryanwelcher/the-gutenberg-slotfill-system
 * Textdomain: gutenberg-slot-fill-system
 *
 * @package GutenbergSlotFillSystem
 */

namespace GutenbergSlotFillSystem;

/**
 * Enqueue the SlotFill Examples.
 */
\add_action(
	'enqueue_block_editor_assets',
	function() {

		$current_page = get_current_screen();
		// Enqueue the slots for the edit post screen.
		$edit_post_examples_asset_path = plugin_dir_path( __FILE__ ) . 'build/edit-post.asset.php';
		if (
			file_exists( $edit_post_examples_asset_path )
			&& 'post' === $current_page->base
		) {
			$edit_post_examples_assets = require_once $edit_post_examples_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-edit-post-examples', // Handle.
				plugin_dir_url( __FILE__ ) . 'build/edit-post.js',
				$edit_post_examples_assets['dependencies'],
				$edit_post_examples_assets['version'],
				true
			);
		}

		$portal_example_asset_path = plugin_dir_path( __FILE__ ) . 'build/portal.asset.php';
		if (
			file_exists( $portal_example_asset_path )
			&& 'post' === $current_page->base
		) {
			$edit_post_examples_assets = require_once $portal_example_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-portal', // Handle.
				plugin_dir_url( __FILE__ ) . 'build/portal.js',
				$edit_post_examples_assets['dependencies'],
				$edit_post_examples_assets['version'],
				true
			);
		}

		// Enqueue the examples for the common slots
		$common_examples_asset_path = plugin_dir_path( __FILE__ ) . 'build/common.asset.php';
		if ( file_exists( $common_examples_asset_path ) ) {
			$common_examples_assets = require_once $common_examples_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-common-examples', // Handle.
				plugin_dir_url( __FILE__ ) . 'build/common.js',
				$common_examples_assets['dependencies'],
				$common_examples_assets['version'],
				true
			);
		}
		// Enqueue the unified slots for WordPress 6.6.
		$conditional_examples_asset_path = plugin_dir_path( __FILE__ ) . 'build/conditional.asset.php';
		if ( file_exists( $conditional_examples_asset_path ) ) {
			$conditional_examples_assets = require_once $conditional_examples_asset_path;
			\wp_enqueue_script(
				'gutenberg-slot-fill-system-conditional-examples', // Handle.
				plugin_dir_url( __FILE__ ) . 'build/conditional.js',
				$conditional_examples_assets['dependencies'],
				$conditional_examples_assets['version'],
				true
			);
		}
	}
);




/**
 * Create a new Dashboard Widget.
 */
\add_action(
	'wp_dashboard_setup',
	function() {
		\wp_add_dashboard_widget(
			'extending_gutenberg_dashboard_widget',
			'Custom SlotFill System',
			function() {
				echo '<div id="extending-gutenberg-dashboard"></div>';
			}
		);
	}
);


/**
 * Enqueue our JS on the dashboard page.
 *
 * @param string $hook The hook associated with the screen.
 */
\add_action(
	'admin_enqueue_scripts',
	function( $hook ) {
		if ( 'index.php' === $hook ) {
			$dashboard_asset_path = plugin_dir_path( __FILE__ ) . 'build/dashboard-widget.asset.php';
			if ( file_exists( $dashboard_asset_path ) ) {
				$dashboard_assets = require_once $dashboard_asset_path;
				wp_enqueue_script(
					'gutenberg-slot-fill-system-dashboard-widget',
					plugin_dir_url( __FILE__ ) . '/build/dashboard-widget.js',
					$dashboard_assets['dependencies'],
					$dashboard_assets['version'],
					true
				);
			}
		}

		// Localize some data we need for the script.
		$user = \wp_get_current_user();
		\wp_localize_script(
			'gutenberg-slot-fill-system-dashboard-widget',
			'EB_DASH',
			array(
				'user'            => array( 'display_name' => $user->display_name ),
				'pluginAssetPath' => plugin_dir_url( __FILE__ ),
			)
		);
	}
);


// Register a custom page for our custom SlotFill examples.
\add_action(
	'admin_menu',
	function() {
		add_menu_page(
			__( 'Custom Slot Examples', 'gutenberg-slot-fill-system' ),
			__( 'Custom Slot Examples', 'gutenberg-slot-fill-system' ),
			'manage_options',
			'gutenberg-slot-fill-system',
			function() {
				?>
				<div id="gutenberg-slot-fill-system-custom-slots">
					<?php esc_html_e( 'Requires JavaScript', 'gutenberg-slot-fill-system' ); ?>
				</div>
				<?php
			}
		);
	}
);
/**
 * Enqueue our script on the settings page,
 */
add_action(
	'admin_enqueue_scripts',
	function( $suffix ) {
		$asset_file_page = plugin_dir_path( __FILE__ ) . 'build/custom-slots.asset.php';
		if ( file_exists( $asset_file_page ) && 'toplevel_page_gutenberg-slot-fill-system' === $suffix ) {
			$assets = require_once $asset_file_page;
			wp_enqueue_script(
				'gutenberg-slot-fill-system-custom-slots',
				plugin_dir_url( __FILE__ ) . 'build/custom-slots.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
			foreach ( $assets['dependencies'] as $style ) {
				wp_enqueue_style( $style );
			}
		}
	}
);
