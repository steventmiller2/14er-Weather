import React, { Component } from 'react'
import Dashboard from './pages/Dashboard';
import {HomePage} from './pages/HomePage';

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