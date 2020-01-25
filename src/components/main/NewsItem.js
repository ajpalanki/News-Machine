import React from 'react';
import Moment from 'react-moment';

const NewsItem = (props) => {
	const { newsItem } = props;

	return (
		<div className="col-md-3 mb-5">
			<div className="card bg-dark text-center h-100">
				<div className="card-body">
					<a href={newsItem.url} target="_blank" rel="noopener noreferrer">
						<img className="card-img-top" src={newsItem.urlToImage} alt={newsItem.title} />
					</a>
					<h5 className="text-light card-title">
						{newsItem.title.length < 20 ? `${newsItem.title}` : `${newsItem.title.substring(0, 25)}...`}
					</h5>
					<h5 className="card-text text-success">{newsItem.author}</h5>
					<div className="text-light card-text">
						<span>Published At: </span>
						<Moment format="MM/DD/YYYY HH:mm">{newsItem.publishedAt}</Moment>
					</div>
				</div>
				<div className="card-footer">
					<div className="card-text text-light">{newsItem.description}</div>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
