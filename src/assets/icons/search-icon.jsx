import React from "react";

export default function  SearchIcon(props) {
    const {size = 24, className} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={size}
            height={size}
            className={className}
        >
            <path
                stroke='#ffffff'
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
        </svg>
    );
}

