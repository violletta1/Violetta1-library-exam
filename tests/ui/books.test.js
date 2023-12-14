const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://violetta1-library-exam.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  