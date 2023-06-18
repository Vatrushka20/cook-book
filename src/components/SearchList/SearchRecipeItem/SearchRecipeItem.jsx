import './SearchRecipeItem.scss';
import {Link} from "react-router-dom";

export const SearchRecipeItem = ({title, img, category, link, area, children}) => {
    return (
        <div className='recipe-container'>
            <Link className='recipe' to={link}>
                <img className='recipe__img' src={img} alt=''/>
                <div className='recipe__tag'>
                    <h4 className='tag-settings'>{category}</h4>
                    <h4 className='tag-settings'>{area}</h4>
                </div>
                <h2 className='recipe__title'>{title}</h2>
                <button className='recipe__button'>Full recipe</button>
            </Link>
            <div className='favorite-container'>{children}</div>
        </div>
    );
};