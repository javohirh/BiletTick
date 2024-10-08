import React from "react";

export function TrashIcon(props) {
    const {color,size = 24, className} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={size}
            height={size}
            className={className}
        >
            <path
                className={color ?? "stroke-color"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 6h2m0 0h16M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6H5Zm3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6"
            />
        </svg>
    );
}

