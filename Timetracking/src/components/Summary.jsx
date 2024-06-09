import Jeremy from "../assets/images/image-jeremy.png";

const Summary = () => {
	return (
		<div className="bg-indigo-950 text-white rounded-xl w-1/4">
			<div className="bg-indigo-500 py-8 px-10 rounded-xl">
				<img
					src={Jeremy}
					alt="Jeremy Robson"
					className="w-14 h-14 border-white border-2 rounded-full"
				/>
				<aside className="mt-4 mb-10">
					<p>Report for</p>
					<h1 className="font-semibold text-lg">Jeremy Robson</h1>
				</aside>
			</div>

			<ul className="p-4">
				<li>Daily</li>
				<li>Weekly</li>
				<li>Monthly</li>
			</ul>
		</div>
	);
};

export default Summary;
