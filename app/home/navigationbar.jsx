"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutlined, MailOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { motion } from 'framer-motion';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [form] = Form.useForm();
  const pathname = usePathname();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleQuoteForm = () => {
    setShowQuoteForm(!showQuoteForm);
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    form.resetFields();
    setShowQuoteForm(false);
  };


  const getNavClass = (path) =>
    `nav-link px-4 py-2 rounded-md transition-all duration-300 font-medium ${pathname === path ? 'bg-yellow-500 text-gray-900' : 'text-white hover:bg-blue-700'
    }`;


  return (
    <>
      {/* Top Bar - Enhanced with gradient and better spacing */}
      <div className="py-3 bg-white text-gray-800 shadow-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
            {/* Logo Section with Framer Motion */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="mr-3 relative w-[80px] h-[80px]"
                >
                  <Image
                    src="/img/logo.jpg"
                    className="object-contain"
                    fill
                    priority
                    sizes="70px"
                    alt="JSR engineeringsolution Logo"
                  />
                </motion.div>
                <span className="font-bold text-xl text-center">
                  <span className="text-blue-600">JSR</span> jsrengineeringsolution
                  <small className="block font-normal text-blue-500 text-sm">
                    Tower Crane Spare Parts Solutions
                  </small>
                </span>
              </Link>
            </div>


            {/* Vertical Divider - Visible only on desktop */}
            <div className="hidden md:block h-12 w-px bg-gray-300"></div>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-center">
                <div className="icon flex justify-center items-center mr-3 bg-gray-100 p-2 rounded-full">
                  <PhoneOutlined className="text-blue-600" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold">Call Us 24/7</p>
                  <p className="text-blue-600 font-medium">+91 8920377345</p>
                </div>
              </div>

              {/* Vertical Divider - Visible only on tablet+ */}
              <div className="hidden sm:block h-10 w-px bg-gray-300"></div>

              <div className="flex items-center">
                <div className="icon flex justify-center items-center mr-3 bg-gray-100 p-2 rounded-full">
                  <MailOutlined className="text-blue-600" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold">Office Address</p>
                  <p className="text-gray-600 text-xs">Plot No. 80, Block C, Sector-3, Greater Noida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky and with hover effects */}
      <nav className="sticky top-0 z-40 bg-cyan-900 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
            {/* Mobile menu button - centered */}
            <div className="w-full md:hidden flex justify-center">
              <Button
                type="text"
                icon={<MenuOutlined className="text-white" />}
                onClick={toggleMenu}
              >
                <span className="text-white ml-2">Menu</span>
              </Button>
            </div>

            {/* Desktop Navigation - centered with gap */}
            <div className="hidden w-full md:flex items-center justify-center gap-4">
              <div className="flex flex-wrap justify-center gap-2">
                <Link href="/" className={getNavClass('/')}>
                  Home
                </Link>
                <Link href="/about" className={getNavClass('/about')}>
                  About Us
                </Link>
                <Link href="/services" className={getNavClass('/services')}>
                  Products & Service
                </Link>
                <Link href="/corporatevideo" className={getNavClass('/corporatevideo')}>
                  Corporate Video
                </Link>
                <Link href="/gallery" className={getNavClass('/gallery')}>
                  Gallery
                </Link>
                <Link href="/contact" className={getNavClass('/contact')}>
                  Contact
                </Link>
              </div>
              <div className="ml-4">
                <Button
                  type="primary"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold"
                  onClick={toggleQuoteForm}
                >
                  Request A Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - centered */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg p-4 mt-2 shadow-xl">
              <div className="flex flex-col items-center space-y-2">
                <Link href="/" className={getNavClass('/')} onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/about" className={getNavClass('/about')} onClick={toggleMenu}>
                  About Us
                </Link>
                <Link href="/services" className={getNavClass('/services')} onClick={toggleMenu}>
                  Products & Service
                </Link>
                <Link href="/corporatevideo" className={getNavClass('/corporatevideo')} onClick={toggleMenu}>
                  Corporate Video
                </Link>
                <Link href="/gallery" className={getNavClass('/gallery')} onClick={toggleMenu}>
                  Gallery
                </Link>
                <Link href="/contact" className={getNavClass('/contact')} onClick={toggleMenu}>
                  Contact
                </Link>
                <Button
                  type="primary"
                  className="w-full max-w-xs bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold mt-2"
                  onClick={() => {
                    toggleMenu();
                    toggleQuoteForm();
                  }}
                >
                  Request A Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>


      {/* Quote Form Modal using Ant Design */}
      <Modal
        title="Want an expert to call you?"
        open={showQuoteForm}
        onCancel={toggleQuoteForm}
        footer={null}
        centered
        className="rounded-lg"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Your Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Your Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Mobile Number"
            rules={[
              { required: true, message: 'Please enter your mobile number' },
              { pattern: /^[0-9]{10,15}$/, message: 'Please enter a valid mobile number' }
            ]}
          >
            <Input placeholder="Enter your mobile number" size="large" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Navigation;