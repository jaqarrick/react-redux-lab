import { createStore } from "redux"
import { notesReducer } from "../reducers/reducer"
export const store = createStore(notesReducer)
