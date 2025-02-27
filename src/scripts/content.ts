chrome.runtime.sendMessage({
    action: "fetchData",
    url: "https://jsonplaceholder.typicode.com/users"
  }, (response) => {
    if (!response.success) {
      console.error("Error: ", response.error);
      return;
    }
    console.log("Response: ", response.data);
});
