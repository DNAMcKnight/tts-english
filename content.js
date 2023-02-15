(() => {
  console.log("contentScript!");
  // document.getElementsByClassName('style-scope ytd-menu-renderer')[18].click();
  // document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[0].click();
  // document.getElementsByClassName('style-scope ytd-menu-renderer')[0].click();
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    console.log(type, value, videoId);
});
})();

// console.log("content.js");
// doc = document
// document.getElementsByClassName('style-scope ytd-menu-renderer')[18].click();
// document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[0].click();
// document.getElementsByClassName('style-scope ytd-menu-service-item-renderer')[0].click();
// // This function is called every time a new video is played
// function onNewVideo() {
//   // Check if we're on the page with the shorts
//   console.log("onNewVideo");
//   if (window.location.href.includes("https://www.youtube.com/shorts/")) {
//     // Increment the number of videos watched
//     videosWatched++;

//     // Log the number of videos watched in the console
//     console.log(`Videos watched: ${videosWatched}`);

//     // Check if the number of videos watched is greater than 20 or the total time spent watching videos is greater than 30 minutes
//     if (videosWatched > 5 || totalTimeSpentWatchingVideos > 30 * 60) {
//       // Show a notification
//       browser.notifications.create({
//         "type": "basic",
//         "iconUrl": browser.extension.getURL("icon.png"),
//         "title": "YouTube Shorts Warning",
//         "message": "You have watched more than 20 videos or spent more than 30 minutes watching shorts. Time to take a break!"
//       });
//     }
//   }
// }
