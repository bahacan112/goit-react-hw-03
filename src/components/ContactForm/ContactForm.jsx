import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 karakter")
      .max(50, "Max 50 karakter")
      .required("\n*Zorunlu"),
    number: Yup.string().required("\n*Zorunlu"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <label className={styles.label}>
            İsim :
            <Field name="name" type="text" className={styles.field} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>
          <label className={styles.label}>
            Numara:
            <Field name="number" type="text" className={styles.field} />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </label>
          <button type="submit">Ekle</button>
        </Form>
      )}
    </Formik>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
