import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import styles from './RegistrationPage.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <Field className={styles.input} type="text" name="name" />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="div"
              />
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <Field className={styles.input} type="email" name="email" />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="div"
              />
            </div>

            <div className={styles.fieldWrapper}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <Field className={styles.input} type="password" name="password" />
              <ErrorMessage
                className={styles.error}
                name="password"
                component="div"
              />
            </div>

            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationPage;
