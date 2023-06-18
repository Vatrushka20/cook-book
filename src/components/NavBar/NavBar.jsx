import './NavBar.scss';
import logo from '../../assets/logo-no-background.svg'
import {Link} from "react-router-dom";
import {SearchInput} from "../SearchInput/SearchInput";
import {useContext, useState} from "react";
import {MyContext} from "../../context/context";
import Burger from "../Burger/Burger";

export const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {fetchHomePage} = useContext(MyContext);
    const fetchMealsHandler = () => {
        fetchHomePage(searchTerm);
    };
    const searchRecipe = (evt) => {
        if (evt.key === 'Enter') {
            fetchHomePage(searchTerm)
        }
    }

    const [burgerClass, setBurgerClass] = useState('burger unclicked');
    const [menuClass, setMenuClass] = useState('navigation hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass('burger clicked');
            setMenuClass('navigation visible')
        } else{
            setBurgerClass('burger unclicked');
            setMenuClass('navigation hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div id='header' className='nav-bar'>
            <div className='content wrapper'>
                <Link to='/'>
                    <img className='logo' src={logo} alt='logo'/>
                </Link>
                <header>
                    <nav className={menuClass}>
                        <ul className='list'>
                            <li className='item'>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className='item'>
                                <Link to={'/categories'}>Categories</Link>
                            </li>
                            <li className='item'>
                                <Link to={'/full-recipe/random'}>Random</Link>
                            </li>
                            <li className='item'>
                                <Link to={'/favorites'}>Favorites</Link>
                            </li>
                        </ul>
                    </nav>

                </header>
                <SearchInput
                    type='text'
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    onKeyDown={searchRecipe}
                    onClick={fetchMealsHandler}
                />
                <Burger
                    className={burgerClass}
                    onClick={updateMenu}
                />

            </div>
        </div>
    )
}