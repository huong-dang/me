import { useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
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
        <AppContext.Provider
            value={{
                showTrailer,
                trailerUrl,
                updateShowTrailer,
                updateShowBookDetails,
                showBookDetails,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
