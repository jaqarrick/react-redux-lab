import * as React from "react"
import { connect, useDispatch } from "react-redux"
import NoteInput from "./components/NoteInput"
import { NotesState } from "./lib/redux/reducers/reducer"

interface Props {
	notes: string[]
}

const App: React.FC<Props> = ({notes}) => {
	
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

const mapStateToProps = (state: NotesState) => ({
		notes: state.notes
	})



export default connect(mapStateToProps)(App)
