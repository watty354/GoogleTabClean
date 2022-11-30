'use strict';
document.addEventListener("DOMContentLoaded", function() {
    chrome.windows.getCurrent(function(currentWindow) {
        chrome.tabs.query({ windowId: currentWindow.id }, function(tabs) {
            for (let i = 0; i < tabs.length; i++) {
                chrome.tabs.remove(tabs[i].id);
            }
            chrome.tabs.create({});
        });
    });

})