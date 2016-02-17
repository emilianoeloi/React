import React from 'react';
class App extends React.Component {
	constructor(){
		super()
		this.state = {
			txt: 'this is a the state txt',
			cat: 0
		}
	}
	update(e){
		this.setState({
			txt: e.target.value
		})
	}
	render(){
		let txt = this.props.txt
		return (<div>
			<h1>Vai Sabrina!</h1>
			<h2>Ai Sávio</h2>
			<h3>{txt}</h3>
			<h4>{this.state.txt}</h4>
			<input type="text" onChange={this.update.bind(this)} />
			</div>)
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default txt'
}

// const App = () => <h1>Vai Sávio</h1>

export default App