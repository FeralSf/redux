import { PLUS, MINUS, INPUT_TEXT } from './types'
export function PLUSLIKES() {
	return {
		type: PLUS,
	}
}

export function MINUSLIKES() {
	return {
		type: MINUS,
	}
}

export function inputText(text) {
	return {
		type: INPUT_TEXT,
		text,
	}
}
