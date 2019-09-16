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


//REDUCER
function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case UPDATE_RECIPE_NAME:
            return {...state, name: payload}
        case UPDATE_RECIPE_CATEGORY:
            return {...state, category: payload}
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
            const {name, category, authorFirst, authorLast, ingredients, instructions} = state
            const recipe = {name, category, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return{...state, recipes: newRecipes}
        default:
            return state
    }
}


//EXPORT THE STORE BY DEFAULT
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
