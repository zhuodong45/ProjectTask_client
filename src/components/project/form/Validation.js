export const UserValidation = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 3) {
    errors.password = 'Too short';
  }

  return errors;
};

export const ProjectValidation = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.content) {
    errors.content = 'Required';
  }

  return errors;
};
