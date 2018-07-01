import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const Recipes = props =>(
			<div className="container">
					<div className='row rowm'>
						{props.recipes.map((item, index)=>{
							return (
								<div key={item.recipe_id} className='recipe col-md-4 ' >
									<div className='recipe-into'>
										<h3>{item.title}</h3>
										<img src={item.image_url} alt=""/>
										<div>
											<span>{item.publisher}</span>
											<button type="button" 
											style={{marginLeft: '10px'}} className='btn btn-secondary'>
											<Link
												to={{
													pathname: `/recipe/${item.recipe_id}`,
													state: {recipe: item.title }
												}}>View Recipe</Link></button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
		);



export default Recipes;