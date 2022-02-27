import React, { Component } from 'react'
import {HomePage} from './pages/HomePage';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Webpack + React setup!</h1>
				<HomePage/>
			</div>
		);
	}
}

export default App;