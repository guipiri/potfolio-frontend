import React from "react";
import Project from "../../components/Project";
import styles from "./index.module.css";

function Projects() {
	return (
		<div className={styles.projectsPage}>
			<Project />
			<Project />
			<Project />
			<Project />	
			<Project />	
			<Project />	
		</div>
	);
}

export default Projects;
