import React from "react";
import styles from "./index.module.css";

function AboutMe() {
	const me = {
		name: "Guilherme Souza de Oliveira",
		birthday: "15/02/1995",
		education: [
			{
				institution: "Federal University of São Carlos",
				course: "Mathematics",
				degree: "Bachelor",
			},
			{
				institution: "University of São Paulo",
				course: "Data Science and Analytics",
				degree: "Master of business administration",
			},
		],
		workExperience: [
			{
				company: "Yolo Group - Sportsbet.io",
				position: "CRM Analyst",
				period: "2022-currently",
			},
			{
				company: "Sorridents",
				position: "Marketing Consultant",
				period: "2021-2022",
			},
			{
				company: "Villa Marketing",
				position: "Media Coordinator",
				period: "2021-2021",
			},
			{
				company: "raccoon.monks",
				position: "Media Coordinator",
				period: "2019-2021",
			},
		],
	};
	let meString = JSON.stringify(me, null, "\t").replaceAll('"', "");

	return (
		<div className={styles.jsonDiv2}>
			<div className={styles.jsonDiv}>
				<p>var me = {meString.slice(0, 1)}</p>
				<br />
				<p className={styles.jsonP1}>{meString.split("\t")[1]}</p>
				<br />
				<p className={styles.jsonP1}>{meString.split("\t")[2]}</p>
				<br />
				<p className={styles.jsonP1}>{meString.split("\t")[3]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[5]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[8]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[11]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[14]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[16]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[18]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[21]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[24]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[27]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[29]}</p>
				<br />
				<p className={styles.jsonP1}>{meString.split("\t")[30]}</p>
				<br />
				<p className={styles.jsonP1}>{meString.split("\t")[31]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[33]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[36]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[39]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[42]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[44]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[46]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[49]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[52]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[55]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[57]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[59]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[62]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[65]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[68]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[70]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[72]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[75]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[78]}</p>
				<br />
				<p className={styles.jsonP3}>{meString.split("\t")[81]}</p>
				<br />
				<p className={styles.jsonP2}>{meString.split("\t")[83]}</p>
				<br />
				<p className={styles.jsonP1}>
					{meString.split("\t")[17].replace("}", "")}
				</p>
				<p>{meString[meString.lastIndexOf("}")]}</p>
			</div>
		</div>
	);
}

export default AboutMe;
