import React from "react";

function SeanceIcon({size= 24,color='#A1A1A1',className}) {
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
                d="M6 4v16h12V4H6zM5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zM2.75 6v-.75h-1.5V6h1.5zm-1.5 0v12h1.5V6h-1.5zM22.75 6v-.75h-1.5V6h1.5zm-1.5 0v12h1.5V6h-1.5z"
            ></path>
        </svg>
    );
}

export default SeanceIcon;
