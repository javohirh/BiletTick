import React from "react";

function StaffsIcon({size= 24,color='#A1A1A1',className}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={className}
            fill="none"
            viewBox={`0 0 ${size} ${size}`}
        >
            <path
                fill={color}
                d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A4 4 0 0019 13.79V4.604L12 3.05 5 4.604z"
            ></path>
        </svg>
    );
}

export default StaffsIcon;
