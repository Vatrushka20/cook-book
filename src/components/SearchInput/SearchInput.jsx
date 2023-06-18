import './SearchInput.scss'
import {Link} from "react-router-dom";
import {LuSearch} from "react-icons/lu";
export const SearchInput = ({type, value, onChange, onKeyDown, onClick}) => {
    return (
        <div className='search'>
            <input className='search__input'
                   type={type}
                   placeholder='Search...'
                   value={value}
                   onChange={onChange}
                   onKeyDown={onKeyDown}
            />
            <Link to={'/search'}>
                    <LuSearch className="search__button" color='white' fontSize='18px' onClick={onClick}/>
            </Link>
        </div>
    )
}
