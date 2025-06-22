'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ClientsPage from '../home/clients';
import HomeBannerPage from '../home/hombannerpage';
import ProductRotator from '../home/ProductRotator';
import QuoteFormModal from '../home/QuoteFormModal';

export default function ProductsPage() {
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
        { name: "Hand Pallet Truck", image: "/images/products/hand-pallet-truck-500x500.jpg" },
        { name: "Pinion Roller", image: "/images/products/pinion_roller.jpg" },
        { name: "Bar Cutting Machine", image: "/images/products/bar_cutting_machine.jpg" },
        { name: "Bar Bending Machine", image: "/images/products/bar_bending_machine.jpg" },
        { name: "Hoist Hook With Safety Latch", image: "/images/products/hook_safety_latch.jpg" },
        { name: "Steel Hempcore Wirerope", image: "/images/products/wire_rope.jpg" },
        { name: "Concreate Bucket", image: "/images/products/concrete_bucket.jpg" },
        { name: "Brake Coil", image: "/images/products/brake_coil.jpg" },
        { name: "Solar Warning Lamp", image: "/images/products/solar_warning_light.jpg" },
        { name: "Solar Aviation Light", image: "/images/products/solar_aviation_light.jpg" },
        { name: "Push Button", image: "/images/products/push_button.jpg" },
        { name: "Wireless Remote Control", image: "/images/products/wireless_remote_control.jpg" },
        { name: "LED Indicator", image: "/images/products/led_indicator.jpg" },
        { name: "Push Button", image: "/images/products/push_button2.jpg" },
        { name: "Bar Cutting Blade", image: "/images/products/bar_cutting_blade.jpg" },
        { name: "Selector Switch", image: "/images/products/selector_switch.jpg" },
        { name: "Rotory Switch", image: "/images/products/rotory_switch.jpg" },
        { name: "Lighting Arrester", image: "/images/products/lighting_arrester.png" },
        { name: "Coupling", image: "/images/products/coupling.jpg" },
        { name: "High Tensile Bolt", image: "/images/products/high_tensile_bolt.jpg" },
        { name: "Fastener Bolts", image: "/images/products/fastener.jpg" },
        { name: "Hook Type Anchore Fastener", image: "/images/products/hook_fastener.jpg" },
        { name: "Foundation Leg", image: "/images/products/foundation_leg.jpg" },
    ];


    const serviceProducts = [
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
        <div className="bg-gray-100">

            <HomeBannerPage
                bgImage="/images/wallpaper3.jpg"
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
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold">Products</span>
                        <h2 className="text-3xl md:text-4xl text-black font-bold mt-2">Our Product</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-mt-5 transition-all duration-500">
                                <div className="h-48 overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full  h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-black mb-3">{product.name}</h2>
                                    <button onClick={() => setIsFormOpen(true)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
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