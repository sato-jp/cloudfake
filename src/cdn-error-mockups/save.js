/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} root0            - The function parameters.
 * @param {Object} root0.attributes - The block attributes.
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const {
		title = 'Internal server error',
		errorCode = '500',
		whatHappened = "There is an internal server error on Cloudflare's network.",
		whatCanIDo = 'Please try again in a few minutes.',
		browserStatus = 'Working',
		browserLocation = 'You',
		browserName = 'Browser',
		browserStatusText = 'Working',
		cloudflareStatus = 'Error',
		cloudflareLocation = 'San Francisco',
		cloudflareName = 'Cloudflare',
		cloudflareStatusText = 'Error',
		hostStatus = 'Working',
		hostLocation = 'Website',
		hostName = 'Host',
		hostStatusText = 'Working',
		errorSource = 'cloudflare',
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div id="cf-wrapper">
				<div id="cf-error-details" className="p-0">
					<header className="mx-auto pt-10 lg:pt-6 lg:px-8 w-240 lg:w-full mb-8">
						<h1 className="inline-block sm:block sm:mb-2 font-light text-60 lg:text-4xl text-black-dark leading-tight mr-2">
							<span className="inline-block">{title}</span>{' '}
							<span className="code-label">
								Error code {errorCode}
							</span>
						</h1>
						<div>
							Visit{' '}
							<a
								href="https://www.cloudflare.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								cloudflare.com
							</a>{' '}
							for more information.
						</div>
					<div className="mt-3 cf-timestamp">
						2024-01-15 10:30:45
					</div>
					</header>
					<div className="my-8 bg-gradient-gray">
						<div className="w-240 lg:w-full mx-auto">
							<div className="clearfix md:px-8">
								<div
									id="cf-browser-status"
									className={`${errorSource === 'browser' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-browser block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${browserStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{browserLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
										{browserName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${browserStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{browserStatusText}
									</span>
								</div>
								<div
									id="cf-cloudflare-status"
									className={`${errorSource === 'cloudflare' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-cloud block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${cloudflareStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{cloudflareLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl font-light leading-1.3 color-cloudflare">
										{cloudflareName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${cloudflareStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{cloudflareStatusText}
									</span>
								</div>
								<div
									id="cf-host-status"
									className={`${errorSource === 'host' ? 'cf-error-source ' : ''}relative w-1/3 md:w-full py-15 md:p-0 md:py-8 md:text-left md:border-solid md:border-0 md:border-b md:border-gray-400 overflow-hidden float-left md:float-none text-center`}
								>
									<div className="relative mb-10 md:m-0">
										<span className="cf-icon-server block md:hidden h-20 bg-center bg-no-repeat"></span>
										<span
											className={`${hostStatus === 'Error' ? 'cf-icon-error' : 'cf-icon-ok'} w-12 h-12 absolute left-1/2 md:left-auto md:right-0 md:top-0 -ml-6 -bottom-4`}
										></span>
									</div>
									<span className="md:block w-full truncate">
										{hostLocation}
									</span>
									<h3 className="md:inline-block mt-3 md:mt-0 text-2xl text-gray-600 font-light leading-1.3">
										{hostName}
									</h3>{' '}
									<span
										className={`leading-1.3 text-2xl ${hostStatus === 'Error' ? 'color-error' : 'color-working'}`}
									>
										{hostStatusText}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-240 lg:w-full mx-auto mb-8 lg:px-8">
						<div className="clearfix">
							<div className="w-1/2 md:w-full float-left pr-6 md:pb-10 md:pr-0 leading-relaxed">
								<h2 className="text-3xl font-normal leading-1.3 mb-4">
									What happened?
								</h2>
								{whatHappened}
							</div>
							<div className="w-1/2 md:w-full float-left leading-relaxed">
								<h2 className="text-3xl font-normal leading-1.3 mb-4">
									What can I do?
								</h2>
								{whatCanIDo}
							</div>
						</div>
					</div>

					<div className="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
						<p className="text-13">
							<span className="cf-footer-item sm:block sm:mb-1">
								Ray ID:{' '}
								<strong className="font-semibold">
									abcdefghijklmnop
								</strong>
							</span>
							<span className="cf-footer-separator sm:hidden">
								{' '}
								•{' '}
							</span>
							<span className="cf-footer-item sm:block sm:mb-1">
								Your IP:{' '}
								<button
									type="button"
									className="cf-footer-ip-reveal-btn"
								>
									Click to reveal
								</button>
								<span className="hidden cf-footer-ip"></span>
								<span className="cf-footer-separator sm:hidden">
									{' '}
									•{' '}
								</span>
							</span>

							<span className="cf-footer-item sm:block sm:mb-1">
								<span>Performance &amp; security by</span>{' '}
								<a
									rel="noopener noreferrer"
									href="https://www.cloudflare.com/"
									id="brand_link"
									target="_blank"
								>
									Cloudflare
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
