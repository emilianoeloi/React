import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Wrapper extends React.Component {
	constructor(){
		super();
	}
	update(){
	}
	mount(){
		ReactDOM.render(<App />, document.querySelector('#wrapper-app'));
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.querySelector('#wrapper-app'));
	}
	render(){
		return(
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="wrapper-app"></div>
			</div>
		)
	}
}

export default Wrapper; 