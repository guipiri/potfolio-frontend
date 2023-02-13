import React, { useState } from "react";
import styles from "./index.module.css";

function InitialAnimation({ texta, textb }) {
	let modeTypingOn = sessionStorage.getItem("modeTypingOn");
	if (modeTypingOn === "false") {
		modeTypingOn = false;
	} else {
		modeTypingOn = true;
	}
	const [mode, setMode] = useState(modeTypingOn);

	setTimeout(() => {
		sessionStorage.setItem("modeTypingOn", false);
		if (mode === true) {
			setMode(false);
		}
	}, 5000);

	return (
		<div>
			{modeTypingOn && (
				<>
					<p className={styles.typing}>{texta}</p>
					<p className={styles.typing2}>{textb}</p>
				</>
			)}
			{!modeTypingOn && (
				<>
					<p className={styles.noTyping}>{texta}</p>
					<p className={styles.noTyping2}>{textb}</p>
				</>
			)}
			<button
				className={styles.animationAgainBtn}
				onClick={() => {
					sessionStorage.setItem("modeTypingOn", true);
					setMode(true);
				}}
			>
				modeTypingOnAgain
			</button>
		</div>
	);
}

export default InitialAnimation;
