/** @format */

const TrashSearchResult = ({
	articles,
	id,
}: {
	articles: { posts: object | any };
	id: string;
}) => {
	return articles.posts.length > 0 ? (
		<div className='search-grid'>
			{articles.posts.map((article): any => (
				<div key={id} className='trash-card'>
					{article.title}
				</div>
			))}
		</div>
	) : (
		<div className='search-message'> No articles found</div>
	);
};

export default TrashSearchResult;
