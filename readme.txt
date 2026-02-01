=== CDN Error Mockups ===
Contributors: hiroshisato, pixelium  
Donate link: https://github.com/sponsors/sato-jp  
Tags: block, cloudflare, joke, 404  
Requires at least: 6.9  
Tested up to: 6.9  
Stable tag: 1.0.4
Requires PHP: 8.0  
License: GPLv2 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds a block that mimics the Cloudflare downtime error screen.

== Description ==

Adds a block that mimics the Cloudflare downtime error screen. Use it to create error pages that look like the official Cloudflare error pages.

This plugin provides a Gutenberg block that displays a realistic Cloudflare error page mockup, perfect for:
- Creating custom 404 error pages
- Building error page templates
- Adding humorous error messages to your site
- Testing error page designs

= Features =

- **Customizable Error Codes**: Change the error code (e.g., 404, 500, 502) via block settings
- **Customizable Messages**: Edit the error message text to match your needs
- **IP Address Display**: Shows visitor IP address when they click "Click to reveal" (uses WordPress REST API, no external services)
- **Authentic Design**: Faithfully recreates the Cloudflare error page appearance
- **Easy to Use**: Simple block interface in the Gutenberg editor

This plugin is based on the [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) project, adapted as a WordPress block for the Gutenberg editor.

**Important Notice:** This plugin is not affiliated with, endorsed by, or connected to Cloudflare, Inc. This plugin is an independent project created for educational and entertainment purposes.

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

== Usage ==

1. After installing and activating the plugin, go to any page or post editor in WordPress.
2. Click the **+** button to add a new block.
3. Search for **"CDN Error Mockups"** or **"Cloudflare"** and select the block.
4. The block will appear with default settings. You can customize:
   - **Error Code**: Change the error code (e.g., 404, 500, 502, 503)
   - **Error Message**: Edit the error message text
5. Save or publish your page to see the error mockup on the frontend.

= Example Use Cases =

- Add to your site's 404 page template
- Create a maintenance mode page
- Use in page templates for error handling
- Add to custom page templates

== Source Code ==

The plugin’s JavaScript and CSS are built from source. The human-readable source is in the `src/` directory on [GitHub](https://github.com/sato-jp/cdn-error-mockups).

== Frequently Asked Questions ==

= Is this plugin officially supported by Cloudflare? =

No. This plugin is not affiliated with, endorsed by, or connected to Cloudflare, Inc. It is an independent project created for educational and entertainment purposes.

= Can I customize the error code and message? =

Yes! You can customize both the error code and error message through the block settings sidebar in the Gutenberg editor.

= Does this plugin collect user data? =

The plugin displays visitor IP addresses when they click "Click to reveal" using WordPress's built-in REST API endpoint. No external services are used, and no data is sent outside your WordPress installation. The IP address is determined from server variables (Cloudflare headers, proxy headers, or standard remote address).

= What WordPress version is required? =

This plugin requires WordPress 6.9 or higher and PHP 8.0 or higher.

= Can I use this on multiple pages? =

Yes! You can add the block to any page, post, or template as many times as you need.

== Contributing ==

Contributions are welcome! Here are ways you can contribute:

- **Report Bugs**: Open an issue on [GitHub](https://github.com/sato-jp/cdn-error-mockups/issues)
- **Suggest Features**: Share your ideas via GitHub issues
- **Submit Pull Requests**: Send pull requests with improvements or bug fixes
- **Improve Documentation**: Help improve the documentation

For more information, visit the [GitHub repository](https://github.com/sato-jp/cdn-error-mockups).

== Screenshots ==

1. Block placed in the "404 page" template
2. Error code and message can be changed in the settings sidebar
3. The "404 page" shown on the frontend

== Upgrade Notice ==

= 1.0.0 =

This is a major release. Please review the changelog for details.

== Changelog ==

= 1.0.3 =

* Current stable version

= 1.0.0 =

* Initial release



== Credits ==

This plugin is based on the idea and some code from [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) by donlon (MIT License). See [THIRD_PARTY_LICENSES.md](https://github.com/sato-jp/cdn-error-mockups/blob/main/THIRD_PARTY_LICENSES.md) for details.