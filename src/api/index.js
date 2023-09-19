const API_KEY = 'NM5Q4wi4eOILRobemef0hJdBK2hOKIi2';
const GIPHY_SEARCH_URL = `https://api.giphy.com/v1/gifs/search`;
const GIPHY_GET_BY_ID_URL = `https://api.giphy.com/v1/gifs/`;
const API_LIMIT = 25;

export const getGifsBySearch = (
    search,
    setResults,
    setIsLoading,
    setHasError
) => {
    const GIPHYSearchUrl = `${GIPHY_SEARCH_URL}?api_key=${API_KEY}&q=${search}&limit=${API_LIMIT}&offset=0&rating=g&lang=en&bundle=clips_grid_picker`;
    fetch(GIPHYSearchUrl)
        .then((results) => {
            if (results.status === 404) {
                setHasError(true);
                return Promise.reject('404 error');
            }
            return results.json();
        })
        .then((data) => {
            setResults(data.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getGifById = (params, setGiphy, setIsLoading, setHasError) => {
    const GIPHYGetUrl = `${GIPHY_GET_BY_ID_URL}${params.id}?api_key=${API_KEY}&rating=g`;
    fetch(GIPHYGetUrl)
        .then((results) => {
            if (results.status === 404) {
                setHasError(true);
                return Promise.reject('404 error');
            }
            return results.json();
        })
        .then((data) => {
            setGiphy(data.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
};
