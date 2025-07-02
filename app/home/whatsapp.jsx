"use client";
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-5 left-0 w-full flex justify-between px-5 z-[1000]">
            <motion.a
                href="tel:+9183685661339"
                className="w-[50px] h-[50px] bg-blue-700 text-white rounded-full shadow flex items-center justify-center"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <i className="fas fa-phone text-xl"></i>
            </motion.a>

            <motion.a
                href="https://wa.me/83685661339"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] bg-[#25D366] text-white rounded-full shadow flex items-center justify-center"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <i className="fab fa-whatsapp text-2xl"></i>
            </motion.a>
        </div>

    );
};

export default FloatingButtons;
