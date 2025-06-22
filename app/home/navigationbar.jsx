"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import HeaderSection from './headersection';

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
    `nav-link px-4 py-2 rounded-md transition-all duration-300 font-medium ${pathname === path
      ? 'bg-yellow-500 text-gray-900'
      : 'text-white hover:bg-blue-700'
    }`;

  return (
    <>
      <HeaderSection />

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-cyan-900 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
            {/* Mobile menu button - Now on left side */}
            <div className="w-full md:hidden flex justify-start">
              <Button
                type="text"
                icon={<MenuOutlined style={{ color: 'white' }} />}
                onClick={toggleMenu}
                className="!flex items-center"
              >
                <span className="text-white ml-2">Menu</span>
              </Button>

            </div>


            {/* Desktop Navigation */}
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

          {/* Mobile Navigation - Now slides from left */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 z-50">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={toggleMenu}
              ></div>

              {/* Menu Panel */}
              <div className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-gray-800 shadow-lg">
                <div className="flex flex-col p-4 h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-white text-xl font-bold">Menu</h2>
                    <button
                      onClick={toggleMenu}
                      className="text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex flex-col space-y-3 flex-grow">
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
                  </div>

                  <Button
                    type="primary"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold mt-auto"
                    onClick={() => {
                      toggleMenu();
                      toggleQuoteForm();
                    }}
                    block
                  >
                    Request A Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Form Modal */}
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