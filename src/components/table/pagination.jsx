import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import cx from "classnames";
import {IoIosArrowForward} from "react-icons/io";

const Pagination = ({totalItems, itemsPerPage}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPage = +searchParams.get('page')

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setSearchParams({page: page})
        }
    };
    useEffect(() => {
        setSearchParams({page: currentPage ? currentPage : 1})
    }, [])

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 5;

        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > 3 && totalPages - 3 > currentPage) {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            } else if (currentPage + 2 >= totalPages) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pageNumbers.map((number, index) => (
            <button
                key={index}
                className={cx(`px-4 py-2 text-gray-2 rounded-[8px] hover:border border-accent-gray`,
                    {'border border-accent-gray !text-main': currentPage === number})}
                onClick={() => handlePageChange(number)}
                disabled={number === '...'}
            >
                {number}
            </button>
        ));
    };

    return (
        <div className="pagination-wrapper">
            <div className='text-gray-2'>All-{totalItems}</div>

            <div className='flex gap-2'>{renderPageNumbers()}</div>
            <div className='flex gap-3'>
                <button
                    className="px-2 py-2 bg-[#1d1d1d] rounded-[8px] rotate-180"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowForward color='#A1A1A1'/>
                </button>
                <button
                    className="px-2 py-2 bg-[#1d1d1d] rounded-[8px]"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <IoIosArrowForward color='#A1A1A1'/>
                </button>
            </div>

        </div>
    );
};

export default Pagination;
