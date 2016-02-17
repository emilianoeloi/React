import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(){
		super();
		this.state = { val:0 };
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({val: this.state.val+1});
	}
	componentWillMount(){
		console.info('componentWillMount');
		this.setState({m:2});
	}
	render(){
		console.info('render');
		return (
			<button onClick={this.update}>
				{this.state.val * this.state.m}
			</button>
		)
	}
	componentDidMount(){
		console.info('componentDidMount');
	}
	componentWillUnmount(){
		console.info('bye!');
	}
}

export default App