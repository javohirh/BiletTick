import React from "react";

function UserIcon({size= 24,color='#A1A1A1',className}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={className}
            fill="none"
            viewBox={`0 0 ${size} ${size}`}
        >
            <rect
                width="8"
                height="8"
                x="8"
                y="2"
                stroke={color}
                strokeWidth="2"
                rx="4"
            ></rect>
            <mask id="path-2-inside-1_1791_559" fill="#fff">
                <rect width="18" height="9" x="3" y="14" rx="1"></rect>
            </mask>
            <rect
                width="18"
                height="9"
                x="3"
                y="14"
                stroke={color}
                strokeWidth="4"
                mask="url(#path-2-inside-1_1791_559)"
                rx="1"
            ></rect>
        </svg>
    );
}

export default UserIcon;
