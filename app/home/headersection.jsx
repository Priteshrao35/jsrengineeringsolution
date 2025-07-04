"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <div className="py-3 bg-white text-gray-800 shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start md:items-center gap-4 md:flex-row md:justify-center md:gap-12">
          <div className="flex items-center w-full md:w-auto">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity no-underline"
              aria-label="JSR Engineering Solution - Home"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="mr-3 relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
              >
                <Image
                  src="/logo.webp"
                  className="object-contain"
                  fill
                  priority
                  sizes="(max-width: 768px) 60px, 80px"
                  alt="JSR Engineering Solution Logo"
                />
              </motion.div>

              <span className="font-bold text-lg md:text-xl text-left">
                <span className="text-blue-600"></span> Engineering Solution
                <small className="block font-normal text-yellow-500 text-xs md:text-sm">
                  Tower Crane Spare Parts Solutions
                </small>
              </span>
            </Link>
          </div>


          {/* Vertical Divider - Visible only on desktop */}
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          {/* Contact Info - Stacked and left aligned on mobile */}
          <div className="flex flex-col items-start md:items-center gap-3 sm:flex-row sm:gap-6 w-full md:w-auto">
            <div className="flex items-center">
              <div className="icon flex justify-center items-center mr-2 md:mr-3 bg-gray-100 p-1 md:p-2 rounded-full">
                <PhoneOutlined className="text-blue-600 text-sm md:text-base" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold text-yellow-500">Call Us</p>
                <a href="tel:+918368661339" className="text-black font-bold text-sm md:text-base">
                  +91 8368661339
                </a>
              </div>
            </div>

            {/* Vertical Divider - Visible only on tablet+ */}
            <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

            <div className="flex items-center">
              <div className="text-left">
                <a
                  href="https://maps.app.goo.gl/JapdLRmj7Z3UJRhH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs md:text-sm font-semibold underline mb-1"
                >

                  <p className="text-xs md:text-sm font-semibold">REG. OFFICE ADDRESS & Work</p>
                  <p className="text-gray-600 text-xs">
                    Plot No. 80, Block C, Sector-3, Greater Noida, Gautam <br />
                    Budh Nagar, Uttar Pradesh (India)
                  </p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;