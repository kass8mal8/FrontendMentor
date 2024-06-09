/* eslint-disable react/prop-types */
import { useState } from "react";
import Jeremy from "../assets/images/image-jeremy.png";
// import reports from "../data.json";

const Summary = ({ times, setTimes }) => {
	const timeframes = ["daily", "weekly", "monthly"];
	const choice = [false, false, false];
	const [isActive, setIsActive] = useState(choice);
	const handleFrameSwitch = (num) => {
		setTimes(timeframes[num]);
		const newActive = isActive;
		// newActive[1] = true;
		// setIsActive(num);
		console.log(num);

		// timeframes.forEach((timeframe) => {
		// 	timeframe == choices[num] && (setIsActive[num] = true);
		// 	console.log(isActive[num]);
		// });
	};

	return (
		<div className="bg-indigo-950 text-white rounded-xl w-1/4">
			<div className="bg-indigo-500 py-8 px-9 rounded-xl">
				<img
					src={Jeremy}
					alt="Jeremy Robson"
					className="w-14 h-14 border-white border-2 rounded-full"
				/>
				<aside className="mt-4 mb-8">
					<p className="text-slate-300 text-sm">Report for</p>
					<p className="font-light text-3xl">
						Jeremy
						<br /> Robson
					</p>
				</aside>
			</div>

			<ul className="py-6 px-9 text-indigo-400">
				<li className="cursor-pointer" onClick={() => handleFrameSwitch(0)}>
					Daily
				</li>
				<li
					className="my-4 cursor-pointer"
					onClick={() => handleFrameSwitch(1)}
				>
					Weekly
				</li>
				<li className="cursor-pointer" onClick={() => handleFrameSwitch(2)}>
					Monthly
				</li>
			</ul>
		</div>
	);
};

export default Summary;
