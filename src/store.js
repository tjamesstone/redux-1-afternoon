import {createStore} from 'redux'


//INITIAL STATE
const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

//ACTION CONSTS
export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const CLEAR_STATE = 'CLEAR_STATE'


//REDUCER
function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case UPDATE_RECIPE_NAME:
            return {...state, recipeName: payload}
        case UPDATE_RECIPE_CATEGORY:
            return {...state, recipeCategory: payload}
        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: payload}
        case UPDATE_AUTHOR_LAST:
            return {...state, authorLast: payload}
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE:
            const {recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions} = state
            const recipe = {recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return{...state, recipes: newRecipes}
        case DELETE_RECIPE:
            const newRecipesList =[...state.recipes]
            newRecipesList.splice(action.payload, 1)
            return {...state, recipes: newRecipesList}
        case CLEAR_STATE:
            return{...state, recipeName: '', recipeCategory: '', authorFirst: '', authorLast: '', ingredients: [], instructions: [] }


        default:
            return state
    }
}


//EXPORT THE STORE BY DEFAULT
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
