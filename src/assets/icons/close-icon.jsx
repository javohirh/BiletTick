import React from 'react';

export function CloseIcon({ className, size = 14, color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 14 14"
            className={className}
        >
            <path
                stroke="#667085"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 1L1 13M1 1l12 12"
            ></path>
        </svg>
    );
}
