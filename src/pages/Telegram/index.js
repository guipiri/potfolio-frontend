import React, { useState } from "react";
import styles from "./index.module.css";
import axios from "axios";
import Alert from "../../components/Alert";

function Telegram() {
	const [file, setFile] = useState("");
	const api = axios.create({
		baseURL: "http://localhost:3001/",
	});

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("htmlInput", file);
		const headers = {
			headers: {
				"Content-Type": "multipart/form-data;bondary=My Bondary",
			},
		};
		await api
			.post("/uploadFile", formData, headers)
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	}

	return (
		<div className={styles.formConteiner}>
			<form onSubmit={handleSubmit} encType="multipart/form-data">
				<label htmlFor="htmlInput">Suba seus arquivos HTML:</label>
				<input
					name="htmlInput"
					id="htmlInput"
					type="file"
					accept="text/html"
					onChange={(e) => {
						setFile(e.target.files[0]);
					}}
				/>
				<button type="submit">Enviar</button>
			</form>
			<Alert
				msg="ola, aqui vai uma curta msg sobre o que ocorreu no app"
				title="Titulo aqui né"
				type="success"
			/>
		</div>
	);
}

export default Telegram;
