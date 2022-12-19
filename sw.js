// Listen for messages from the popup window
self.addEventListener('message', event => {
  // Check if the message contains a filter string
  if (event.data.filterString) {
    // Send a message to all controlled clients with the filter string
    clients.matchAll({
      type: 'window',
    }).then(windowClients => {
      for (const windowClient of windowClients) {
        windowClient.postMessage({filterString: event.data.filterString});
      }
    });
  }

  // Check if the message contains a clear filter flag
  if (event.data.clearFilter) {
    // Send a message to all controlled clients to clear the filter
    clients.matchAll({
      type: 'window',
    }).then(windowClients => {
      for (const windowClient of windowClients) {
        windowClient.postMessage({clearFilter: true});
      }
    });
  }
});
