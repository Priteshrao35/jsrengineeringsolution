'use client'
import { useEffect, useState } from 'react';
import ClientsPage from '../home/clients';
import HomeBannerPage from '../home/hombannerpage';
import ProductRotator from '../home/ProductRotator';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaIndustry } from 'react-icons/fa';
import Image from 'next/image';
import QuoteFormModal from '../home/QuoteFormModal';

export default function Gallery() {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleFinish = (values) => {
        console.log('Form submitted:', values);
        setIsFormOpen(false);
    };


    // Products data
    const products = [
        { name: "Hand Pallet Truck", image: "/images/products/hand-pallet-truck-500x500.jpg", category: "Material Handling" },
        { name: "Pinion Roller", image: "/images/products/pinion_roller.jpg", category: "Tower Crane Parts" },
        { name: "Bar Cutting Machine", image: "/images/products/bar_cutting_machine.jpg", category: "Construction Equipment" },
        { name: "Bar Bending Machine", image: "/images/products/bar_bending_machine.jpg", category: "Construction Equipment" },
        { name: "Hoist Hook With Safety Latch", image: "/images/products/hook_safety_latch.jpg", category: "Lifting Equipment" },
        { name: "Steel Hempcore Wirerope", image: "/images/products/wire_rope.jpg", category: "Lifting Equipment" },
        { name: "Concrete Bucket", image: "/images/products/concrete_bucket.jpg", category: "Construction Equipment" },
        { name: "Brake Coil", image: "/images/products/brake_coil.jpg", category: "Industrial Parts" },
        { name: "Solar Warning Lamp", image: "/images/products/solar_warning_light.jpg", category: "Safety Equipment" },
        { name: "Solar Aviation Light", image: "/images/products/solar_aviation_light.jpg", category: "Safety Equipment" },
        { name: "Push Button", image: "/images/products/push_button.jpg", category: "Electrical Components" },
        { name: "Wireless Remote Control", image: "/images/products/wireless_remote_control.jpg", category: "Control Systems" },
        { name: "LED Indicator", image: "/images/products/led_indicator.jpg", category: "Electrical Components" },
        { name: "Push Button", image: "/images/products/push_button2.jpg", category: "Electrical Components" },
        { name: "Bar Cutting Blade", image: "/images/products/bar_cutting_blade.jpg", category: "Construction Equipment" },
        { name: "Selector Switch", image: "/images/products/selector_switch.jpg", category: "Electrical Components" },
        { name: "Rotary Switch", image: "/images/products/rotory_switch.jpg", category: "Electrical Components" },
        { name: "Lighting Arrester", image: "/images/products/lighting_arrester.png", category: "Electrical Safety" },
        { name: "Coupling", image: "/images/products/coupling.jpg", category: "Mechanical Components" },
        { name: "High Tensile Bolt", image: "/images/products/high_tensile_bolt.jpg", category: "Fasteners" },
        { name: "Fastener Bolts", image: "/images/products/fastener.jpg", category: "Fasteners" },
        { name: "Hook Type Anchor Fastener", image: "/images/products/hook_fastener.jpg", category: "Fasteners" },
        { name: "Foundation Leg", image: "/images/products/foundation_leg.jpg", category: "Tower Crane Parts" },
    ];

    const serviceProducts = [
        'SOLAR WARNING LAMP',
        'TRANSFORMER',
        'HIGH TENSILE MAST BOLT',
        'MAST SECTION',
        'FOUNDATION LEG',
        'ANCHORING SET',
        'CONTROL PANEL',
        'CONCRETE BUCKET',
        'JOYSTICK CABLE',
        'TOWER CRANE MAIN CABLE',
        'LIMIT SWITCHES',
        'PINION & ROLLERS',
        'RACK & PINION',
        'SAFETY DEVICES',
        'REED SENSOR'
    ];

    // Group products by category for filtering
    const categories = [...new Set(products.map(product => product.category))];

    useEffect(() => {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="bg-gray-50">
            <HomeBannerPage
                bgImage="/images/banners/wallpaper4.jpg"
                title={
                    <>
                        WE ARE MANUFACTURER & TRADER OF <br />
                        <ProductRotator products={serviceProducts} />
                    </>
                }
                description="We are a leading manufacturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments"
                showProducts={false}
            />

            {/* Products Section */}
            <section className="py-16 md:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-transparent opacity-50"></div>
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold mb-3">OUR PRODUCTS</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quality Industrial Solutions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our wide range of industrial products designed for efficiency, durability and safety.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button className="md:px-4 md:py-2 bg-yellow-500 text-white rounded-full font-medium hover:bg-yellow-600 transition-all">
                            All Products
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="md:px-4 md:py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 border border-gray-200 transition-all"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/banners/placeholder.jpg';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-2">
                                        <FaIndustry className="text-yellow-500 mr-2" />
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 md:p-12 text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Looking for a specific product?</h3>
                        <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
                            We manufacture and supply a wide range of industrial equipment. Contact us for custom solutions.
                        </p>
                        <button onClick={() => setIsFormOpen(true)} className="px-8 py-3 bg-white text-yellow-600 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                            Contact Our Experts
                        </button>
                    </motion.div>
                </div>
            </section>


            {/* Form Modal */}
            <QuoteFormModal
                visible={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onFinish={handleFinish}
            />

            {/* Clients Section */}
            <ClientsPage />
        </div>
    );
};