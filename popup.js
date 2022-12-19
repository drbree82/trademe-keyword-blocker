// Get the input field and buttons
const filterStringInput = document.getElementById('filter-string');
const applyFilterButton = document.getElementById('apply-filter');
const clearFilterButton = document.getElementById('clear-filter');

// Add event listeners to the buttons
applyFilterButton.addEventListener('click', () => {
  // Get the value of the input field
  const filterString = filterStringInput.value;

  // Send a message to the service worker with the filter string
  navigator.serviceWorker.controller.postMessage({filterString});
});

clearFilterButton.addEventListener('click', () => {
  // Send a message to the service worker to clear the filter
  navigator.serviceWorker.controller.postMessage({clearFilter: true});
});
