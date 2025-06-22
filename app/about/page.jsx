'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ClientsPage from '../home/clients';
import HomeBannerPage from '../home/hombannerpage';
import ProductRotator from '../home/ProductRotator';

export default function AboutUs() {
    const [currentProduct, setCurrentProduct] = useState('SOLAR WARNING LAMP');
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = products.indexOf(currentProduct);
            const nextIndex = (currentIndex + 1) % products.length;
            setCurrentProduct(products[nextIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentProduct]);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    const handleVideoPause = () => {
        setIsVideoPlaying(false);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const slideInFromLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideInFromRight = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const scaleUp = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };


    const sections = [
        {
            title: "About Us",
            gradient: "from-blue-400 to-cyan-300",
            bgGradient: "from-gray-900 to-gray-800",
            pattern: "grid-pattern.svg",
            textColor: "text-gray-300",
            highlightColor: "text-blue-300",
            content: [
                "Founded in the year 2022, <span className='font-semibold text-blue-300'>JSR Engineering Solution</span> is a dependable and famous manufacturer, retailer and exporter of a broad range of all types of Tower Crane Spare Parts like Hoist, Pinion Roller, Rack Roller, Limit Switches, Safety Switches, Emergency Stop Buttons, Push Buttons, Wire Rope, Chain Hoist, Jystic Cable, Control Panel, Tower Crane Installation service, Foundation Leges, Selector Switches, Brake Coil & Industrial Material Handling Equipment Solutions.",
                "Under the supervision of <span className='font-semibold text-blue-300'>\"Mr. Niraj Singh\"</span> (Proprietor), we have gained huge clientele in our country through our commitment to quality and customer satisfaction."
            ],
            media: {
                type: "video",
                src: "/video/belt.mp4",
                alt: "Our Manufacturing Process",
                caption: "Quality and precision in every step"
            },
            buttonText: "Learn More About Us",
            buttonGradient: "from-blue-600 to-cyan-500"
        },
        {
            title: "Design & Engineering",
            gradient: "from-blue-600 to-cyan-500",
            bgGradient: "from-white to-gray-100",
            pattern: "grid-pattern-light.svg",
            textColor: "text-gray-700",
            highlightColor: "text-blue-500",
            content: [
                "Our varied range of equipment is the result of strenuous and continuous design & engineering development imparted by a team of highly qualified technocrats whose expertise reflects on the end result of our equipment usage."
            ],
            features: [
                "Cutting-edge technology implementation",
                "Continuous innovation and improvement",
                "Quality assurance at every stage",
                "Custom solutions for specific needs"
            ],
            media: {
                type: "image",
                src: "/img/dgeot.jpg",
                alt: "Engineering Excellence",
                caption: "Innovative solutions for modern challenges"
            },
            buttonText: "Our Engineering Process",
            buttonGradient: "from-blue-600 to-cyan-500"
        }
    ];


    const aboutProducts = [
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
        <div className="min-h-screen overflow-x-hidden bg-gray-50">
            <HomeBannerPage
                bgImage="/images/wall2.jpg"
                title={
                    <>
                        WE ARE MANUFACTURER & TRADER OF <br />
                        <ProductRotator products={aboutProducts} />
                    </>
                }
                description="We are a leading manufacturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments"
                showProducts={false}
            />


            {sections.map((section, index) => {
                const isEven = index % 2 === 0;
                const textOrder = isEven ? "order-1" : "lg:order-2";
                const mediaOrder = isEven ? "order-2" : "lg:order-1";
                const textAnimation = isEven ? slideInFromLeft : slideInFromRight;
                const mediaAnimation = isEven ? slideInFromRight : slideInFromLeft;

                return (
                    <section
                        key={index}
                        className={`py-16 bg-gradient-to-b ${section.bgGradient} relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className={`absolute inset-0 bg-[url('/img/${section.pattern}')]`}></div>
                        </div>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                {/* Text Content - Alternates sides */}
                                <motion.div
                                    className={`lg:w-1/2 ${textOrder}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={textAnimation}
                                >
                                    <motion.div
                                        className="inline-block mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h2 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                                            {section.title}
                                        </h2>
                                        <div className={`h-1 bg-gradient-to-r ${section.gradient.replace('text-', 'bg-')} rounded-full mt-2 w-3/4`}></div>
                                    </motion.div>

                                    {section.content.map((paragraph, pIndex) => (
                                        <motion.p
                                            key={pIndex}
                                            className={`${section.textColor} mb-6 text-lg leading-relaxed`}
                                            variants={fadeIn}
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    ))}

                                    {section.features && (
                                        <motion.ul
                                            className="space-y-3 mb-8"
                                            variants={containerVariants}
                                        >
                                            {section.features.map((feature, fIndex) => (
                                                <motion.li key={fIndex} className="flex items-start" variants={itemVariants}>
                                                    <svg className="h-5 w-5 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className={section.textColor}>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}

                                    <motion.div variants={fadeIn}>
                                        <motion.button
                                            className={`px-8 py-3 bg-gradient-to-r ${section.buttonGradient} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                                            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {section.buttonText}
                                        </motion.button>
                                    </motion.div>
                                </motion.div>

                                {/* Media Content - Alternates sides */}
                                <motion.div
                                    className={`lg:w-1/2 ${mediaOrder}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={mediaAnimation}
                                >
                                    <motion.div
                                        className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-blue-400/30"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {section.media.type === 'video' ? (
                                            <div className="aspect-w-16 aspect-h-9">
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    onMouseOver={handleVideoPlay}
                                                    onMouseOut={handleVideoPause}
                                                    className="w-full h-auto max-h-[400px] object-cover"
                                                >
                                                    <source src={section.media.src} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        ) : (
                                            <Image
                                                src={section.media.src}
                                                alt={section.media.alt}
                                                width={12000}
                                                height={400}
                                                className="w-full h-auto max-h-[400px] object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="text-white"
                                            >
                                                <h3 className="text-xl font-bold">{section.media.alt}</h3>
                                                <p className="text-blue-200">{section.media.caption}</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Clients Section */}
            <ClientsPage />
        </div>
    );
};