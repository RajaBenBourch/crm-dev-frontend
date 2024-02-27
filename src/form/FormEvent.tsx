import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

interface Props {
  onFinish: (values: any) => void;
  initialValues: any;
}

const FormEvent: React.FC<Props> = ({ onFinish, initialValues }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="generic_form"
      initialValues={initialValues}
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Nom"
        name="name"
        rules={[{ required: true, message: 'Veuillez saisir votre nom!' }]}
      >
        <Input placeholder="Entrez votre nom" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Veuillez saisir votre adresse email!' }]}
      >
        <Input type="email" placeholder="Entrez votre email" />
      </Form.Item>

      <Form.Item
        label="Date de naissance"
        name="birthdate"
        rules={[{ required: true, message: 'Veuillez sélectionner votre date de naissance!' }]}
      >
        <DatePicker style={{ width: '100%' }} placeholder="Sélectionnez votre date de naissance" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Soumettre
        </Button>
        <Button htmlType="button" onClick={handleReset}>
          Réinitialiser
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormEvent;
