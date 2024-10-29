const tagIntervalForRemoveElms = setInterval(() => {
	try {
		const tag = window.KiwiSizing.data.tags ?? '';
		const toBeRemovedItems = document.querySelectorAll('');
		if (tag === 'FlyBundles' && toBeRemovedItems.length > 0) {
			toBeRemovedItems.forEach((item) => {
				item.remove();
			});
			clearInterval(tagIntervalForRemoveElms);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);