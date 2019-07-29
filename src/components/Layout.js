import React from 'react';
import '../styles/layout.css';


const Layout = (props) => {
	
	return (
		<div className="container">
			{props.display ? props.children : props.children}
			<header className="App-header">
			</header>

		</div>
	);
}

export default Layout;
