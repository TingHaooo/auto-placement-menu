const { test, expect } = require("@playwright/test");
const {
  default: pageWrapper,
} = require("../src/testUtils/playwright/PageWrapper");
const { items } = require("../src/App");

const thirdItem = items[2];
const lastItem = items[items.length - 1];

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Auto placement menu testing", () => {
  test.describe("Auto placement menu item is clickable", async () => {
    test("Can find menu item is exist on page", async ({ page: pg }) => {
      const page = pageWrapper(pg);
      await page.getByTestId("auto-placement-menu-toggle-button").click();
      await page.getByText(thirdItem.name).scrollIntoViewIfNeeded();
    });
  });

  test.describe("Auto placement menu item is clickable on various sizes of page", () => {
    test("Auto placement menu item is clickable on desktop device", async ({
      page: pg,
    }) => {
      const page = pageWrapper(pg);
      await page.setViewportSize({
        width: 1600,
        height: 1200,
      });
      await page.getByTestId("auto-placement-menu-toggle-button").click();
      await page.getByText(lastItem.name).scrollIntoViewIfNeeded();
      let isVisible = await page.checkSelectorIsInViewport(
        `[data-testid="auto-placement-menu-list"]`
      );
      expect(isVisible).toBeTruthy();
    });

    test("Auto placement menu item is clickable on tablet device", async ({
      page: pg,
    }) => {
      const page = pageWrapper(pg);
      await page.setViewportSize({
        width: 640,
        height: 480,
      });
      await page.getByTestId("auto-placement-menu-toggle-button").click();
      await page.getByText(lastItem.name).scrollIntoViewIfNeeded();
      let isVisible = await page.checkSelectorIsInViewport(
        `[data-testid="auto-placement-menu-list"]`
      );
      expect(isVisible).toBeTruthy();
    });

    test("Auto placement menu item is clickable on mobile device", async ({
      page: pg,
    }) => {
      const page = pageWrapper(pg);
      await page.setViewportSize({
        width: 350,
        height: 520,
      });
      await page.getByTestId("auto-placement-menu-toggle-button").click();
      await page.getByText(lastItem.name).scrollIntoViewIfNeeded();
      let isVisible = await page.checkSelectorIsInViewport(
        `[data-testid="auto-placement-menu-list"]`
      );
      expect(isVisible).toBeTruthy();
    });
  });
});
