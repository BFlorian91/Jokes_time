import React, { Component } from 'react';
import '../styles/App.css';

const API = 'https://bridge.buddyweb.fr/api/blagues/blagues/';


const Loading = () => {
	return (
		<div className="sk-fading-circle">
			<div className="sk-circle1 sk-circle"></div>
			<div className="sk-circle2 sk-circle"></div>
			<div className="sk-circle3 sk-circle"></div>
			<div className="sk-circle4 sk-circle"></div>
			<div className="sk-circle5 sk-circle"></div>
			<div className="sk-circle6 sk-circle"></div>
			<div className="sk-circle7 sk-circle"></div>
			<div className="sk-circle8 sk-circle"></div>
			<div className="sk-circle9 sk-circle"></div>
			<div className="sk-circle10 sk-circle"></div>
			<div className="sk-circle11 sk-circle"></div>
			<div className="sk-circle12 sk-circle"></div>
		</div>
	);
}

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			jokes: [],
			isFetching: false,
			display: false,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			fetch(API)
				.then(res => res.json())
				.then(json => {
					this.setState({ 
						jokes: json, 
						isFetching: true
					})
				})}, 1000);
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	render() {
		const { jokes, isFetching } = this.state;
		return (
			<div className="App">
					<h2 className="title">Jokes TIME !!</h2>
					<img 
						className="clown" 
						src="https://cdn.pixabay.com/photo/2019/07/18/08/28/circus-animal-4345840_960_720.png"
						alt="clown"
						onClick={() => {
							if (!this.state.display) {
								this.setState({
									display: true,
								})
								document.getElementById('main').style.display = "block";
							} else {
								//window.location.reload();
								document.getElementById('main').style.display = "block";
								this.setState({
									display: this.state.display,
								})
							}
						}
					}/>
				<div id="main">
					<div style={{ margin: '20px 20px' }} >
						{!isFetching ? <Loading /> : jokes[this.getRandomInt(100)].blagues}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
