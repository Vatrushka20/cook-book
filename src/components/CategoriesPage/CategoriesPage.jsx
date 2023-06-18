import './CategoriesPage.scss'
import React, {useContext, useEffect} from "react";
import {MyContext} from "../../context/context";
import RecipeCard from "../RecipeCard/RecipeCard";
import {IoHeart} from "react-icons/io5";
import {useFavorites} from "../../hooks/useFavorites";
import {Pagination} from "../Pagination/Pagination";
import {motion} from "framer-motion";

export const CategoriesPage = (props) => {
    const classes = "categories " + props.className;
    const {fetchCategoryList, fetchCategories, categories} = useContext(MyContext);
    const {categoryItem} = useContext(MyContext);
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    const {lastPostIndex, firstPostIndex, currentPage, postsPerPage, setCurrentPage} = useContext(MyContext);

    const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }
    const fetchCategoryHandler = (category) => {
        fetchCategoryList(category);
    };

    useEffect(() => {
        fetchCategories();
    }, [categories])

    return (
        <>
            <motion.div className={classes}
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
                {categories.map(item => (
                    <div className='categories__item' key={item.idCategory}>
                        <button onClick={() => fetchCategoryHandler(item.strCategory)}
                                className='item-title'>{item.strCategory}</button>
                    </div>
                ))}
            </motion.div>
            <div className='recipe-list wrapper'>
                {categoryItem.length > 0 ? categoryItem.slice(firstPostIndex, lastPostIndex).map((meal) => (
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
                    )
                ) : (
                    <h1 className='warning'>Click on the tag to see the result!!!</h1>
                )}
            </div>
            <Pagination totalPosts={categoryItem.length} postsPerPage={postsPerPage} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
        </>
    )
}
