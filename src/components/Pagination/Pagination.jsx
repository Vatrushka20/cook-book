import './Pagination.scss'
import React, {useMemo} from 'react';

export const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    useMemo(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [currentPage])

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return <button
                    className={`pagination__button ${page === currentPage ? 'active' : ''}`}
                    key={index}
                    onClick={() => {
                        setCurrentPage(page);
                    }}
                >{page}</button>
            })}
        </div>
    );
};