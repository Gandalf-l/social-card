import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserI } from '../../common/interfaces/User.interface';

const SocialCardForm = ({ finish, user }: { finish?: (user: UserI, id?: number) => void, user?: UserI }) => {

  const onFinish = (values: any) => {
    finish && finish(values, user?.id);
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete='off'
      initialValues={user}
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Street'
        name={['address', 'street']}
        rules={[{ required: true, message: 'Please input your street!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Suite'
        name={['address', 'suite']}
        rules={[{ required: true, message: 'Please input your suite!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='City'
        name={['address', 'city']}
        rules={[{ required: true, message: 'Please input your city!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Zipcode'
        name={['address', 'zipcode']}
        rules={[{ required: true, message: 'Please input your zipcode!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Phone'
        name='phone'
        rules={[{ required: true, message: 'Please input your zipcode!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Website'
        name='website'
        rules={[{ required: true, message: 'Please input your website!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Company name'
        name={['company', 'name']}
        rules={[{ required: true, message: 'Please input your company name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Company catch phrase'
        name={['company', 'catchPhrase']}
        rules={[{ required: true, message: 'Please input your company catch phrase!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default SocialCardForm;
