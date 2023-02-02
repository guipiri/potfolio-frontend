import React from "react";
import Button from "../Button";
import styles from "./index.module.css";

function NavBar() {
	return (
		<div className={styles.navBar}>
			<Button text="Home" to="/" />
			<Button text="About me" to="/about" />
			<Button text="Projects" to="/projects" />
		</div>
	);
}

export default NavBar;
