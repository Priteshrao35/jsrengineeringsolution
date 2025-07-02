'use client'
import ClientsPage from '../home/clients';
import HomeBannerPage from '../home/hombannerpage';
import ProductRotator from '../home/ProductRotator';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        show: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ show: false, success: false, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            setSubmitStatus({
                show: true,
                success: true,
                message: data.message || 'Message sent successfully!'
            });
            setFormData({ name: '', email: '', phone: '', message: '' });

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                show: true,
                success: false,
                message: error.message || 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceProducts = [
        'SOLAR WARNING LAMP', 'TRANSFORMER', 'HIGH TENSILE MAST BOLT', 'MAST SECTION',
        'FOUNDATION LEG', 'ANCHORING SET', 'CONTROL PANEL', 'CONCRETE BUCKET',
        'JOYSTICK CABLE', 'TOWER CRANE MAIN CABLE', 'LIMIT SWITCHES', 'PINION & ROLLERS',
        'RACK & PINION', 'SAFETY DEVICES', 'REED SENSOR'
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="bg-gray-50">

            <HomeBannerPage
                bgImage="/images/banners/wall3.webp"
                title={
                    <>
                        WE ARE MANUFACTURER & TRADER OF <br />
                        <ProductRotator products={serviceProducts} />
                    </>
                }
                description="We are a leading manufacturer & traders of broad range of Tower Crane Spare Parts and safety devices for Industrial Material Handling Equipments"
                showProducts={false}
            />

            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold mb-3">GET IN TOUCH</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Our Team</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions or need assistance? Our team is ready to help you with all your industrial equipment needs.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12"
                    >
                        {/* Contact Info */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-yellow-500 mr-3"></span>
                                JSR Engineering Solution
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Our Location</h4>
                                        <p className="text-gray-600">Plot No. 80, Block C, Sector-3, Greter Noida, Gautam
                                            Budh Nagar, Uttar Pradesh (India)</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                        <FaEnvelope className="text-yellow-500 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email Address</h4>
                                        <a
                                            href="mailto:jsrengineeringsolution@gmail.com"
                                            className="text-blue-500 hover:text-blue-600 transition-colors"
                                        >
                                            jsrengineeringsolution@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                        <FaPhone className="text-yellow-500 text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Phone Number</h4>
                                        <a
                                            href="tel:+9183685661339"
                                            className="text-blue-500 hover:text-blue-600 transition-colors"
                                        >
                                            +91 83685661339
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                <iframe
                                    title="Google Map"
                                    className="w-full h-64"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.390038403116!2d77.30497905982527!3d28.40891268223588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cedf4181e60a9%3A0x8ffb10fa20336f7d!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1680000000000"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-yellow-500 mr-3"></span>
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition placeholder-gray-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="placeholder-gray-300 text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 9170475552"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="placeholder-gray-300 text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className="placeholder-gray-300 text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition ${isSubmitting ? 'bg-yellow-400' : 'bg-yellow-500 hover:bg-yellow-600'} text-black shadow-md`}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <FiSend className="text-lg" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                                {submitStatus.show && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-3 rounded-lg flex items-center gap-3 ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                                    >
                                        {submitStatus.success ? (
                                            <FaCheckCircle className="text-green-500 text-xl" />
                                        ) : (
                                            <FaTimesCircle className="text-red-500 text-xl" />
                                        )}
                                        <span>{submitStatus.message}</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientsPage />
        </div>
    );
}