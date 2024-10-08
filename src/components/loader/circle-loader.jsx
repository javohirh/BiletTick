import React from 'react';
import { Spinner } from '@material-tailwind/react';
import { colors } from '@material-tailwind/react/types/generic';

export function CircleLoader({ size = 3, color, ...props }) {
    return (
        <div className="flex items-end gap-8">
            <Spinner
                className={`h-${size} w-${size}`}
                color={color}
                {...props}
            />
        </div>
    );
}
