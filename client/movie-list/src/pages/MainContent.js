import React, { useState, useEffect } from 'react'
import { MovieList } from '../components/MovieList'
import ReactPaginate from 'react-paginate'
require('dotenv').config()

class MainContent extends React.Component {
	constructor() {
		super()
		this.state = {
			trending: [],
			currentPage: 1,
			offset: 3,
		}
		this.fetchTrending = this.fetchTrending.bind(this)
		this.handlePageClick = this.handlePageClick.bind(this)
	}

	async fetchTrending(page) {
		try {
			const fetchKey = await fetch(
				'https://api.heroku.com/apps/reactmovielist/config-vars',
				{
					method: 'GET',
					headers: {
						Authorization:
							'Bearer 4c782854-5f8d-4bc3-9fc7-81ce1c1a8a9a',
						'Content-Type': 'application/json',
						Accept: 'application/vnd.heroku+json; version=3',
					},
				}
			)
			const apiKey = await fetchKey.json()

			const res = await fetch(
				`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey.REACT_APP_TMD_API}&page=${page}`
			)
			if (!res.ok) throw new Error(res.status)

			const data = await res.json()
			this.setState({
				trending: data.results,
				pageCount: data.total_pages,
			})
		} catch (error) {
			console.log(error)
		}
	}

	componentDidMount() {
		this.fetchTrending(this.state.currentPage)
	}

	handlePageClick(data) {
		window.scrollTo(0, 0)
		this.fetchTrending(++data.selected)
	}

	render() {
		return (
			<div id='main-content'>
				<MovieList movies={this.state.trending} />
				<ReactPaginate
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={this.state.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'pagination-active'}
				/>
			</div>
		)
	}
}

export default MainContent
