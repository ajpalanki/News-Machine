import React, { Component } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import NewsItem from './NewsItem';

export class News extends Component {
	state = {
		heading: '',
		searchText: '',
		news: []
	};

	componentDidMount() {
		axios
			.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
			.then((response) => this.setState({ news: response.data.articles, heading: 'Top 20 Headlines' }))
			.catch((err) => console.log(err));
	}

	onSubmit = async (e) => {
		e.preventDefault();

		axios
			.get(`https://newsapi.org/v2/everything?q=${this.state.searchText}&apiKey=${process.env.REACT_APP_API_KEY}`)
			.then((response) => {
				this.setState({ news: response.data.articles, heading: 'Search Results' });
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { news, heading, searchText } = this.state;

		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid bg-dark text-light mt-5 text-center">
					<div className="container">
						<h1 className="display-4 mb-3">
							<FaSearch /> Search for News
						</h1>
						<form id="searchForm" onSubmit={this.onSubmit}>
							<input
								type="text"
								className="form-control"
								name="searchText"
								placeholder="Search News..."
								value={searchText}
								onChange={this.onChange}
							/>
							<button type="submit" className="btn btn-primary btn-bg mt-3">
								Search
							</button>
						</form>
					</div>
				</div>

				<h3 className="text-center mb-4">{heading}</h3>
				<div className="row">{news.map((item) => <NewsItem key={item.title} newsItem={item} />)}</div>
			</React.Fragment>
		);
	}
}

export default News;
