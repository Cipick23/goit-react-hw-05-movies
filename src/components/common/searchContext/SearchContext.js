// SearchContext.js
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');

  const updateSearchResults = (results, error) => {
    setSearchResults(results);
    setSearchError(error);
  };

  return (
    <SearchContext.Provider
      value={{ searchResults, searchError, updateSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
