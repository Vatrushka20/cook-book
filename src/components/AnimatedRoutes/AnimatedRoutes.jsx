import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import {CategoriesPage} from "../CategoriesPage/CategoriesPage";
import {Favorites} from "../FavoritesPage/Favorites";
import {FullRecipe} from "../FullRecipe/FullRecipe";
import {SearchList} from "../SearchList/SearchList";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<HomePage className='wrapper'/>}/>
                <Route path='/categories/' element={<CategoriesPage className='wrapper'/>}/>
                <Route path='/favorites' element={<Favorites className='wrapper'/>}/>
                <Route path={"/full-recipe/:id"} element={<FullRecipe className='wrapper'/>}/>
                <Route path={"/full-recipe/random"} element={<FullRecipe className='wrapper'/>}/>
                <Route path={"/search"} element={<SearchList className='wrapper'/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;