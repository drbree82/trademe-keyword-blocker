// Listen for messages from the service worker
self.addEventListener('message', event => {
  // Check if the message contains a filter string
  if (event.data.filterString) {
    // Get all the listings on the page
    const listings = document.querySelectorAll('.ListingCard');

    // Loop through the listings and check if they contain the filter string
    for (const listing of listings) {
      if (listing.textContent.includes(event.data.filterString)) {
        // If the listing contains the filter string, hide it
        listing.style.display = 'none';
      }
    }
  }

  // Check if the message contains a clear filter flag
  if (event.data.clearFilter) {
    // Get all the listings on the page
    const listings = document.querySelectorAll('.ListingCard');

    // Loop through the listings and show them
    for (const listing of listings) {
      listing.style.display = 'block';
    }
  }
});
