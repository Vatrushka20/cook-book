import {useEffect, useState} from "react";
import axios from "axios";

export const useFullRecipe = (id) => {
    const [fullRecipe, setFullRecipe] = useState(null);
    const [error, setError] = useState(null);
    const fetchRecipe = async (id) => {
        let endpoint;
        if (id) {
            endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        } else {
            endpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
        }

        try {
            const response = await axios.get(endpoint);
            const {meals} = response.data;
            if (meals) {
                const recipeData = processRecipeData(meals[0]);
                setFullRecipe(recipeData);
            } else {
                setError('Recipe not found');
            }
        } catch (error) {
            setError('Error fetching recipe');
        }
    }
    const processRecipeData = (recipe) => {
        const ingredients = [];
        const measures = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(ingredient);
                measures.push(measure);
            } else {
                break;
            }
        }
        return {
            ...recipe, ingredients, measures
        }
    }

    useEffect(() => {
        fetchRecipe(id)
    }, [id])
    const fetchRandomRecipe = () => {
        fetchRecipe();
    }

    return {
        fullRecipe,
        error,
        fetchRandomRecipe
    };
};