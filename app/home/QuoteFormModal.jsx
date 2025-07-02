'use client';
import { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
const { TextArea } = Input;

export default function QuoteFormModal({ visible, onClose }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${window.location.origin}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      // Success case
      message.success(data.message || 'Message sent successfully!');
      form.resetFields();
      
      // Close modal after a delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      message.error(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="rounded-lg"
      styles={{
        content: {
          padding: '24px',
        },
      }}
      // Prevent closing when clicking mask if loading
      maskClosable={!loading}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="pt-4"
      >
        <h2 className="text-lg font-bold mb-4 text-center">Want expert to call you?</h2>

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
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" size="large" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Mobile Number"
          rules={[
            { required: true, message: 'Please enter your mobile number' },
            {
              pattern: /^[0-9]{10,15}$/,
              message: 'Please enter a valid mobile number',
            },
          ]}
        >
          <Input placeholder="Enter your mobile number" size="large" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Your Message"
        >
          <TextArea
            placeholder="Enter your message (optional)"
            rows={4}
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
            loading={loading}
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}