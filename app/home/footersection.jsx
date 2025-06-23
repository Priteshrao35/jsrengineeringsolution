'use client'
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { FaTwitter, FaFacebook, FaInstagram, FaChevronRight, FaMapMarker, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    // Initialize Google Translate after component mounts
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }

    // Function to be called by Google Translate script
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <footer className="ftco-footer pt-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="col-span-1">
              <div className="ftco-footer-widget">
                <h2 className="ftco-heading-2 logo flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.webp"
                      width={50}
                      height={50}
                      alt="JSR Engineering Solution Logo"
                      className="logo-img mr-3"
                    />
                    <span className="flex flex-col">
                      <span className="font-bold text-xl mb-3" style={{ fontFamily: "'Big Shoulders Stencil Text', cursive" }}>
                        JSR Engineering Solution
                      </span>
                      <span
                        className="text-sm lowercase"
                        style={{
                          fontFamily: "'Dancing Script', cursive",
                          marginTop: '-0.75rem',
                        }}
                      >
                        Tower Crane Spare Parts
                      </span>
                    </span>
                  </Link>
                </h2>
                <p className="mt-2 text-gray-400">A technology for mankind</p>
                <p className="text-gray-400">An ISO 9001:2015 Certified Company</p>

                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564114631251&mibextid=ZbWKwL"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <div className="ftco-footer-widget">
                <h2 className="ftco-heading-2 text-xl font-bold mb-4 text-white">Links</h2>
                <ul className="space-y-2">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/about", text: "About Us" },
                    { href: "/services", text: "Products & Services" },
                    { href: "/corporatevideo", text: "Corporate Video" },
                    { href: "/gallery", text: "Gallery" },
                    { href: "/contact", text: "Contact Us" }
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <FaChevronRight className="mr-2 text-xs" />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products */}
            <div className="col-span-1">
              <div className="ftco-footer-widget">
                <h2 className="ftco-heading-2 text-xl font-bold mb-4 text-white">Products</h2>
                <ul className="space-y-2">
                  {[
                    { href: "/images/products/bar_bending_machine.jpg", text: "Bar Bending Machine" },
                    { href: "/images/products/bar_cutting_machine.jpg", text: "Bar Cutting Machine" },
                    { href: "/images/products/brake_coil.jpg", text: "Brake Coil" },
                    { href: "/images/products/pinion_roller.jpg", text: "Pinion Roller" },
                    { href: "/images/products/limit_switch.jpg", text: "Limit Switches" },
                    { href: "/images/products/concrete_bucket.jpg", text: "Concrete Buckets" },
                    { href: "/images/products/push_button.jpg", text: "Push Button" },
                    { href: "/images/products/platform-trolley.jpg", text: "Spare Parts of Tower Crane" }
                  ].map((product, index) => (
                    <li key={index}>
                      <Link
                        href={product.href}
                        className="flex items-center text-gray-400 hover:text-blue-500 transition-colors"
                      >
                        <FaChevronRight className="mr-2 text-xs" />
                        {product.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <div className="ftco-footer-widget">
                <h2 className="ftco-heading-2 text-xl font-bold mb-4 text-white">Have a Questions?</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaMapMarker className="mt-1 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-400">
                      Plot No. 80, Block C, Sector-3, Greter Noida, Gautam
                      Budh Nagar, Uttar Pradesh (India)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-gray-400" />
                    <a href="tel:+9183685661339" className="text-gray-400 hover:text-blue-500 transition-colors">
                      +91-83685661339
                    </a>
                  </div>
                  <div className="text-gray-400">
                    GSTIN: 09NHKPS0590B1ZX
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-gray-400" />
                    <a href="mailto:jsrengineeringsolution@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                      jsrengineeringsolution@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-gray-950 mt-8 px-4 md:px-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

              {/* Left content - always left aligned */}
              <div className="text-left mb-4 md:mb-0">
                <p className="text-white">
                  Copyright &copy; {new Date().getFullYear()} Design & Developed{' '}
                  <FaHeart className="inline text-red-300" /> by{' '}
                  <a
                    href="https://www.prwebtechno.com/"
                    className="text-white hover:text-yellow-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prwebtechno
                  </a>
                  <br />
                  <FaPhone className="inline mr-1" />{' '}
                  <a href="tel:+919170475552" className="text-white hover:text-yellow-200 transition-colors">
                    +91-9170475552
                  </a>
                </p>
              </div>

              {/* Right content - Google Translate widget */}
              <div className="text-left md:text-right w-full md:w-auto">
                <div id="google_translate_element" className="inline-block"></div>
              </div>

            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;