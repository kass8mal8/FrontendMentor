import reports from "../data.json";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import social from "../assets/images/icon-social.svg";
import exercise from "../assets/images/icon-exercise.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import work from "../assets/images/icon-work.svg";
import self_care from "../assets/images/icon-self-care.svg";

const Reports = () => {
	const images = [work, play, study, exercise, social, self_care];

	return (
		<div className="grid sm:grid-cols-3 gap-4 w-full sm:ml-4">
			{reports.map((report, index) => (
				<div key={index}>
					<img src={images[index]} alt="illustration" className="w-10 h-10" />
					<div className="bg-blue-950 max-w-sm text-white">
						<aside className="flex justify-between items-center">
							<p>{report.title}</p>
							<img src={ellipsis} alt="ellipses" className="w-5 h-2" />
						</aside>
						<p>{report.timeframes?.daily.current}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reports;
