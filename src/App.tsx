import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import NoteInput from "./components/NoteInput"
import { NotesState } from "./store/reducer"

function App() {
	const notes = useSelector<NotesState, NotesState["notes"]>(
		state => state.notes
	)
	const dispatch = useDispatch()

	const addNote = React.useCallback(
		(note: string) => {
			dispatch({ type: "ADD_NOTE", payload: note })
		},
		[dispatch]
	)
	return (
		<>
			<NoteInput addNote={addNote} />
			<hr />
			<ul>
				{notes.map(note => (
					<li key={note}>{note}</li>
				))}
			</ul>
		</>
	)
}

export default App
