import React from 'react';
import '../styles/layout.css';

const Layout = (props) => {
	return (
		<div className="container">
				{props.children}
			<header className="App-header">
				<img className="clown" src="https://cdn.pixabay.com/photo/2019/07/18/08/28/circus-animal-4345840_960_720.png" alt="clown" />
			</header>

		</div>
	);
}

export default Layout;
