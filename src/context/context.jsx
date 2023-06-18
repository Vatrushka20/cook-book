import {createContext, useState} from "react";
import axios from "axios";

export const MyContext = createContext(null);
export const AppContext = ({children}) => {
    const [meal, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryItem, setCategoryItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);
    const fetchHomePage = (searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(res => {
                setMeals(res.data.meals)
            });
    }
    const fetchCategories = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(r => {
                setCategories(r.data.categories)
            });
    };

    const fetchCategoryList = (categoryName) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(r => {
                console.log(r.data.meals)
                setCategoryItem(r.data.meals)
            });
    }
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    return (
        <MyContext.Provider
            value={{
                fetchHomePage, meal,
                fetchCategories, categories,
                fetchCategoryList, categoryItem,
                lastPostIndex, firstPostIndex, currentPage, postsPerPage, setCurrentPage
            }}>
            {children}
        </MyContext.Provider>
    )
}