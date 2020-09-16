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

		const items = [
			'God of War 4',
			'witcher 3',
			'diablo 3',
			'gta 5',
			'fortnite',
			'horizon zero dawn',
			'red dead redemption 2',
			'bloodborne',
			'fifa 20',
			'mortal kombat 11'
		];

		openMainSite();
		checkLinks();
		addToTheCard();
		sumOfItems();

		function openMainSite() {
			client
				.url('https://www.bestbuy.com/')
				.maximizeWindow()
				.windowHandle(({ value }) => (originalHandle = value))
				.waitForElementVisible('body', 5 * 1000)
				.click('img[alt="United States"]')
				.waitForElementVisible('body', 5 * 1000)
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

		function addToTheCard() {
			items.forEach(item => addToCard(item));
		}

		function addToCard(item) {
			client
				.setValue('input#gh-search-input', item)
				.click('.search-bar button[type=submit]')
				.pause(3 * 1000)
				.click('.fulfillment-add-to-cart-button')
				.pause(3 * 1000)
				.click('.btn-default-link.close-modal-x')
				.pause(3 * 1000)
				.click('.clear-search-icon')
				.pause(3 * 1000);
		}
		function sumOfItems() {
			client
				.click('.shop-cart-icon a:nth-child(1)')
				.pause(5 * 1000)
                .saveScreenshot('cardUsing.png')
				.getText('.price-summary__total-value', result => console.log(result.value));
		}
			
	}
};
