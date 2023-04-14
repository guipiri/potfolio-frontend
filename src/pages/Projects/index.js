import React from "react";
import { Link } from "react-router-dom";
import Project from "../../components/Project";
import styles from "./index.module.css";

function Projects() {
	return (
		<div className={styles.projectsPage}>
			<Link to="/projects/telegram">
				<Project
					title="Telegram Comments Extraction"
					text="Script que extrai o nome dos usuários que comentaram numa publicação de canal do Telegram"
				/>
			</Link>
			<Link to="/projects/imperial">
				<Project
					title="Imperial Promotion"
					text="Simple site that validates a promotional code. User must insert a adress to send the award "
				/>
			</Link>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
			<Project
				title="Project 1"
				text="Uma breve descrição do projeto aqui! Explica com poucas pvras
				a motivação do projeto."
			/>
		</div>
	);
}

export default Projects;
