'use client'
import { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
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
                                {/* Angled corners using pseudo divs */}
                                <div className="relative bg-blue-950 p-8 text-white shadow-xl" style={{ clipPath: 'polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 0% 100%, 0% 20px)' }}>
                                    <h3 className="text-2xl font-bold mb-6 text-white">Request Quote</h3>
                                    <form className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            >
                                                <option value="">Select Your Products</option>
                                                <option value="Solar Warning Lamp">Solar Warning Lamp</option>
                                                <option value="Transformar">Transformar</option>
                                                <option value="High Tensile Mast Bolt">High Tensile Mast Bolt</option>
                                                <option value="Mast Section">Mast Section</option>
                                                <option value="Foundation Legs">Foundation Legs</option>
                                                <option value="Anchoring Set">Anchoring Set</option>
                                                <option value="Control Panel">Control Panel</option>
                                                <option value="Concrete Bucket">Concrete Bucket</option>
                                                <option value="Joystick Cable">Joystick Cable</option>
                                                <option value="Tower Crane Main Cable">Tower Crane Main Cable</option>
                                                <option value="Brake Coil">Brake Coil</option>
                                                <option value="Master Control Joystick">Master Control Joystick</option>
                                                <option value="Door Limit Switch">Door Limit Switch</option>
                                                <option value="Rack Limit Switch">Rack Limit Switch</option>
                                                <option value="3 Phase Limit Switch">3 Phase Limit Switch</option>
                                                <option value="Safety Device">Safety Device</option>
                                                <option value="Pinion Roller">Pinion Roller</option>
                                                <option value="Rack & Pinion">Rack & Pinion</option>
                                            </select>
                                        </div>
                                        <div>
                                            <textarea
                                                className="w-full p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="4"
                                                placeholder="Message"
                                                required
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded transition duration-300"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 md:py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-10">

                        {/* Image Swiper - responsive height */}
                        <div className="w-full lg:w-6/12">
                            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    effect="fade"
                                    loop={true}
                                    className="w-full h-full"
                                >
                                    {images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={img}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                height={500}
                                                width={800}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-6/12 lg:pl-12">
                            <span className="text-yellow-600 font-semibold block mb-2 text-sm sm:text-base">
                                Welcome to JSR Engineering Solution
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
                                Complete Crane Spare Parts Solution
                            </h2>
                            <p className="mb-6 text-gray-700 text-sm sm:text-base">
                                JSR Engineering Solution Company has an established track record of manufacturing and supplying heavy duty cranes to clients all around the globe. Owing to our experience, we have different types of crane spare parts available at all times. With a highly-trained team of service engineers and dealers, we ensure prompt dispatch and servicing in any part of the country or the globe. We also have well-equipped service centers to handle your queries regarding crane spares and services.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow"
                                    >
                                        <span className="text-4xl sm:text-3xl font-bold text-yellow-500 block mb-2">
                                            <AnimatedCounter target={stat.value} duration={2000} />
                                        </span>
                                        <span className="text-white font-bold text-xl sm:text-base">{stat.label}</span>
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
                        "linear-gradient(rgba(100, 149, 237, 0.65), rgba(100, 149, 237, 0.65)), url('/img/wallpaper2.jpg')"
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

