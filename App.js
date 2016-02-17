import React from 'react';

class App extends React.Component {

	constructor(){
		super();
		this.state = {data:[
			{id:0, name:"Cainã Nuñes"},
			{id:1, name:"Moises Ribeiro"},
			{id:2, name:"Alexandre Magno"},
			{id:3, name:"Cezar Liedke"},
			{id:4, name:"Guilherme Bruzzi"},
			{id:5, name:"Emiliano Barbosa"},
			{id:6, name:"Bayron Quinelato"}
		]}
	}

	render(){

		let rows = this.state.data.map( person => {
			return <PersonRow data={person} key={person.id} />
		})

		return <table>
		<tbody>{rows}</tbody>
		</table>
	}
}

const PersonRow = (props) => {
	return <tr>
		<td>{props.data.id}</td>
		<td>{props.data.name}</td>
	</tr>
}

export default App