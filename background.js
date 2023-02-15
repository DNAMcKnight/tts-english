console.log("working!");
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log('Current URL:', tabs[0].url);
      // chrome.notifications.create({
      //   "type": "basic",
      //   "title": "YouTube Shorts Warning",
      //   "iconUrl": 'icon.png',
      //   "message": "You have watched more than 20 videos or spent more than 30 minutes watching shorts. Time to take a break!",
      //   "silent": false
      // });
    });
  }
});


// chrome.runtime.onMessage.addListener(
  // function(request, sender, sendResponse) {
    // console.log('Videos watched: ' + request.videosWatched);
    // console.log('Time spent: ' + request.timeSpent + ' minutes');
    // if (request.timeSpent > 30 || request.videosWatched > 20) {
      // var notificationOptions = {
        // type: 'basic',
        // iconUrl: 'icon.png',
        // title: 'Short Watcher',
        // message: 'You have spent more than 30 minutes or watched more than 20 videos'
      // };
      // chrome.notifications.create('shortWatcherNotification', notificationOptions);
    // }
  // });
