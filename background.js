var host = "https://old.reddit.com"
var regex = /^https?:\/\/(?:www.reddit.com|reddit.com)([\S\s]*)/

chrome.webRequest.onBeforeRequest.addListener(
  function(details){
    return {redirectUrl: host + details.url.match(regex)[1]}
  },
  {
    urls: [
      "*://www.reddit.com/*",
      "*://reddit.com/*"
    ]
  },
  ["blocking"]
);
