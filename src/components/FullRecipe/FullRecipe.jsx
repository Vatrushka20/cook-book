import './FullRecipe.scss';
import {useLocation, useParams} from "react-router-dom";
import {Error} from "../Error/Error";
import {Loading} from "../Loading/Loading";
import {useFullRecipe} from "../../hooks/useFullRecipe";
import {IoHeart} from "react-icons/io5";
import ReactPlayer from "react-player";
import {useFavorites} from "../../hooks/useFavorites";
import {motion} from "framer-motion";

export const FullRecipe = (props) => {
    const {id} = useParams();
    const {fullRecipe, error, fetchRandomRecipe} = useFullRecipe(id);
    const isRandomRoute = useLocation().pathname === '/full-recipe/random';
    const {favorites, addToFavorites, removeFromFavorites} = useFavorites();
    const handleRandomRecipe = () => {
        fetchRandomRecipe();
    }
    const favoritesChecker = (idMeal) => {
        return favorites.some((meal) => meal.idMeal === idMeal);
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <motion.div className='full-recipe'
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
            // initial={{opacity: 0}}
            // animate={{opacity: 1}}
            // exit={{opacity: 0}}
        >
            {fullRecipe ? (
                <div className='full-recipe__list wrapper' key={fullRecipe.idMeal}>
                    <div className='full-recipe__list__header'>
                        <h2 className="header-title">{fullRecipe.strMeal}</h2>
                        {isRandomRoute && <button className='btn button-full-recipe' onClick={handleRandomRecipe}>Generate</button>}
                    </div>
                    <div className='full-recipe__list__info'>
                        <div className='meal-picture'>
                            <img className="meal-img" src={fullRecipe.strMealThumb} alt="meal"/>
                            {favoritesChecker(fullRecipe.idMeal)
                                ? (
                                    <IoHeart className='icon-heart' color="red" fontSize='40px'
                                             onClick={() => removeFromFavorites(fullRecipe.idMeal)}/>
                                ) : (
                                    <IoHeart className='icon-heart' color="white" fontSize='40px'
                                             onClick={() => addToFavorites(fullRecipe)}/>)
                            }
                        </div>


                        <div className='meal-ingredients'>
                            <ul className='meal-ingredients__list'>
                                <p className='ingredients-title'>Ingredients</p>
                                {fullRecipe.ingredients.map((ingredient, index) => (
                                    <li className='meal-ingredients__list__item' key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <ul className='meal-ingredients__list'>
                                <p className='ingredients-title'>Measures</p>
                                {fullRecipe.measures.map((measure, index) => (
                                    <li className='meal-ingredients__list__item' key={index}>{measure}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='full-recipe__list__instructions'>
                        <p className='instr-title'>Instructions:</p>
                        <p className='instruction'>{fullRecipe.strInstructions}</p>
                    </div>
                    <div className='react-player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={fullRecipe.strYoutube}
                            controls={true}
                        />
                    </div>

                </div>
            ) : <Loading/>
            }
        </motion.div>
    );
};