import { useCallback, useState } from 'react';
import { getGifsBySearch } from '../api';
import { SearchResults } from '../components';

const SearchView = () => {
    const [search, setSearch] = useState();
    const [results, setResults] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            getGifsBySearch(search, setResults, setIsLoading, setHasError);
        },
        [search]
    );

    const handleKeyPress = useCallback(
        (event) => {
            if (event.key === 'Enter') {
                handleSubmit(event);
            }
        },
        [handleSubmit]
    );

    return (
        <div className="bg-dark container-fluid">
            <div className="text-center text-white pt-4 pb-3">
                <h1 className="text-white">GIF Viewer</h1>
                <p>Enter text in the search bar below to get results</p>
                <input
                    className="w-25 rounded"
                    placeholder="Search"
                    type="text"
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="rounded mx-2"
                    type="button"
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
            {hasError ? (
                <div className="text-white py-5 text-center">
                    There's a problem with your search
                </div>
            ) : (
                !isLoading && <SearchResults searchResults={results} />
            )}
        </div>
    );
};

export default SearchView;
