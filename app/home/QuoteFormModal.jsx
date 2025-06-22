'use client';
import { Modal, Form, Input, Button } from 'antd';

export default function QuoteFormModal({ visible, onClose, onFinish }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="rounded-lg"
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
  );
}
