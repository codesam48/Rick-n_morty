import { useState, useEffect, createContext } from "react";
export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setCharacters(data.results);
            }catch (error) {
                setError(error);
            }finally {
                setLoading(false);
            }
        }
        fetchCharacters();
    }, [])

    return (
        <FetchContext.Provider value={{ characters, loading, error }}>
            {children}
        </FetchContext.Provider>
    )
    
};

