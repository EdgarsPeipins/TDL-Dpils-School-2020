module.exports = {
	function(client) {
		let originalHandle;

		const links = [
			{
				selector: '.social-links a:nth-child(1)',
				url: 'https://www.facebook.com/bestbuy'
			},
			{
				selector: '.social-links a:nth-child(2)',
				url: 'https://twitter.com/BestBuy'
			},
			{
				selector: '.social-links a:nth-child(3)',
				url: 'https://www.instagram.com/bestbuy/'
			},
			{
				selector: '.social-links a:nth-child(4)',
				url: 'https://www.pinterest.com/bestbuy/'
			}
		];

		openMainSite();
		checkLinks();

		function openMainSite() {
			client
				.url('https://www.bestbuy.com/')
				.maximizeWindow()
				.windowHandle(({ value }) => (originalHandle = value))
				.pause(5 * 1000)
				.click('img[alt="United States"]')
				.pause(5 * 1000)
				.click('button.c-close-icon.c-modal-close-icon')
				.pause(5 * 1000);
		}

		function checkLinks() {
			client.perform(() => {
				links.forEach(({ selector, url }) => checkLink(selector, url));
			});
		}

		function checkLink(linkSelector, urlLink) {
			client
				.click(linkSelector)
				.windowHandles(({ value }) => {
					const handles = value;

					handles.forEach(handle => {
						if (handle !== originalHandle) {
							client.switchWindow(handle);
						}
					});
				})
				.waitForElementVisible('body', 5 * 1000)
				.verify.urlContains(urlLink)
				.closeWindow()
				.perform(() => client.switchWindow(originalHandle))
				.pause(3 * 1000);
		}
	}
};
