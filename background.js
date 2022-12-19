// Listen for messages from the popup window
self.addEventListener('message', event => {
  // Check if the message contains a filter string
  if (event.data.filterString) {
    // Send a message to the current tab with the filter string
    clients.matchAll({
      includeUncontrolled: true,
      type: 'window',
    }).then(windowClients => {
      for (const windowClient of windowClients) {
        windowClient.postMessage({filterString: event.data.filterString});
      }
    });
  }

  // Check if the message contains a clear filter flag
  if (event.data.clearFilter) {
    // Send a message to the current tab to clear the filter
    clients.matchAll({
      includeUncontrolled: true,
      type: 'window',
    }).then(windowClients => {
      for (const windowClient of windowClients) {
        windowClient.postMessage({clearFilter: true});
      }
    });
  }
});
navigator.serviceWorker.register('/sw.js').then(registration => {
  console.log('Service worker registered');
}).catch(error => {
  console.error('Error registering service worker:', error);
});
