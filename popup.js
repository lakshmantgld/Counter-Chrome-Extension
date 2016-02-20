/**
 * simplest google chrome extension for couting the delimiter separated objects.
 * chrome.tabs.executeScript api of chrome extension is used to get text from the page.
 */
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript( {
   code: "window.getSelection().toString();"
    }, function(selection) {
        if(selection[0].indexOf(',') === -1){
          renderStatus('No. of literals is ' + selection[0].split(' ').length);
        } else {
          renderStatus('No. of literals is ' + selection[0].split(',').length);
        }

    });
});
