import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      ...value,
      ...changedValue
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || "0", 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!("number" in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber
    });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100
        }}
      />
    </span>
  );
};

export const Demo = () => {
  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };

  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("Valor deve ser maior que zero"));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        number: 0
      }}
    >
      <Form.Item
        name="price"
        rules={[
          {
            validator: checkPrice
          }
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


export default PriceInput;
