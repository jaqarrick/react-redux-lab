import { ADD_NOTE, REMOVE_NOTE } from "../actions/types"

export interface NotesObject {
    id: string
    content: string
}

export interface NotesState {
    notes: NotesObject[]
}

const initialState = {
    notes: [],
}

export const notesReducer = (state: NotesState = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE: {
            const newNotesObject = {
                id: action.payload.id,
                content: action.payload.content,
            }

            return {
                ...state,
                notes: [...state.notes, newNotesObject],
            }
        }
        case REMOVE_NOTE: {

            const filteredNotes = state.notes.filter(
                ({ id }) => id !== action.payload.id
            )

            return {
                ...state,
                notes: filteredNotes,
            }
        }
        default:
            return state
    }
}
