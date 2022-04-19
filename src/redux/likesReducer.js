import { PLUS, MINUS } from './types'

const initialState = {
	likes: 0,
}

export const likesReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLUS:
			return {
				...state,
				likes: state.likes + 1,
			}
		case MINUS:
			return {
				...state,
				likes: state.likes - 1,
			}

		default:
			return state
	}
}
