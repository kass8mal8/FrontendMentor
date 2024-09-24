import create_post from "../assets/images/illustration-create-post.webp";

const Post = () => {
	return (
		<div className="create-post">
			<h1>
				Create and schedule content <span className="quicker">quicker</span>
			</h1>
			<img src={create_post} alt="create-post" width={240} />
		</div>
	);
};

export default Post;
