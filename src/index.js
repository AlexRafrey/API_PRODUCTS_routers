import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.css";
import App from './App';
// import {
// 	BrowserRouter as Router,
	// Route,
	// Link,
	// Redirect
//   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/Router';

ReactDOM.render(
		<Router />, 
	
document.getElementById('root'));

// document.querySelectorAll('a').forEach(element => {
// 	element.addEventListener('click', (e)=>{
// 		e.preventDefault(); 
// 	})
// });
