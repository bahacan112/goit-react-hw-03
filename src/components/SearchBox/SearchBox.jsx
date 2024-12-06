import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Kişi Ara:</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        placeholder="Kişi ismini girin"
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
