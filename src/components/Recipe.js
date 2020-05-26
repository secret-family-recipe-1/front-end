import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Recipe = (props) => {
	return (
		<div>
			<h3>{props.source}</h3>
			<p>Title: {props.title}</p>
			<p>Source: {props.source}</p>
			<p>Ingredients: {props.ingredients}</p>
			<p>Instructions:{props.instructions}</p>
			<p>Category: {props.category}</p>

			<img src={props.img_url} alt={`picture of ${props.title}`} />
		</div>
	);
};

export default Recipe;
