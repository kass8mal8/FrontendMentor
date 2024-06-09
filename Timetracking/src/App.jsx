import Reports from "./components/Reports";
import Summary from "./components/Summary";
function App() {
	return (
		<div className="mx-auto w-4/5 sm:flex sm:justify-between">
			<Summary />
			<Reports />
		</div>
	);
}

export default App;
