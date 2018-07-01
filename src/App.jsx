import React, {Component} from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import Recipes from './components/Recipes';
// import styled from 'styled-components';

const API_KEY = '5051b78c3d192b18edcd41947bfc3ce7';


class App extends Component{
	constructor(props){
		super();
		this.state = {
			recipes: [],
		}
	
	}
	componentDidUpdate = () =>{
		const recipes = JSON.stringify(this.state.recipes);
		localStorage.setItem('recipes', recipes);
	}
	componentDidMount = () =>{
		const json = localStorage.getItem('recipes');
		const recipes = JSON.parse(json);
		this.state.recipes.length > 0 && this.setState({recipes});
	}
//здесь логика, передаем на коммпонент Form  лишь событие клика
	getRecipe = async(e) =>{
		const value = e.target.elements.recipeName.value;
		e.preventDefault();
		const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${value}&count=9`);
		// shredded%20chicken
		const data = await api_call.json();
		this.setState({recipes: data.recipes});
		console.log(this.state.recipes);
	}

	render(){	
		return(
			<div className="app" >
				<Header></Header>
				<Form getRecipe={this.getRecipe}></Form>
				<Recipes recipes={this.state.recipes}></Recipes>
			</div>
		);
	}
}

export default App;