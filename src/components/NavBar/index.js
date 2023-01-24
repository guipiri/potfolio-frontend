import React from "react";
import Button from "../Button";
import styles from "./index.module.css";

function NavBar() {
	return (
		<div className={styles.navBar}>
			<Button text="About me" to="/" />
			<Button text="Projects" to="/" />
			<Button text="Contact" to="/" />
		</div>
	);
}

export default NavBar;
