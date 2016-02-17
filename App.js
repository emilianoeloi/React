import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(){
		super();
		this.state = { increasing: false };
		this.update = this.update.bind(this);
	}

	update(){
		console.info('update', this.props.val);
		ReactDOM.render(
			<App val={this.props.val+1} />,
			document.getElementById('app')
		);
	}

	componentWillReceiveProps(nextProps){
		console.info('componentWillReceiveProps', 'nextProps', nextProps);
		this.setState({increasing: nextProps.val > this.props.val});
	}

	shouldComponentUpdate(nextProps, nextState){
		console.info('shouldComponentUpdate','nextProps','nextState',nextProps, nextState);
		return nextProps.val % 5 == 0;
	}

	componentDidUpdate(prevProps, prevState){
		console.info('componentDidUpdate', 'prevProps', 'prevState', prevProps, prevState)

	}

	componentWillMount(){
		console.info('componentWillMount');
	}

	render(){
		console.info('render');
		return (
			<button onClick={this.update}>
				{this.props.val}
			</button>
		)
	}

	componentDidMount(){
		console.info('componentDidMount', ReactDOM.findDOMNode(this));
	}

	componentWillUnmount(){
		console.info('componentWillUnmount');
	}
}

App.defaultProps = {val:0}

export default App