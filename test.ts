import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
await page.goto('http://testapp.galenframework.com');
await page.click("button.btn.btn-lg");
await page.fill("input[placeholder='Username']","testuser@example.com");
await page.fill("input[placeholder='Password']","test123");
await page.click('button:has-text("Login")');

await page.waitForSelector("#my-notes-page");
await expect(page.locator('div#header>div')).toContainText(" Sample Website ");

});