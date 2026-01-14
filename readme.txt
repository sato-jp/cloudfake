=== Cloudfake ===
Contributors: hiroshisato, pixelium  
Donate link: https://github.com/sponsors/sato-jp  
Tags: block, cloudflare, joke, 404  
Requires at least: 6.9  
Tested up to: 6.9  
Stable tag: 1.0.0  
Requires PHP: 8.0  
License: GPLv2 or later  
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds a block that mimics the Cloudflare downtime error screen.

== Description ==

Adds a block that mimics the Cloudflare downtime error screen. With this block, you can easily create error pages styled just like the official Cloudflare error pages.

This plugin is based on the [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) project, adapted as a WordPress block for the Gutenberg editor.

**Important Notice:** This plugin is not affiliated with, endorsed by, or connected to Cloudflare, Inc. The name "Cloudfake" is a combination of "Cloud" (referring to cloud services in general) and "Fake" (referring to a fake/parody error page), and is not intended to infringe on any trademarks. This plugin is an independent project created for educational and entertainment purposes.

== External services ==

This plugin uses the ipify API service to obtain the visitor's IP address. This is needed to display the IP address when the "Click to reveal" button is clicked in the error page block.

The IP address is only fetched when the user explicitly clicks the "Click to reveal" button. No data is sent to the service; only a GET request is made to retrieve the visitor's public IP address.

This service is provided by ipify: [terms of use](https://www.ipify.org/terms), [privacy policy](https://www.ipify.org/privacy).

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload the plugin files to the `/wp-content/plugins/cloudfake/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= A question that someone might have =

An answer to that question.

= What about foo bar? =

Answer to foo bar dilemma.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png` (or jpg, jpeg, gif).
2. This is the second screen shot

== Upgrade Notice ==

= 1.0.0 =

This is a major release. Please review the changelog for details.

== Changelog ==

= 1.0.0 =

* Initial release



== Credits ==

This plugin is based on the [cloudflare-error-page](https://github.com/donlon/cloudflare-error-page) project by donlon, which is licensed under the MIT License. See [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) for details.