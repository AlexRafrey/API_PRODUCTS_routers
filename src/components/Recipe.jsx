import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const API_KEY = '5051b78c3d192b18edcd41947bfc3ce7';
class Recipe extends Component {
	state ={
		activeRecipe: [],
	};
	componentDidMount = async() =>{
		const title = this.props.location.state.recipe;
		const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
		
		const res = await req.json();
		this.setState({ activeRecipe: res.recipes[0]})
		console.log(this.state.activeRecipe);
	}
	render(){
		const recipe = this.state.activeRecipe;
		return(
			<div className='container'>
				<div className="row justify-content-center">
					<div className="col-12 jumbotron active-recipe">
						{this.state.activeRecipe.length !== 0 &&
							<div className="jumbotron active-recipe">
								<img src={recipe.image_url} alt="" className="active-recipe-img"/>
								<h3>{recipe.title}</h3>
								<p>Publish: {recipe.publisher}</p>
								<p>Website: <a href={recipe.publisher_url}>{recipe.publisher_url}</a></p>
								<button className='btn btn-secondary' type='button' ><Link to='/'>Go home</Link></button>
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
};



export default Recipe;