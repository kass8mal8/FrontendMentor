/* eslint-disable react/prop-types */
import { useState } from "react";
import Jeremy from "../assets/images/image-jeremy.png";

const Summary = ({ setTimes }) => {
	const timeframes = ["daily", "weekly", "monthly"];
	const choices = [false, true, false];
	const [isActive, setIsActive] = useState(choices);

	const handleFrameSwitch = (num) => {
		setTimes(timeframes[num]);
		const newActive = [...choices];
		newActive[1] = false;
		newActive[num] === false
			? (newActive[num] = true)
			: (newActive[num] = false);
		setIsActive(newActive);
	};

	return (
		<div className="bg-indigo-950 text-white rounded-xl my-4 sm:my-0 sm:w-1/4">
			<div className="flex space-x-3 sm:block items-center bg-indigo-500 p-4 sm:py-8 sm:px-9 rounded-xl">
				<img
					src={Jeremy}
					alt="Jeremy Robson"
					className=" w-14 h-14 sm:w-16 sm:h-16 border-white border-2 rounded-full"
				/>
				<aside className="sm:mt-4 sm:mb-8 sm:mr-4">
					<p className="text-slate-300 text-xs sm:text-sm">Report for</p>
					<p className="font-light text-2xl sm:text-4xl">Jeremy Robson</p>
				</aside>
			</div>

			<ul className="flex sm:block items-center justify-between sm:py-6 px-4 py-1 sm:px-9 text-indigo-400">
				<li
					className={`${isActive[0] && "text-white"} cursor-pointer`}
					onClick={() => handleFrameSwitch(0)}
				>
					Daily
				</li>
				<li
					className={`${isActive[1] && "text-white"} cursor-pointer my-4`}
					onClick={() => handleFrameSwitch(1)}
				>
					Weekly
				</li>
				<li
					className={`${isActive[2] && "text-white"} cursor-pointer`}
					onClick={() => handleFrameSwitch(2)}
				>
					Monthly
				</li>
			</ul>
		</div>
	);
};

export default Summary;
