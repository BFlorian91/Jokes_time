import React, { Component } from 'react';
import '../styles/App.css';
import Layout from './Layout.js'

const API = 'https://bridge.buddyweb.fr/api/blagues/blagues/';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			joke: [],
			isFetching: false
		};
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
			.then(data => this.setState({ joke: data.joke }));
			//console.log(joke[1])
	}

	getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
	}

	render() {

		//const { joke } = this.state;
		return (
			<div className="App">
				<Layout>
					<h2 className="title">Jokes TIME !!</h2>
				</Layout>
				<div className="main">
					<p>{this.state.isFetching ? 'Fetching data' : 'none'}</p>
				</div>
			</div>
		);
	}
}

export default App;
