import React from "react";
import styles from "./index.module.css";

function InitialAnimation({ texta, textb, textc }) {
	return (
		<>
			<p className={styles.typing}>{texta}</p>
			<p className={styles.typing2}>{textb}</p>
		</>
	);
}

export default InitialAnimation;
