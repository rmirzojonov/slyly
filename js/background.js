chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(!tab.url || !tab.url.includes("wikipedia")) return;
        
    let match = tab.url.match(/https?:\/\/([a-z]{2}\.)?(wikipedia\.org)\/.*/);
    if(!match) return;

    let newUrl = match[0];
    newUrl = newUrl.replace(match[2], "0" + match[2]);
    chrome.tabs.update(tabId, { url: newUrl });
});