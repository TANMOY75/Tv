const search = (searchTerm) => {
    const channels = document.querySelectorAll('.card');
    const urlParams = new URLSearchParams(window.location.search);
  
    // Update URL search parameter
    if (searchTerm.trim() !== '') {
      urlParams.set('search', searchTerm);
    } else {
      urlParams.delete('search');
    }
  
    // Update the URL without reloading the page
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
  
    channels.forEach((channel) => {
      const name = channel.querySelector('.font-bold').textContent.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        channel.style.display = 'block';
      } else {
        channel.style.display = 'none';
      }
    });
  };
  
  const init = () => {
    const searchInput = document.getElementById('portexe-search-input');
  
    // Check for search parameter on page load
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
  
    if (searchParam) {
      search(searchParam);
      searchInput.value = searchParam; // Set input value to the search parameter
    }
  
    searchInput.addEventListener('keyup', (e) => {
      search(e.target.value);
    });
  };
  
  // Call the init function to start the process
  init();
