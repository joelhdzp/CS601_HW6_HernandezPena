import { useState } from 'react';

// Help tab component with search bar and simulated loading state
function HelpTab() {
  const [isSearching, setIsSearching] = useState(false);    // Tracks search loading
  const [searchText, setSearchText] = useState('');         // Input state

  // Simulate a search/loading when the button is clicked
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1000);          //Reset after 1 second
  };

  return (
        /* Search form [input bar and search button] with loading cursor when searching */
        <div className='help-form'>
            <form onSubmit={handleSearch}
                style={{cursor: isSearching ? 'wait' : 'auto'}}>
                <input type="text"
                    placeholder="How can we help you?"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    disabled={isSearching}
                />
                <button type="submit"
                    disabled={isSearching}
                    style={{background: isSearching ? '#eee' : '#333',
                    color: isSearching ? 'black' : 'white',
                    cursor: isSearching ? 'wait' : 'pointer'}}>
                    {isSearching ? "Searching..." : "Search"}
                </button>
            </form>
        </div>
    )
}

export default HelpTab;