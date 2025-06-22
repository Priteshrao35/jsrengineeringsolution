'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/effect-fade';
import QuoteFormModal from './QuoteFormModal';

export default function HomeBannerPage({
    bgImage = '/images/wall1.jpg',
    title = "WE ARE MANUFECTURER & TRADER OF",
    description = "We are a leading manufecturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments",
    showProducts = true
}) {
    const [currentProduct, setCurrentProduct] = useState('SOLAR WARNING LAMP');
    const [showForm, setShowForm] = useState(false);

    const handleFinish = (values) => {
        console.log('Form submitted:', values);
        setShowForm(false);
    };

    const products = [
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

    useEffect(() => {
        if (showProducts) {
            const interval = setInterval(() => {
                const currentIndex = products.indexOf(currentProduct);
                const nextIndex = (currentIndex + 1) % products.length;
                setCurrentProduct(products[nextIndex]);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [currentProduct, showProducts]);

    return (
        <div className="md:min-h-screen">
            <Head>
                <title>Tower Lift Spare Parts, JSK Enterprises</title>
                <meta name="description" content="JSK Enterprises is India Leading material handling equipments manufacturing, Conveyors Manufacturer, Conveyors Manufacturers in all over India." />
                <meta name="keywords" content="AK Handling Equipments, AK Enterprises, best lifting equipments manufecturer company, AK Handling Equipments, Conveyors Manufacturer India, Material Handling Equipment Manufacturers In India, scissor lift manufecturer in faridabad" />
                <meta name="author" content="www.towercranespare.com" />
            </Head>

            {/* Hero Section */}
            <section
                className="relative h-auto md:h-screen flex items-center justify-center bg-cover bg-center py-16 md:py-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`,
                }}
            >
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-lg">
                        {title} <br />
                        {showProducts && (
                            <span className="text-yellow-400 animate-pulse">{currentProduct}</span>
                        )}
                    </h1>
                    <p className="text-xl mb-8 text-shadow md:px-60">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+918368661339"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition duration-300"
                        >
                            Arrange a Call
                        </a>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded transition duration-300"
                        >
                            Request a Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Form Modal */}
            <QuoteFormModal
                visible={showForm}
                onClose={() => setShowForm(false)}
                onFinish={handleFinish}
            />
        </div>
    );
}