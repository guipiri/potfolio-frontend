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
		stacks: ["React.js", "Node.js", "Javascript", "HTML", "CSS"],
		description:
			"Bachelor of Mathematics, digital marketing professional, paid media specialist, technology enthusiast, aspiring developer, very curious and passionate about solving problems.",
	};
	let meString = JSON.stringify(me, null, "\t").replaceAll('"', "");

	const P1 = styles.jsonP1;
	const P2 = styles.jsonP2;
	const P3 = styles.jsonP3;

	const identation = [
		[1, P1],
		[2, P1],
		[3, P1],
		[5, P2],
		[8, P3],
		[11, P3],
		[14, P3],
		[16, P2],
		[18, P2],
		[21, P3],
		[24, P3],
		[27, P3],
		[29, P2],
		[30, P1],
		[31, P1],
		[33, P2],
		[36, P3],
		[39, P3],
		[42, P3],
		[44, P2],
		[46, P2],
		[49, P3],
		[52, P3],
		[55, P3],
		[57, P2],
		[59, P2],
		[62, P3],
		[65, P3],
		[68, P3],
		[70, P2],
		[72, P2],
		[75, P3],
		[78, P3],
		[81, P3],
		[83, P2],
		[84, P2],
		[85, P1],
		[87, P2],
		[89, P2],
		[91, P2],
		[93, P2],
		[95, P2],
		[96, P2],
	];

	console.log(meString.split("\t"));

	return (
		<div className={styles.jsonDiv2}>
			<div className={styles.jsonDiv}>
				<p>var me = {meString.slice(0, 1)}</p>

				{identation.map((row) => {
					return (
						<p key={row[0]} className={row[1]}>
							{meString.split("\t")[row[0]]}
						</p>
					);
				})}

				<p className={P1}>
					{meString.split("\t")[97].replace("}", "")}
				</p>
				<p>{meString[meString.lastIndexOf("}")]}</p>
			</div>
		</div>
	);
}

export default AboutMe;
