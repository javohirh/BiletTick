import React from 'react';

export function UnidentifiedIcon(props) {
    const { size = 24, className } = props;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
                stroke="#344054"
                strokeWidth="1.5"
                strokeMiterlimit="10"
            />
            <path
                d="M9.08997 11.0045C9.32507 10.3361 9.78912 9.77258 10.3999 9.41361C11.0107 9.05463 11.7289 8.92341 12.4271 9.04319C13.1254 9.16296 13.7588 9.526 14.215 10.068C14.6713 10.61 14.921 11.296 14.92 12.0045C14.92 14.0045 11.92 15.0045 11.92 15.0045M12 19.0045H12.01"
                stroke="#344054"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
