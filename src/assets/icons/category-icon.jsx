import React from "react";

function CategoryIcon({size= 24,color='#A1A1A1',className}) {
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
                d="M10.944 4.611H4.611v6.333h6.333V4.611zm2.112 0v6.333h6.333V4.611h-6.333zm6.333 8.445h-6.333v6.333h6.333v-6.333zm-8.444 6.333v-6.333H4.61v6.333h6.333zM2.5 2.5h19v19h-19v-19z"
            ></path>
        </svg>
    );
}

export default CategoryIcon;
