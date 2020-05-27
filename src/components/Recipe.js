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
			<div className="recipe-info">
				<h3>{props.source}</h3>
				<p><span>Title:</span> <span>{props.title}</span></p>
				<p><span>Source:</span> <span>{props.source}</span></p>
				<p><span>Ingredients:</span> <span>{props.ingredients}</span></p>
				<p><span>Instructions:</span> <span>{props.instructions}</span></p>
				<p><span>Category:</span> <span>{props.category}</span></p>
			</div>
			<img src={props.img_url} alt={props.title} />
			<div className="recipe-buttons">
				{renderUsersButtons()}
			</div>
		</div>
	);
};

export default Recipe;
