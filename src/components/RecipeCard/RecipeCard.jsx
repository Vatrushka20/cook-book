import './RecipeCard.scss';
import {Link} from "react-router-dom";

const RecipeCard = ({link, img, title, children}) => {
    return (
        <div className='recipe-card'>
            <div className='favorite-container'>{children}</div>
            <Link to={link}>
                <img className='recipe-card__img' src={img} alt=''/>
                <h2 className='recipe-card__title'>{title}</h2>
            </Link>
        </div>
    );
};

export default RecipeCard;