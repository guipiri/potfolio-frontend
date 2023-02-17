import React, { useState } from "react";
import styles from "./index.module.css";

function Telegram() {
  const [file, setFile] = useState("");
  
  const formData = new FormData()
  formData.append("htmlInput", file)
	
  function handleSubmit(e) {
    console.log(formData);
		e.preventDefault();
		console.log(file);
		fetch("http://localhost:3001/uploadFile", {
			method: "POST",
			body: formData,
			headers: {
				"Content-Type":
					"multipart/form-data",
			},
		});
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
		</div>
	);
}

export default Telegram;
