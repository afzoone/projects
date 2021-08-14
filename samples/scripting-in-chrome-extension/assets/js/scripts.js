/*global chrome*/
const { tabs, scripting } = chrome,
  scriptingButton = document.getElementById("scripting-button"),
  tabsOptions = { active: true };

window.onload = () => {
  scriptingButton.addEventListener("click", handleScripting);
};

function handleScripting() {
  tabQuery((tabs) => {
    const tab = tabs[0];
    scripting.executeScript({
      target: { tabId: tab.id },
      files: ["assets/js/scripting.js"],
    });
  });
}

function tabQuery(callback, options = tabsOptions) {
  return tabs.query(options, (tabs) => callback(tabs));
}
