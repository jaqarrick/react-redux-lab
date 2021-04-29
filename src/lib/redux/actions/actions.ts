import {ADD_NOTE, REMOVE_NOTE} from './types'


export type AddNote = { 
	type: string; 
	payload: {
		id: string,
		content: string
	}
}

export type RemoveNote = {
	type: string,
	payload: {
		id: string
	}
}

export const addNote = (note: string, id: string): AddNote => ({
	type: ADD_NOTE,
	payload: {
		id: id,
		content: note
	},
})

export const removeNote = (id: string) => ({
	type: REMOVE_NOTE,
	payload: {
		id
	}
})

