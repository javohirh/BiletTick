import React from 'react';
import { motion } from "framer-motion";
import './style.css'
function Switch({ on, ...props }) {
    const className = `switch ${on ? "on" : "off"}`;

    return (
        <motion.div animate className={className} {...props}>
            <motion.div animate />
        </motion.div>
    );
}

export default Switch;
