import axios from "axios";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchData" && message.url) {
    axios.get(message.url)
      .then((res) => {
        console.log(res);
        sendResponse({ success: true, data: res.data });
      })
      .catch((error) => {
        sendResponse({ success: false, error: error.message });
      });
  }
  
  return true;
});
