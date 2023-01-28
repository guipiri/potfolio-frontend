import React from "react";
import styles from "./index.module.css";

function InitialAnimation({ texta, textb }) {

	const modeTypingOn = sessionStorage.getItem("modeTypingOn");
	setTimeout(() => {
		sessionStorage.setItem("modeTypingOn", false);
	}, 5000);

	return (
		<>
			{!modeTypingOn && (
				<>
					<p className={styles.typing}>{texta}</p>
					<p className={styles.typing2}>{textb}</p>
				</>
			)}
			{modeTypingOn && (
				<>
					<p className={styles.noTyping}>{texta}</p>
					<p className={styles.noTyping2}>{textb}</p>
				</>
			)}
		</>
	);
}

export default InitialAnimation;
