import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Button, Alert } from 'antd';
import { Formik, Form, Field } from 'formik';
import { PropTypes } from 'prop-types';
import InputField from './fields/InputField';
import TextareaField from './fields/TextareaField';
import { ProjectValidation } from './Validation';
import { createProject } from '../../../store/action/projectAction';

const initialValues = { title: '', content: '' };

const CreateProjectForm = ({ history }) => {
    const stateError = useSelector(state => state.project.error);
    const dispatch = useDispatch();

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        dispatch(createProject(values, history, initialValues, resetForm));
        setSubmitting(false);
    };

    const handleCancel = resetForm => {
        dispatch({ type: 'CLOSE_CREATE_MODAL' });
        dispatch({ type: 'CLEAN_ERROR' });
        resetForm({ initialValues });
    };

    const onClose = () => {
        dispatch({ type: 'CLEAN_ERROR' });
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={ProjectValidation}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, resetForm, handleChange, setFieldValue }) => (
                <Form>
                    {stateError && (
                        <Alert
                            message="Error"
                            description={stateError}
                            type="error"
                            closable
                            onClose={onClose}
                        />
                    )}

                    <Field
                        name="title"
                        type="text"
                        placeholder="Title"
                        prefix={
                            <Icon
                                type="edit"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                        }
                        component={InputField}
                        // custom handleChange
                        onChange={e => {
                            // Always call default handleChange
                            handleChange(e);
                            // whatever I want
                            // setFieldValue('content', e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                    <Field
                        name="content"
                        type="text"
                        placeholder="Content"
                        rows={4}
                        component={TextareaField}
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isSubmitting}
                        style={{ marginRight: '15px' }}
                    >
                        Submit
                    </Button>
                    <Button
                        type="default"
                        htmlType="button"
                        disabled={isSubmitting}
                        onClick={() => handleCancel(resetForm)}
                    >
                        Cancel
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

CreateProjectForm.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default withRouter(CreateProjectForm);
