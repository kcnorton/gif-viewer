import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Gif } from './Gif';

export const SearchResults = (props) => {
    const searchResultsArray = useMemo(() => {
        return props.searchResults.map((result) => {
            return (
                <div className="col-sm-3 col-xs-12 py-3 px-0 mx-0">
                    <Link
                        to={{ pathname: `/gif/${result.id}` }}
                        key={result.id}
                    >
                        <Gif
                            className="rounded border border-dark shadow"
                            format="webp"
                            width={300}
                            height={300}
                            src={result.images.fixed_width.webp}
                        />
                    </Link>
                </div>
            );
        });
    }, [props.searchResults]);

    return (
        <div className="container-fluid py-5 text-center">
            {searchResultsArray.length === 0 ? (
                <h2 className="text-white">No results found :(</h2>
            ) : (
                <h2 className="text-white">Results</h2>
            )}
            <div className="container-fluid d-flex">
                <div className="row">{searchResultsArray}</div>
            </div>
        </div>
    );
};
