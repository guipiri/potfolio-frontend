import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Button({text, handleClick, to}) {
	return <Link onClick={handleClick} className={styles.button} to={to}>{text}</Link>;
}

export default Button;
