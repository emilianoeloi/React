import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(){
		super()
		this.state = {
			red: 0,
			green: 0,
			blue: 0,
			val: 0
		}
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
			val: this.state.val +1
		})
	}
	componentWillMount(){
		this.setState({
			m:2
		})
	}
	render(){
		console.info('rendering!');
		return (
			<div>
			{this.state.txt}
			<hr/>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<Btn m={this.state.m} val={this.state.val} update={this.update} />
				<Btn2>I<Heart /> React</Btn2>
			</div>
		);
	}
	componentDidMount(){
		console.info(ReactDOM.findDOMNode(this));
	}
	componentWillUnmount(){
		console.info('buy');
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default txt'
}

class Slider extends React.Component {
	render(){
		return (<div><label></label><input ref="inp" type="range" min="0" max="255" onChange={this.props.update} /></div>);
	}
}

const Widget = (props) => {
	return (<div>
			<h1>Vai Sabrina!</h1>
			<h3>Ai Sávio</h3>
			<h4>{props.txt}</h4>
			<input type="text" onChange={props.update} />
			</div>)
}

const Btn = (props) => {
	return(
		<button onClick={props.update}>
			{props.val * props.m}
		</button>
	)
}

class Btn2 extends React.Component {
	render(){
		return <button>{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

// const App = () => <h1>Vai Sávio</h1>

export default App