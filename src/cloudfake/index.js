/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
// import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit.js';
import save from './save.js';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,

	// icon: icon,
	icon: {
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 512 512"
			>
				<path d="M441,290.8c.2-2.4.3-4.8.3-7.2,0-41.6-33.9-75.5-75.5-75.5s-9,.4-13.4,1.2c-5.5-23.2-17.9-44.3-35.8-60.5-21.8-19.7-49.9-30.5-79.3-30.5s-56.3,10.4-77.9,29.3c-18.4,16.2-31.3,37.5-37.1,61.1-50.9.6-92.2,42.2-92.2,93.3s41.8,93.3,93.3,93.3h305.3c29.2,0,52.9-23.7,52.9-52.9s-17.4-46-40.7-51.5ZM428.8,370.2h-178.1l29.8-63.2-39.7-19.9,26.4-52.8c3.1-6.2.6-13.7-5.6-16.8-6.2-3.1-13.7-.6-16.8,5.6l-37.6,75.2,40.3,20.1-24.4,51.8h-99.6c-37.6,0-68.3-30.6-68.3-68.3s30.6-68.3,68.3-68.3,5.2.1,7.7.4l12.1,1.4,1.7-12c6.4-45.7,46.1-80.1,92.3-80.1s45.3,8.5,62.5,24.1c17,15.4,27.8,36.4,30.2,59.1l1.8,16.4,15.3-6.1c5.9-2.4,12.2-3.6,18.7-3.6,27.8,0,50.5,22.6,50.5,50.5s-.7,10-2.2,14.7l-5.3,17.3,18-1.2c.7,0,1.3,0,1.9,0,15.4,0,27.9,12.5,27.9,27.9s-12.5,27.9-27.9,27.9Z" />
			</svg>
		),
	},
});
