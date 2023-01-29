import React from "react";
import styles from "./index.module.css";

function AboutMe() {
	const me = {
		name: "Guilherme Souza de Oliveira",
		birthday: "15/02/1995",
		education: [
			{
				institution: "Federal University of São Carlos",
				course: "mathematics",
				degree: "Bachelor",
			},
			{
				institution: "Federal University of São Carlos",
				course: "mathematics",
				degree: "Bachelor",
			},
		],
	};
	let meString = JSON.stringify(me, null, "\t");
	console.log(meString.split("\t"));

	return (
		<div>
			<p>var me = {meString.slice(0, 1)}</p>
			<br />
			<p className={styles.jsonP}>{meString.split("\t")[1]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[2]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[3]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[5]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[8]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[11]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[14]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[16]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[18]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[21]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[24]}</p>
			<p className={styles.jsonP}>{meString.split("\t")[27]}</p>

			<p className={styles.jsonP}>{meString.split("\t")[29]}</p>

			<p className={styles.jsonP}>
				{meString.split("\t")[17].replace("}", "")}
			</p>

			<p>{meString[meString.lastIndexOf("}")]}</p>
		</div>
	);
}

export default AboutMe;
