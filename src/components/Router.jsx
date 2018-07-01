import React, {Component} from 'react';
import {
	BrowserRouter ,
	Route,
	Switch
  } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={App} exact></Route>
			<Route path='/recipe/:id' component={Recipe}></Route>
		</Switch>	
	</BrowserRouter>
);

export default Router;