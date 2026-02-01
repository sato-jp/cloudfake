<?php
/**
 * Plugin Name:       CDN Error Mockups
 * Plugin URI:        https://github.com/sato-jp/cdn-error-mockups
 * Description:       Adds a block that mimics the Cloudflare downtime error screen.
 * Requires at least: 6.9
 * Requires PHP:      8.0
 * Version:           1.0.4
 * Author:            Hiroshi Sato
 * Text Domain:       cdn-error-mockups
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package CDN Error Mockups
 * @copyright Copyright (C) 2026 Hiroshi Sato
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function cdn_error_mockups_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'cdn_error_mockups_block_init' );

/**
 * Get client IP address from various sources.
 *
 * @return string The client IP address or 'Unavailable' if not found.
 */
function cdn_error_mockups_get_client_ip() {
	// Cloudflare.
	if ( ! empty( $_SERVER['HTTP_CF_CONNECTING_IP'] ) ) {
		return sanitize_text_field( wp_unslash( $_SERVER['HTTP_CF_CONNECTING_IP'] ) );
	}
	// Proxy (X-Forwarded-For).
	if ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
		$ips = explode( ',', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) );
		return trim( $ips[0] );
	}
	// Standard remote address.
	if ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
		return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
	}
	return 'Unavailable';
}

/**
 * Register REST API endpoint for client IP.
 */
function cdn_error_mockups_register_rest_routes() {
	register_rest_route(
		'cdn-error-mockups/v1',
		'/client-ip',
		array(
			'methods'             => 'GET',
			'callback'            => 'cdn_error_mockups_rest_client_ip',
			'permission_callback' => '__return_true',
		)
	);
}
add_action( 'rest_api_init', 'cdn_error_mockups_register_rest_routes' );

/**
 * REST API callback for client IP.
 *
 * @return WP_REST_Response
 */
function cdn_error_mockups_rest_client_ip() {
	return rest_ensure_response(
		array(
			'ip' => cdn_error_mockups_get_client_ip(),
		)
	);
}
