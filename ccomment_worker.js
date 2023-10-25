let widen = true;

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId }) => {
  const enabled = getEnabled();
  const injectionCSS = {
    target: { tabId: tabId },
    files: ["style.css"],
  };

  toggleCSS(enabled, injectionCSS);
  toggleIcon(enabled);
});

chrome.action.onClicked.addListener(() => {
  setEnabled(!getEnabled());
  reload();
});

function reload() {
  chrome.tabs.reload();
}

function getEnabled() {
  return widen;
}

function setEnabled(value) {
  widen = value;
}

function toggleCSS(enabled, css) {
  if (enabled) {
    chrome.scripting.insertCSS(css);
  } else {
    chrome.scripting.removeCSS(css);
  }
}

function toggleIcon(enabled) {
  const icon = enabled
    ? "favicon/favicon16.png"
    : "favicon/favicon_disabled.png";
  chrome.action.setIcon({ path: icon });
}
