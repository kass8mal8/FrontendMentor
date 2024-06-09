/* eslint-disable react/prop-types */
import reports from "../data.json";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import social from "../assets/images/icon-social.svg";
import exercise from "../assets/images/icon-exercise.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import work from "../assets/images/icon-work.svg";
import self_care from "../assets/images/icon-self-care.svg";

const Reports = ({ times }) => {
	const images = [work, play, study, exercise, social, self_care];
	const styles = [
		"bg-red-300",
		"bg-blue-300",
		"bg-red-400",
		"bg-green-300",
		"bg-violet-600",
		"bg-orange-200",
	];
	return (
		<div className="grid sm:grid-cols-3 gap-5 w-full sm:ml-5">
			{reports.map((report, index) => (
				<div
					key={index}
					className={`${styles[index]} rounded-2xl relative bg-opacity-95`}
				>
					<section className="relative">
						<img
							src={images[index]}
							alt="illustration"
							className="w-20 h-20 absolute z-0 right-2 opacity-50"
						/>
					</section>
					<div className="bg-blue-950 hover:bg-blue-900 cursor-pointer transition-colors duration-500 max-w-sm text-white sm:h-40 rounded-xl py-4 px-6 mt-12 relative z-10 ">
						<aside className="flex justify-between items-center">
							<p className="font-semibold">{report.title}</p>
							<img
								src={ellipsis}
								alt="ellipses"
								className="w-4 h-2 hover:cursor-pointer"
							/>
						</aside>
						<aside className="flex sm:block items-center justify-between">
							<h1 className="text-2xl sm:text-5xl font-medium mt-4">
								{`${report.timeframes[times].current}hrs`}
							</h1>
							<p className="text-slate-300 text-sm sm:text-xs mt-4 sm:mt-2">
								Last week - {`${report.timeframes[times].previous}hrs`}
							</p>
						</aside>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reports;
