import PropTypes from "prop-types";
import Styles from "./Contact.module.css";
const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={Styles.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
