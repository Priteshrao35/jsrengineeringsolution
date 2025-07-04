'use client'
import { useEffect, useState, useRef } from 'react';
import { Button, message } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import ClientsPage from './clients';
import HomeBannerPage from './hombannerpage';
import ProductRotator from './ProductRotator';

const AnimatedCounter = ({ target, duration = 2000 }) => {
    const countRef = useRef(null);

    useEffect(() => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            countRef.current.textContent = Math.floor(current) + '+';
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span ref={countRef}>0+</span>;
};

export default function Index() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormSubmitted(false);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                e.target.reset();
                setFormSubmitted(true);
                message.success('Form submitted successfully!');

                setTimeout(() => {
                    setFormSubmitted(false);
                }, 3000);
            } else {
                message.error(result.message || 'Failed to submit form');
            }
        } catch (error) {
            message.error('Failed to submit form. Please try again.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const stats = [
        { value: 2, label: 'Years of Experience' },
        { value: 150, label: 'Customers Served' },
        { value: 550, label: 'Number of Equipment' },
        { value: 10, label: 'Number of Staffs' }
    ];

    const images = [
        '/images/products/bar_cutting_machine.jpg',
        '/images/products/solar_warning_light.jpg',
    ];

    const homeProducts = [
        'SOLAR WARNING LAMP',
        'TRANSFORMAR',
        'HIGH TENSILE MAST BOLT',
        'MAST SECTION',
        'FOUNDATION LEG',
        'ANCHORING SET',
        'CONTROL PANEL',
        'CONCRETE BUCKET',
        'JOYSTICK CABLE',
        'TOWER CRANE MAIN CABLE',
        'LIMIT SWITCHS',
        'PINION & ROLLERS',
        'RACK & PINION',
        'SAFETY DEVICES',
        'REED SENSOR'
    ];

    const productOptions = [
        'Solar Warning Lamp',
        'Transformar',
        'High Tensile Mast Bolt',
        'Mast Section',
        'Foundation Legs',
        'Anchoring Set',
        'Control Panel',
        'Concrete Bucket',
        'Joystick Cable',
        'Tower Crane Main Cable',
        'Brake Coil',
        'Master Control Joystick',
        'Door Limit Switch',
        'Rack Limit Switch',
        '3 Phase Limit Switch',
        'Safety Device',
        'Pinion Roller',
        'Rack & Pinion'
    ];

    return (
        <div className="min-h-screen">
            <HomeBannerPage
                bgImage="/images/banners/wall1.jpg"
                title={
                    <>
                        WE ARE MANUFECTURER & TRADER OF <br />
                        <ProductRotator products={homeProducts} />
                    </>
                }
                description="We are a leading manufecturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments"
                showProducts={false}
            />
            {/* Why Choose Us Section */}
            <section className="pt-14 bg-orange-400 text-white">
                <div className="md:px-28 px-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-7/12 lg:pr-10 lg:mb-0">
                            <h2 className="text-3xl font-bold mb-8">Why Choose JSR Engineering Solution</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start">
                                    <div className="bg-white text-blue-600 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Service</h3>
                                        <p>Providing the highest level of staff professionalism and technical competence.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white text-blue-600 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Advanced Machinery</h3>
                                        <p>Advanced Machinery has provided our customers with high quality products.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white text-blue-600 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                                        <p>We offer premium quality range of products in numerous specifications within the minimum time period at genuine rates.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white text-blue-600 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                                        <p>We aim to offer our valued customers high-quality solutions at affordable rates to help them run their industries without a hitch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-4/12 relative">
                            <div className="relative z-20 mt-5 md:-mt-20 overflow-hidden">
                                <div className="relative bg-blue-950 p-8 text-white shadow-xl" style={{ clipPath: 'polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%, 0% 20px)' }}>
                                    <h3 className="text-2xl font-bold mb-6 text-white">Request Quote</h3>
                                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                                        <div>
                                            <input
                                                name="name"
                                                type="text"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="email"
                                                type="email"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="phone"
                                                type="tel"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <select
                                                name="product"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            >
                                                <option value="">Select Your Products</option>
                                                {productOptions.map((product, index) => (
                                                    <option key={index} value={product}>{product}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <textarea
                                                name="message"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="4"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded transition duration-300"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit'}
                                        </button>

                                        {formSubmitted && (
                                            <div className="mt-4 p-3 bg-green-500 text-white rounded text-center animate-fade">
                                                Thank you! Your request has been submitted successfully.
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Image Swiper with enhanced styling */}
                        <div className="w-full lg:w-6/12 relative group">
                            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-xl shadow-xl">
                                <Swiper
                                    modules={[Autoplay, EffectFade, Pagination]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true
                                    }}
                                    effect="fade"
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true
                                    }}
                                    className="w-full h-full"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={img}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                                height={600}
                                                width={900}
                                                quality={90}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Content with enhanced styling */}
                        <div className="w-full lg:w-6/12 lg:pl-8">
                            <span className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm tracking-wider">
                                YOUR TRUSTED CRANE SOLUTIONS PARTNER
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                                Premium <span className="text-blue-600">Crane Equipment</span> & Spare Parts Provider
                            </h2>
                            <p className="mb-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                                JSR Engineering Solution delivers excellence in crane manufacturing, spare parts, and maintenance services. Our team of certified professionals ensures reliable solutions with rapid response times, supported by our extensive inventory of genuine parts and cutting-edge equipment.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { value: 5, label: "Years of Experience", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                                    { value: 50, label: "Qualified Staff Members", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                                    { value: 100, label: "Equipment & Spare Parts", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                                    { value: 24, label: "Hour Support", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center">
                                            <div className="mr-4 p-3 bg-blue-50 rounded-lg">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-3xl font-bold text-gray-900 block">
                                                    <AnimatedCounter target={stat.value} duration={2000} />+
                                                </span>
                                                <span className="text-gray-600 font-medium">{stat.label}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                className="py-20 bg-cover bg-center bg-scroll text-white text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(100, 149, 237, 0.2), rgba(100, 149, 237, 0.2)), url('/img/wallpaper2.jpg')"
                }}
            >
                <div className="container mx-auto md:px-4 px-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        JSR Engineering Solution a Material Handling Equipments Spare Parts Solutions
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        The Company has emerged as an industry leader in both technological and product advancements contributing to its long-standing reputation as a manufacturer of high quality Material Lifting Equipments.
                    </p>
                    <a
                        href="/pdf/JSR.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            type="primary"
                            size="large"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                        >
                            Download Our Catalog
                        </Button>
                    </a>
                </div>
            </section>

            <ClientsPage />
        </div>
    );
};

