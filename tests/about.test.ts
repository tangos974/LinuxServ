import { test, expect } from '@playwright/test';

test('should click the About link and navigate correctly', async ({ page }) => {
	await page.goto('http://localhost:4173/'); // Test redirection to about page

	// Wait for navigation and verify the URL
	await expect(page).toHaveURL('http://localhost:4173/about');

	const header = page.locator('h1');
	await expect(header).toHaveText('Tanguy Frémont');
});
