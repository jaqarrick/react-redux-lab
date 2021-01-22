import { createStore } from "redux"
import { notesReducer } from "./reducer"
export const store = createStore(notesReducer)
