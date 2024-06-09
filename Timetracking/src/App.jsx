import { useState } from "react";
import Reports from "./components/Reports";
import Summary from "./components/Summary";
function App() {
	const [times, setTimes] = useState("daily");
	return (
		<div className="mx-auto sm:w-4/5 sm:flex sm:justify-between sm:mt-32 p-5 sm:p-0">
			<Summary times={times} setTimes={setTimes} />
			<Reports times={times} />
		</div>
	);
}

export default App;
