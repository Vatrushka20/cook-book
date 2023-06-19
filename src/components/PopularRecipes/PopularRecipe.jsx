import './PopularRecipe.scss';
import React, { useEffect, useState} from 'react';
import axios from "axios";
import {ButtonMore} from "../Button/ButtonMore/ButtonMore";
import {ButtonLess} from "../Button/ButtonLess/ButtonLess";
import RecipeCard from "../RecipeCard/RecipeCard";
import {useFavorites} from "../../hooks/useFavorites";
import {IoHeart} from "react-icons/io5";

export const PopularRecipe = () => {
    const [popularRecipe, setPopularRecipe] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(10);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }
    const showMore = () => {
        setItemsToShow(itemsToShow.length);
    };
    const showLess = () => {
        setItemsToShow(10);
    };
    const handleClickScroll = () => {
        const element = document.getElementById('popular-recipe');
        if (element) {
            element.scrollIntoView({behavior: 'auto'});
        }
    };

    const onLessClick = () => {
        showLess();
        handleClickScroll();
    };

    useEffect(() => {
        const getPopularRecipe = async () => {
            const data = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=French')
                .then(res => (res.data));
            setPopularRecipe(data.meals);
        };
        getPopularRecipe();

    }, [])
    return (
        <>
            <div className='popular-recipes wrapper'>
                <h2 className='title'>Popular Recipes</h2>
                <div className='popular-recipes__list'>
                    {popularRecipe.slice(0, itemsToShow).map(item => (
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
                    ))}
                </div>
            </div>
            {itemsToShow === 10 ? (
                <ButtonMore onClick={showMore} />
            ) : (
                <ButtonLess onClick={onLessClick} />
            )}
        </>
    );
};