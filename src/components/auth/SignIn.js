import React from 'react';
import { Icon, Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import InputField from '../project/form/fields/InputField';
import { UserValidation } from '../project/form/Validation';

const initialValues = { email: '', password: '' };

const SignIn = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="formContainer">
            <Formik
                initialValues={initialValues}
                validate={UserValidation}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            component={InputField}
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            component={InputField}
                        />
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                        >
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignIn;
