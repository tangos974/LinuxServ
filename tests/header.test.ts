import { test, expect } from '@playwright/test';

test('should navigate to the homepage and check the title', async ({ page }) => {
  await page.goto('http://localhost:4173');

  // Check the page title
  await expect(page).toHaveTitle("TF's blog");
});