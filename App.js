import React from 'react';
class App extends React.Component {
	constructor(){
		super()
		this.state = {
			txt: 'this is a the state txt'
		}
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({
			txt: e.target.value
		})
	}
	render(){
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
				<Widget txt={this.state.txt} update={this.update}/>
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