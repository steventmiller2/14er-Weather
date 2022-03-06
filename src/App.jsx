import React, { Component } from 'react'
import Dashboard from './pages/Dashboard.jsx';
import {HomePage} from './pages/HomePage.jsx';

class App extends Component {
	render() {
		return (
			<div>
				{/* <HomePage/> */}
				<Dashboard/>
			</div>
		);
	}
}

export default App;