import React, { useState } from "react";
import styles from "./index.module.css";
import axios from "axios";
import Alert from "../../components/Alert";
import ProjectDescription from "../../components/ProjectDescription";
import { AiOutlineUpload } from "react-icons/ai";

function Telegram() {
	const [files, setFiles] = useState();
	const [alertConfig, setAlertConfig] = useState({ on: false });

	const api = axios.create({
		baseURL: "http://localhost:3001/",
	});

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();

		for (let index = 0; index < files.length; index++) {
			formData.append("htmlInput", files[index]);
		}

		const headers = {
			headers: {
				"Content-Type": "multipart/form-data;bondary=My Bondary",
			},
		};

		await api
			.post("/uploadFiles", formData, headers)
			.then((response) =>
				setAlertConfig({
					on: true,
					msg: response.data,
					title: "Sucesso no upload!",
					type: "success",
				})
			)
			.catch((err) =>
				setAlertConfig({
					on: true,
					msg: err.data,
					title: "Falha",
					type: "fail",
				})
			);
	}

	return (
		<>
			<div className={styles.formConteiner}>
				<ProjectDescription
					title="Telegram Comments Extraction"
					p1="Workin in Yolo Group CRM we used to raffle some free bets in our Telegram channel. We ask users to comment something in a telegram post to be eligible."
					p2="After finishing promotion we had to have the users name that had commented. But promotions like that reached 45k comments. So we couldn't extract these names manually and the goal of this project is that: extract names of users in telegram channel posts."
				/>

				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<label className={styles.label} htmlFor="htmlInput">
						<AiOutlineUpload />
						<input
							name="htmlInput"
							id="htmlInput"
							type="file"
							accept="text/html"
							multiple
							onChange={(e) => {
								setFiles(e.target.files);
								console.log(files);
							}}
							onDragEnter={(e) => {
								e.target.labels[0].className +=
									" " + styles.dragEnter;
							}}
							onDragLeave={(e) => {
								e.target.labels[0].className = styles.label;
							}}
						/>
						drag and drop your HTML files here...
					</label>
					<div>
						<ol>
							{files &&
								Array.from(files).map((item) => {
									return <li>{item.name}</li>;
								})}
						</ol>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
			{alertConfig.on && (
				<Alert
					msg={alertConfig.msg}
					title={alertConfig.title}
					type={alertConfig.type}
					ok={() => {
						setAlertConfig({ on: false });
					}}
				/>
			)}
		</>
	);
}

export default Telegram;
