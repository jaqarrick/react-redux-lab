import { AnyAction, combineReducers } from "redux"
import { ADD_NOTE, REMOVE_NOTE, SELECT_NOTE } from "../actions/types"

export interface NotesObject {
    id: string
    content: string
}

export interface NotesState {
    notes: NotesObject[]
}

export interface AllNotesState {
    notesData: NotesState
    selectedNote: null | string
}

const initialState = {
    notes: [],
}

const selectedNoteReducer = (
    selectedNote: null | string = null,
    action: AnyAction
) => {
    switch (action.type) {
        case SELECT_NOTE: {
            return action.payload.content
        }
        default:
            return selectedNote
    }
}

const notesReducer = (state: NotesState = initialState, action: AnyAction) => {
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

const rootReducer = combineReducers({
    notesData: notesReducer,
    selectedNote: selectedNoteReducer,
})

export default rootReducer
