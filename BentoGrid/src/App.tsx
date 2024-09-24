import AI from "./components/AI";
import Post from "./components/Post";
import Schedule from "./components/Schedule";
import SocialMedia from "./components/SocialMedia";

function App() {
	return (
		<div className="container">
			<Post />
			<SocialMedia />
			<Schedule />
			<AI />
			<SocialMedia />
		</div>
	);
}

export default App;
