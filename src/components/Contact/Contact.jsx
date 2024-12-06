import PropTypes from "prop-types";
import Styles from "./Contact.module.css";
import { RiContactsBookFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={Styles.contact}>
      <p className={Styles.p}>
        <RiContactsBookFill className={Styles.icon} />
        {name}
      </p>
      <p className={Styles.p}>
        <FaPhone className={Styles.icon} />
        {number}
      </p>
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
