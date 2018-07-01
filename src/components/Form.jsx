import React, {Component} from 'react';

class Form extends Component{
	state = {
		
	};

	render() {
		const {count} = this.state;
		return(
			<form className='form' onSubmit={this.props.getRecipe}>
				<input type="text" className='form-input' name="recipeName"/>
				<button className="btn btn-primary">Search</button>
			</form>
		);
	}
}



export default Form;