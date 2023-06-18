import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "../../pages/HomePage/HomePage";
import {CategoriesPage} from "../../pages/CategoriesPage/CategoriesPage";
import {Favorites} from "../../pages/FavoritesPage/Favorites";
import {FullRecipe} from "../FullRecipe/FullRecipe";
import {SearchList} from "../SearchList/SearchList";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<HomePage className='wrapper'/>}/>
                <Route path='cook-book/categories/' element={<CategoriesPage className='wrapper'/>}/>
                <Route path='cook-book/favorites' element={<Favorites className='wrapper'/>}/>
                <Route path={"cook-book/full-recipe/:id"} element={<FullRecipe className='wrapper'/>}/>
                <Route path={"cook-book/full-recipe/random"} element={<FullRecipe className='wrapper'/>}/>
                <Route path={"cook-book/search"} element={<SearchList className='wrapper'/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;