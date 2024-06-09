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

	console.log(times);
	return (
		<div className="grid sm:grid-cols-3 gap-4 w-full sm:ml-4">
			{reports.map((report, index) => (
				<div key={index} className="bg-red-300 rounded-xl relative">
					<section className="relative">
						<img
							src={images[index]}
							alt="illustration"
							className="w-12 h-12 absolute -z-0 right-2"
						/>
					</section>
					<div className="bg-blue-950 max-w-sm text-white h-40 rounded-xl py-4 px-6 mt-10">
						<aside className="flex justify-between items-center">
							<p>{report.title}</p>
							<img src={ellipsis} alt="ellipses" className="w-5 h-2" />
						</aside>
						<h1 className="text-5xl font-light mt-4">
							{`${report.timeframes[times].current}hrs`}
						</h1>
						<p className="text-slate-300 text-xs mt-2">
							Last week - {`${report.timeframes[times].previous}hrs`}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reports;
