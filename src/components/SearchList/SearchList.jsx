import './SearchList.scss';
import React, {useContext} from "react";
import {MyContext} from "../../context/context";
import {SearchRecipeItem} from "./SearchRecipeItem/SearchRecipeItem";
import {IoHeart} from "react-icons/io5";
import {useFavorites} from "../../hooks/useFavorites";
import {Pagination} from "../Pagination/Pagination";

export const SearchList = () => {
    const {meal} = useContext(MyContext);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    const {lastPostIndex, firstPostIndex, currentPage, postsPerPage, setCurrentPage} = useContext(MyContext);
    const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }

    if (!meal) return <p className='warning'>No results. Try something else...</p>

    return (
        <div className='search-recipe wrapper'>
            <div className='search-recipe__meals'>
                {meal.length > 0 ? meal.slice(firstPostIndex, lastPostIndex).map((meal) => (
                        <SearchRecipeItem
                            key={meal.idMeal}
                            img={meal.strMealThumb}
                            title={meal.strMeal}
                            category={meal.strCategory}
                            area={meal.strArea}
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
                    )
                ) : (
                    <h1 className='warning'>No results. Try to type something...</h1>
                )}
            </div>
            <Pagination
                totalPosts={meal.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}