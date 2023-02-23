import React from "react";
import styles from "./index.module.css";

function ProjectDescription({ title, p1, p2 }) {
	return (
		<div className={styles.descriptionConteiner}>
			<h1>&gt;&gt; {title} &lt;&lt;</h1>
			<p>{p1}</p>
			<p>{p2}</p>
		</div>
	);
}

export default ProjectDescription;
