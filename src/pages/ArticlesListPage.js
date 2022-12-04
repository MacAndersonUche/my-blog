import { Fragment } from "react";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => {
	return (
		<Fragment>
			<h1>Articles</h1>
			<ArticlesList articles={articles}/>
		</Fragment>
	);
};

export default ArticlesListPage;
