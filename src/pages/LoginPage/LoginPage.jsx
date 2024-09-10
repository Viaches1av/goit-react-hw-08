import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import * as Yup from 'yup';
import styles from './LoginPage.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(login(values));
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
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
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
