
const initial = {
  user: {},
  recipes: []
}

export const reducer = (state = initial, action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return { ...state, user: action.payload };
    case 'USER_UPDATE':
      return { ...state, user: action.payload };
    case 'USER_DELETE':
      return { ...state, user: {} };
    case 'FETCH_RECIPES':
      return { ...state, recipes: action.payload };
    case 'ADD_RECIPES':
      return { ...state, recipes: [...state.recipes, action.payload] };
    case 'UPDATE_RECIPE':
      return { ...state, recipes: state.recipes.map(recipe => {
        if(recipe.id === action.payload.id) return {...action.payload};
        return recipe;
      })};
    case 'DELETE_RECIPE':
      return {...state, recipes: state.recipes.filter(item => action.payload !== item.id)}
    default:
      return state;
  }
}