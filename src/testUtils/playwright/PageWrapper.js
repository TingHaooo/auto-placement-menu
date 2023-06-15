/**
 * Wrap playwright page object
 * So we can extend some custom methods
 */

const pageWrapper = (pg) => {
  const page = Object.create(pg);

  page.checkSelectorIsInViewport = async (selector) => {
    const isVisible = await page.evaluate((selector) => {
      let isVisible = false;
      let element = document.querySelector(selector);

      if (element) {
        let rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0) {
          const vw = window.innerWidth || 0;
          const vh = window.innerHeight || 0;
          if (rect.right <= vw && rect.bottom <= vh) {
            isVisible = true;
          }
        }
      }
      return isVisible;
    }, selector);

    return isVisible;
  };

  return page;
};

export default pageWrapper;
