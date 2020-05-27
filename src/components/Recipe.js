import React from 'react';
import { deleteRecipe, startEditing } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const Recipe = (props) => {
	const dispatch = useDispatch();
	const { id } = useSelector(state => state.user)

	const renderUsersButtons = () => {
		if (Number(props.user_id) === Number(id)) {
			return (
				<>
					<button onClick={() => dispatch(startEditing({ ...props }))}>Edit</button>
					<button onClick={() => dispatch(deleteRecipe(props.id))}>Delete</button>
				</>
			)
		}
	}

	return (
		<div className="recipe-card">
			<h3>{props.source}</h3>
			<p>Title: {props.title}</p>
			<p>Source: {props.source}</p>
			<p>Ingredients: {props.ingredients}</p>
			<p>Instructions:{props.instructions}</p>
			<p>Category: {props.category}</p>

			<img src={props.img_url} alt={props.title} />
			{ renderUsersButtons() }
		</div>
	);
};

export default Recipe;
