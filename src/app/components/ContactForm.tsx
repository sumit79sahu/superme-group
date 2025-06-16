"use client";
import React from "react";
import '@ant-design/v5-patch-for-react-19';

import { Form, Input, Button, Flex, message } from "antd";
import { useForm } from "antd/es/form/Form";

const ContactForm = () => {
  const [form]=useForm()
  return (
<Form
  name="contact-form"
  layout="vertical"
  form={form}
  onFinish={(values) => {
    console.log("Form Values:", values);
    form.resetFields()
    message.success("Form submitted successfully");
  }}
  autoComplete="off"
>
  <Flex vertical gap={20}>
   <Form.Item
  name="fullname"
  rules={[
    { required: true, message: "Please input your full name!" },
    { min: 3, message: "Full name must be at least 3 characters." },
    {
      validator: (_, value) => {
        if (!value || /^[A-Za-z\s]+$/.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Full name must only contain letters and spaces."));
      },
    },
  ]}
>
  <Input placeholder="Full Name" />
</Form.Item>

    <Form.Item
      name="email"
      rules={[
        { required: true, message: "Please input your email!" },
        { type: "email", message: "Please enter a valid email!" },
      ]}
    >
      <Input placeholder="Email" />
    </Form.Item>

    <Form.Item
      name="subject"
      rules={[
        { required: true, message: "Please input your subject!" },
        { min: 4, message: "Subject must be at least 4 characters." },
      ]}
    >
      <Input placeholder="Subject" />
    </Form.Item>

    <Form.Item
      name="message"
     
    >
      <Input.TextArea placeholder="Message" rows={4} />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="!py-[20px] !px-[30px] !bg-white hover:!bg-gray-200 !rounded-full !font-medium !text-[16px] !text-black"
      >
        Submit
      </Button>
    </Form.Item>
  </Flex>
</Form>

  );
};

export default ContactForm;
