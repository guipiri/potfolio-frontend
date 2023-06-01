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
		baseURL: process.env.REACT_APP_API_URL,
	});

	async function handleSubmit(e) {
		e.preventDefault();

		if (!files[0]) {
			setAlertConfig({
				on: true,
				msg: "Selecione arquivos HTML do Telegram!",
				title: "Nenhum arquivo selecionado",
				type: "fail",
			})
		} else {
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
				.then(() => setFiles)
				.catch((err) =>
					setAlertConfig({
						on: true,
						msg: err.data,
						title: "Falha",
						type: "fail",
					})
				);
		}
	}

	function handleChange(e) {
		const files = e.target.files
		if (files && Array.from(files).find(({ type }) => type !== "text/html")) {
			setAlertConfig({
				on: true,
				msg: "Apenas arquivos do tipo HTML são permitidos!",
				title: "Formato de arquivo incompatível",
				type: "fail",
			});
		} else {
			setFiles(files)
		}
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
							value=""
							name="htmlInput"
							id="htmlInput"
							type="file"
							accept="text/html"
							multiple
							onChange={handleChange}
							onDragEnter={(e) => {
								e.target.labels[0].className +=
									" " + styles.dragEnter;
							}}
							onDragLeave={(e) => {
								e.target.labels[0].className = styles.label;
							}}
							onDrop={(e) => {
								e.target.labels[0].className = styles.label;
							}}
						/>
						drag and drop your HTML files here...
					</label>
					<div>
						<ol>
							{files &&
								Array.from(files).map((item, index) => {
									return <li className={styles.listFiles} key={index}>{item.name}<button type="reset" onClick={()=>setFiles()}>remove</button></li>;
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
