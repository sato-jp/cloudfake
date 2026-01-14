/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
/* eslint-env browser */

// Check if we're in the WordPress block editor
function isBlockEditor() {
	return (
		// eslint-disable-next-line no-undef
		globalThis.wp?.blockEditor ||
		document.body.classList.contains('block-editor-page') ||
		document.querySelector('.block-editor-writing-flow')
	);
}

// Generate a random Ray ID and replace on page load
function initRayId() {
	const rayId = Array.from({ length: 16 }, () =>
		Math.floor(Math.random() * 16).toString(16)
	).join('');

	// Find all Ray ID elements (handle multiple blocks on same page)
	document.querySelectorAll('.cf-footer-item').forEach((item) => {
		const text = item.textContent;
		if (text.includes('Ray ID:')) {
			const strong = item.querySelector('strong');
			if (strong) {
				strong.textContent = rayId;
			}
		}
	});
}

// Update timestamp to current time on page load
function initTimestamp() {
	const now = new Date();
	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});
	const parts = formatter.formatToParts(now);
	const timestamp = `${parts.find(p => p.type === 'year').value}-${parts.find(p => p.type === 'month').value}-${parts.find(p => p.type === 'day').value} ${parts.find(p => p.type === 'hour').value}:${parts.find(p => p.type === 'minute').value}:${parts.find(p => p.type === 'second').value}`;

	// Find all timestamp elements (handle multiple blocks on same page)
	document.querySelectorAll('.cf-timestamp').forEach((el) => {
		el.textContent = timestamp;
	});
}

// Front-end behavior: reveal client IP when the "Click to reveal" button is pressed.
function initIpReveal() {
	// Don't run in the block editor
	if (isBlockEditor()) {
		return;
	}
	function findIpSpan(button) {
		// try to find a nearby element with class 'cf-footer-ip'
		const el = button.closest('.cf-footer-item');
		if (el) {
			const span = el.querySelector('.cf-footer-ip');
			if (span) {
				return span;
			}
		}
		// fallback: next sibling
		if (
			button.nextElementSibling &&
			button.nextElementSibling.classList.contains('cf-footer-ip')
		) {
			return button.nextElementSibling;
		}
		return null;
	}

	async function fetchIp() {
		try {
			const res = await fetch('https://api.ipify.org?format=json');
			if (!res.ok) {
				return 'Unavailable';
			}
			const data = await res.json();
			return data.ip || 'Unavailable';
		} catch (_e) {
			return 'Unavailable';
		}
	}

	document.addEventListener('click', async (e) => {
		const btn = e.target.closest('.cf-footer-ip-reveal-btn');
		if (!btn) {
			return;
		}
		const ipSpan = findIpSpan(btn);
		if (!ipSpan) {
			return;
		}

		if (ipSpan.classList.contains('hidden')) {
			// 初期状態: IPを表示する
			// IPがまだ取得されていない場合は取得する
			if (!ipSpan.textContent.trim()) {
				ipSpan.textContent = '…';
				const ip = await fetchIp();
				ipSpan.textContent = ip;
			}
			ipSpan.classList.remove('hidden');
			// IPが表示されたらボタンを非表示にする
			btn.classList.add('hidden');
		} else {
			// IPが既に表示されている状態: 再び隠す
			ipSpan.classList.add('hidden');
			// ボタンを再表示して、再度クリック可能にする
			btn.classList.remove('hidden');
		}
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		initRayId();
		initTimestamp();
		initIpReveal();
	});
} else {
	initRayId();
	initTimestamp();
	initIpReveal();
}
