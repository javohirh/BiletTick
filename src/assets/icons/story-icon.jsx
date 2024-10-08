import React from "react";

function StoryIcon({size= 24,color='#A1A1A1',className}) {
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
                d="M6 4v16h12V4H6zM5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm7 15a1 1 0 110 2 1 1 0 010-2z"
            ></path>
        </svg>
    );
}

export default StoryIcon;
