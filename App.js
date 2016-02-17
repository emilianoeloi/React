import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(){
		super()
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render(){
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
			</div>
		);
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

// const App = () => <h1>Vai Sávio</h1>

export default App