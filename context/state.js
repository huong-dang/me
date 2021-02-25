import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");

    const updateShowTrailer = (trailer, trailerUrl) => {
        setShowTrailer(trailer);
        trailerUrl && trailerUrl.length > 0
            ? setTrailerUrl(trailerUrl)
            : setTrailerUrl("");
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
