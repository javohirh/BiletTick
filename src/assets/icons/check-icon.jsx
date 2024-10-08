import React from 'react';


export function CheckIcon(props) {
    const { color = '#12B76A', width = 20, height = 12, className } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            fill="none"
            viewBox="0 0 14 12"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M13 1.5l-8.25 9L1 6.41"
            ></path>
        </svg>
    );
}
