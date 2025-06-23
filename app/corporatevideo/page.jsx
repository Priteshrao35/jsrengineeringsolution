'use client'
import { useState } from 'react';
import ClientsPage from '../home/clients';
import HomeBannerPage from '../home/hombannerpage';
import ProductRotator from '../home/ProductRotator';
import QuoteFormModal from '../home/QuoteFormModal';

export default function CarporateVideos() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleFinish = (values) => {
        console.log('Form submitted:', values);
        setIsFormOpen(false);
    };

    // Video data
    const videos = [
        {
            src: "/video/WhatsApp Video 2024-09-30 at 8.20.12 AM.mp4",
            title: "Product Demonstration 1"
        },
        {
            src: "/video/belt.mp4",
            title: "Product Demonstration 2"
        },
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
                bgImage="/images/banners/wall6.jpg"
                title={
                    <>
                        WE ARE MANUFACTURER & TRADER OF <br />
                        <ProductRotator products={serviceProducts} />
                    </>
                }
                description="We are a leading manufacturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments"
                showProducts={false}
            />

            {/* Videos Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 font-semibold">Corporate</span>
                        <h2 className="text-3xl md:text-4xl text-black font-bold mt-2">Our Videos</h2>
                    </div>

                    {/* Local Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {videos.map((video, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
                                <h3 className="text-xl font-semibold text-black mb-4">{video.title}</h3>
                                <video
                                    controls
                                    className="w-full h-auto max-h-96 rounded"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
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
}