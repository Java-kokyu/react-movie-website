import PropTypes from "prop-types";
import styles from "./Button.module.css"
import React from "react";

function Button({ text, countUp }) {
    return <button className={styles.btn} onClick={countUp}>{text}</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;