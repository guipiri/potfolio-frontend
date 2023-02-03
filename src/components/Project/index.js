import React from "react";
import styles from "./index.module.css";

function Project({ title, text }) {
	return (
		<div className={styles.projectConteiner}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
}

export default Project;
