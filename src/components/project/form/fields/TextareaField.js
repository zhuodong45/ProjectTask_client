import React from 'react';
import { PropTypes } from 'prop-types';
import { Form, Input } from 'antd';

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const TextareaField = ({
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
      <Input.TextArea {...field} {...props} />
    </Form.Item>
  );
};

TextareaField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }).isRequired
};

export default TextareaField;
