import * as React from "react"
import { connect, useDispatch } from "react-redux"
import NoteInput from "./components/NoteInput"
import { NotesState, NotesObject } from "./lib/redux/reducers/reducer"
import { v4 as uuid } from "uuid"
import { ADD_NOTE, REMOVE_NOTE } from "./lib/redux/actions/types"

interface Props {
    notes: NotesObject[]
}

const App: React.FC<Props> = ({ notes }) => {
    const dispatch = useDispatch()

    const addNote = React.useCallback(
        (note: string) => {
            const payloadObj = {
                content: note,
                id: uuid(),
            }

            dispatch({ type: ADD_NOTE, payload: payloadObj })
        },
        [dispatch]
    )

    const removeNote = React.useCallback(
        (id: string) => {
            dispatch({
                type: REMOVE_NOTE,
                payload: {
                    id,
                },
            })
        },
        [dispatch]
    )
    return (
        <>
            <NoteInput addNote={addNote} />
            <hr />
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <span>{note.content}</span>
                        <button onClick={() => removeNote(note.id)}>
                            {" "}
                            Remove{" "}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

const mapStateToProps = (state: NotesState) => ({
    notes: state.notes,
})

export default connect(mapStateToProps)(App)
