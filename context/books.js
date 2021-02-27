import { useState, createContext, useContext } from "react";

const BooksContext = createContext();

export function BooksWrapper({ children }) {
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [showBookDetails, setShowBookDetails] = useState(false);

    const updateShowTrailer = (trailer, trailerUrl) => {
        setShowTrailer(trailer);
        trailerUrl && trailerUrl.length > 0
            ? setTrailerUrl(trailerUrl)
            : setTrailerUrl("");
    };

    const updateShowBookDetails = (bool) => {
        setShowBookDetails(bool);
    };

    return (
        <BooksContext.Provider
            value={{
                showTrailer,
                trailerUrl,
                updateShowTrailer,
                updateShowBookDetails,
                showBookDetails,
            }}
        >
            {children}
        </BooksContext.Provider>
    );
}

export function useAppContext() {
    return useContext(BooksContext);
}
