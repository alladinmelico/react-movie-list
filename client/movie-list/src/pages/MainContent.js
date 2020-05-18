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
			const res = await fetch(
				`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMD_API}&page=${page}`
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
