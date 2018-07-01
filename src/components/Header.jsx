import React, {Component} from 'react';


class Header extends Component{
	state = {
		array: '',
	};

	// handleCheck = index => event=>{
	// 	let array = this.state.test.slice();
	// 	array.forEach(element => {
	// 		element.right == element.user ? element.correct = 1 : '';
	// 	});
	// 	this.setState({test: array});
	// 	console.log(this.state.test);
	// };
	render() {
		const {count} = this.state;
		return(
			<div className='header'>
				<h1>Recipe Search</h1>
			</div>
		);
	}
}



export default Header;