import { Fragment } from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
	return (
		<Fragment>
			{articles.map((article) => (
				<Link
					className='article-list-item'
					to={`/articles/${article.name}`}
					key={article.name}
				>
					<h3>{article.title}</h3>
					<p>{article.content[0].substring(0, 150)}..</p>
				</Link>
			))}
		</Fragment>
	);
};

export default ArticlesList;
