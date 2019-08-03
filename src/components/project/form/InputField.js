import React from 'react';
import { PropTypes } from 'prop-types';
import { Form, Input } from 'antd';

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const InputField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errMsg = touched[field.name] && errors[field.name];
  return (
    <Form.Item
      help={errMsg}
      validateStatus={errMsg ? 'error' : ''}
      label={Capitalize(field.name)}
    >
      <Input {...field} {...props} />
    </Form.Item>
  );
};

InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }).isRequired
};

export default InputField;
