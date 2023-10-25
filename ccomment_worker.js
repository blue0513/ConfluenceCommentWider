const CONFLUENCE_URL_PART = ".atlassian.";

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (!url.includes(CONFLUENCE_URL_PART)) {
    return;
  }

  const injectionCSS = {
    target: { tabId: tabId },
    files: ["style.css"],
  };
  insertCSS(injectionCSS);
});

function insertCSS(css) {
  chrome.scripting.insertCSS(css);
}
