import {useEffect, useState} from "react";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (item) => {
        const updatedFavorites = [...favorites, item];
        setFavorites(updatedFavorites);
    };

    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((item) => item.idMeal !== id);
        setFavorites(updatedFavorites);
    };

    return { favorites, addToFavorites, removeFromFavorites };
};