import React from "react";

import { skills } from "@/data";

const Skills = () => {
	return (
		<div className="py-20 w-full" id="skills">
			<h1 className="heading">
				My <span className="text-purple">Skills</span>
			</h1>

			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-8">
				{skills.map((category) => (
					<div
						key={category.id}
						className="flex-1 text-black-100 dark:text-white border-neutral-200 p-5 rounded-xl shadow-lg border border-white/[0.1]"
						style={{
							background: "rgb(4,7,29)",
							backgroundColor:
								"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
						}}
					>
						<h2 className="text-start text-xl md:text-2xl font-bold mb-4 font-sans">
							{category.category}
						</h2>
						<ul className="flex flex-wrap gap-3">
							{category.details.map((skill, index) => (
								<li
									key={index}
									className="bg-purple-500 bg-opacity-80 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-md transition duration-300 transform hover:scale-105 hover:bg-opacity-100"
									style={{ backgroundColor: "#10132e" }}
								>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
