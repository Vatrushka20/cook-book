import './LatestRecipes.scss';
import React, { useEffect, useState} from "react";
import axios from "axios";
import {ButtonLess} from "../Button/ButtonLess/ButtonLess";
import {ButtonMore} from "../Button/ButtonMore/ButtonMore";
import RecipeCard from "../RecipeCard/RecipeCard";
import {IoHeart} from "react-icons/io5";
import {useFavorites} from "../../hooks/useFavorites";

export const LatestRecipes = () => {
        const [latestRecipe, setLatestRecipe] = useState([]);
        const [itemsToShow, setItemsToShow] = useState(10);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
        const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }
        const showMoreItems = () => {
            setItemsToShow(itemsToShow.length)
        }
        const showLess = () => {
            setItemsToShow(10);
        }
        useEffect(() => {
            const getLatestRecipe = async () => {
                const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
                    .then(res => (res.data));
                setLatestRecipe(data.meals)
            }
            getLatestRecipe();
        }, []);


        return (
            <>
                <div className='latest-recipes wrapper'>
                    <h2 className='title'>Latest recipes</h2>
                    <div className='latest-recipes__list'>
                        {latestRecipe ? (
                            latestRecipe.slice(0, itemsToShow).map(item => (
                                <RecipeCard
                                    key={item.idMeal}
                                    title={item.strMeal}
                                    img={item.strMealThumb}
                                    link={'/full-recipe/' + item.idMeal}
                                    children={favoritesChecker(item.idMeal)
                                        ? (
                                            <IoHeart color="red" fontSize='35px'
                                                         onClick={() => removeFromFavorites(item.idMeal)}/>
                                        ) : (
                                            <IoHeart color="white" fontSize='35px'
                                                         onClick={() => addToFavorites(item)}/>)
                                    }
                                />
                            ))
                        ) : (
                            <h2>No results</h2>
                        )}
                    </div>
                </div>
                {(itemsToShow === 10) ? <ButtonMore onClick={showMoreItems}/> : <ButtonLess onClick={showLess}/>}
            </>
        );
    }
;

// #898884