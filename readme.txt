=== CDN Error Mockups ===
Contributors: hiroshisato, pixelium  
Donate link: https://github.com/sponsors/sato-jp  
Tags: block, cloudflare, joke, 404  
Requires at least: 6.9  
Tested up to: 6.9  
Stable tag: 1.0.2  
Requires PHP: 8.0  
License: GPLv2 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds a block that mimics the Cloudflare downtime error screen.

== Description ==

Adds a block that mimics the Cloudflare downtime error screen. Use it to create error pages that look like the official Cloudflare error pages.

This plugin is based on the [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) project, adapted as a WordPress block for the Gutenberg editor.

**Important Notice:** This plugin is not affiliated with, endorsed by, or connected to Cloudflare, Inc. This plugin is an independent project created for educational and entertainment purposes.

= External services =

The plugin uses the [ipify](https://www.ipify.org/) API to fetch the visitor’s IP address when they click "Click to reveal" in the block. Only a GET request is made; no other data is sent. See ipify’s [terms of use](https://www.ipify.org/terms) and [privacy policy](https://www.ipify.org/privacy).

== Installation ==

= Method 1: Install from WordPress Plugin Directory =

1. Go to **Plugins** > **Add New** in your WordPress admin.
2. Search for **"CDN Error Mockups"**.
3. Click **Install Now**, then **Activate**.

= Method 2: Manual Installation =

1. Download the plugin ZIP file from the [WordPress Plugin Directory](https://wordpress.org/plugins/cdn-error-mockups/).
2. Go to **Plugins** > **Add Plugin** > **Upload Plugin** in your WordPress admin.
3. Choose the downloaded ZIP file and click **Install Now**.
4. Activate the plugin from the Plugins screen.

== Source Code ==

The plugin’s JavaScript and CSS are built from source. The human-readable source is in the `src/` directory on [GitHub](https://github.com/sato-jp/cdn-error-mockups).

== Contributing ==

Contributions are welcome. Open issues, suggest features, or send pull requests on [GitHub](https://github.com/sato-jp/cdn-error-mockups).

== Screenshots ==

1. Block placed in the "404 page" template
2. Error code and message can be changed in the settings sidebar
3. The "404 page" shown on the frontend

== Upgrade Notice ==

= 1.0.0 =

This is a major release. Please review the changelog for details.

== Changelog ==

= 1.0.0 =

* Initial release



== Credits ==

This plugin is based on the idea and some code from [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) by donlon (MIT License). See [THIRD_PARTY_LICENSES.md](https://github.com/sato-jp/cdn-error-mockups/blob/main/THIRD_PARTY_LICENSES.md) for details.