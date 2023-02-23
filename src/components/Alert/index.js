import React from "react";
import styles from "./index.module.css";

function Alert({ title, msg, type, ok }) {
	return (
		<>
			<div className={styles.conteiner}>
				<div className={styles.divAlert}>
					<h2 className={type}>{title}</h2>
					<p>{msg}</p>
					<button autoFocus className={styles.button} onClick={ok}>
						OK
					</button>
				</div>
			</div>
		</>
	);
}

export default Alert;
