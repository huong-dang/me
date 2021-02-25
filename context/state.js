import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showTrailer, setShowTrailer] = useState(true);
    const defaultTrailer = "https://www.youtube.com/embed/u_17_kRZNFU";
    const [trailerUrl, setTrailerUrl] = useState(
        "https://www.youtube.com/embed/u_17_kRZNFU"
    );

    const updateShowTrailer = (trailer, trailerUrl) => {
        setShowTrailer(trailer);
        trailerUrl && trailerUrl.length > 0
            ? setTrailerUrl(trailerUrl)
            : setTrailerUrl(defaultTrailer);
    };

    return (
        <AppContext.Provider
            value={{
                showTrailer,
                trailerUrl,
                updateShowTrailer,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
