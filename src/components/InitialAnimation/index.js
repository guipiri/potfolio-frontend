import React from "react";
import styles from "./index.module.css";

function InitialAnimation({ texta, textb }) {

	const modeTyping = sessionStorage.getItem("modeTyping");
	setTimeout(() => {
		sessionStorage.setItem("modeTyping", false);
	}, 7000);

	return (
		<>
			{!modeTyping && (
				<>
					<p className={styles.typing}>{texta}</p>
					<p className={styles.typing2}>{textb}</p>
				</>
			)}
			{modeTyping && (
				<>
					<p className={styles.noTyping}>{texta}</p>
					<p className={styles.noTyping2}>{textb}</p>
				</>
			)}
		</>
	);
}

export default InitialAnimation;
