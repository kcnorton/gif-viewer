import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Gif } from '../components';
import { getGifById } from '../api';

const GifDetailView = () => {
    const params = useParams();
    const [giphy, setGiphy] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getGifById(params, setGiphy, setIsLoading, setHasError);
    }, [params, setGiphy, setIsLoading, setHasError, hasError]);

    return (
        <>
            {hasError ? (
                <h1 className="bg-dark text-center container-fluid text-white py-4">
                    There is a problem with your URL
                </h1>
            ) : (
                !isLoading && (
                    <div className="bg-dark text-center container-fluid text-white">
                        <h1 className="pt-4 pb-3">
                            <a
                                className="text-decoration-none text-white"
                                href={giphy.url}
                            >
                                {giphy.title}
                            </a>
                        </h1>
                        <Gif
                            className="rounded"
                            height={giphy.images.original.height}
                            width={giphy.images.original.width}
                            format="mp4"
                            src={giphy.images.original.mp4}
                        />
                        <div className="mb-3 mt-2">
                            {giphy.user && (
                                <>
                                    <Gif
                                        className="rounded-circle mx-2"
                                        format="webp"
                                        width={50}
                                        height={50}
                                        src={giphy.user.avatar_url}
                                    />
                                    <a
                                        className="text-decoration-none text-white"
                                        href={giphy.user.profile_url}
                                    >
                                        {giphy.user.display_name}
                                    </a>
                                </>
                            )}
                            <div className="my-3">
                                <p>
                                    <b>width:</b> {giphy.images.original.width},
                                    <b> height:</b>{' '}
                                    {giphy.images.original.height},
                                    <b> frames:</b>{' '}
                                    {giphy.images.original.frames}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default GifDetailView;
