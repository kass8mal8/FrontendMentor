import stars from "../assets/images/illustration-five-stars.webp";

const SocialMedia = () => {
	return (
		<div className="social-media">
			<h1>
				Social Media <span>10x</span> Faster with AI
			</h1>
			<img src={stars} alt="stars" width={100} />
			<p>Over 4,000 5-star reviews</p>
		</div>
	);
};

export default SocialMedia;
