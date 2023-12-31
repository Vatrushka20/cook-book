import './Favorites.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {IoHeart} from "react-icons/io5";
import {useFavorites} from "../../hooks/useFavorites";
import {motion} from "framer-motion";
import React, {useContext} from "react";
import {MyContext} from "../../context/context";
import {Pagination} from "../../components/Pagination/Pagination";

export const Favorites = () => {
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    const {lastPostIndex, firstPostIndex, currentPage, postsPerPage, setCurrentPage} = useContext(MyContext);
    const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }

    return (
        <>
            <motion.div className='favorites-page wrapper'
                        initial="initialState"
                        animate="animateState"
                        exit="exitState"
                        transition={{
                            duration: 0.75,
                        }}
                        variants={{
                            initialState: {
                                opacity: 0,
                            },
                            animateState: {
                                opacity: 1,
                            },
                        }}
            >
                {favorites.length > 0 ? favorites.slice(firstPostIndex, lastPostIndex).map((meal) => (
                    <RecipeCard className='favorites'
                                key={meal.idMeal}
                                onClick={() => addToFavorites(meal)}
                                title={meal.strMeal}
                                img={meal.strMealThumb}
                                link={'/full-recipe/' + meal.idMeal}
                                children={favoritesChecker(meal.idMeal)
                                    ? (
                                        <IoHeart color="red" fontSize='35px'
                                                 onClick={() => removeFromFavorites(meal.idMeal)}/>
                                    ) : (
                                        <IoHeart color="white" fontSize='35px'
                                                 onClick={() => addToFavorites(meal)}/>)
                                }
                    />
                )) : (
                    <h1 className='warning'>You don't have favorite recipes yet!</h1>
                )}
            </motion.div>
            <Pagination totalPosts={favorites.length} postsPerPage={postsPerPage} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
        </>
    )
}