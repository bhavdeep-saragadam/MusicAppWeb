import React from 'react'
import Footer from './components/footer/footer'
import Title from './components/title/title'
import './App.css'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<div>
			<Title />
			
			<Footer />
			</div>
			
		)
	}
}