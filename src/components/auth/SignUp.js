import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Form as AntForm, Input, Button } from 'antd';
import { SignUpValidation } from '../project/form/Validation';

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={user}
            validate={SignUpValidation}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting
                /* and other goodies */
            }) => {
                /* override handleChange */
                const onChange = e => {
                    const { name, value } = e.target;
                    setUser({ ...user, [name]: value });
                    handleChange(e);
                };

                return (
                    <Form>
                        <AntForm.Item
                            help={touched.email && errors.email}
                            validateStatus={
                                touched.email && errors.email ? 'error' : ''
                            }
                            label="Email"
                        >
                            <Input
                                type="email"
                                name="email"
                                onChange={onChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </AntForm.Item>

                        <AntForm.Item
                            help={touched.password && errors.password}
                            validateStatus={
                                touched.password && errors.password
                                    ? 'error'
                                    : ''
                            }
                            label="Password"
                        >
                            <Input
                                type="password"
                                name="password"
                                onChange={onChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </AntForm.Item>

                        <AntForm.Item
                            help={touched.firstName && errors.firstName}
                            validateStatus={
                                touched.firstName && errors.firstName
                                    ? 'error'
                                    : ''
                            }
                            label="First Name"
                        >
                            <Input
                                type="text"
                                name="firstName"
                                onChange={onChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                        </AntForm.Item>

                        <AntForm.Item
                            help={touched.lastName && errors.lastName}
                            validateStatus={
                                touched.lastName && errors.lastName
                                    ? 'error'
                                    : ''
                            }
                            label="Last Name"
                        >
                            <Input
                                type="text"
                                name="lastName"
                                onChange={onChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                        </AntForm.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                        >
                            Sign Up
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SignUp;
