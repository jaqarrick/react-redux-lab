import * as React from "react"
import { connect } from "react-redux"
import NoteInput from "./components/NoteInput"
import { NotesObject, AllNotesState } from "./lib/redux/reducers/reducer"
import { v4 as uuid } from "uuid"
import {
    AddNote,
    addNote,
    RemoveNote,
    removeNote,
    SelectNote,
    selectNote,
} from "./lib/redux/actions/actions"
import SelectedNoteDisplay from "./components/SelectedNoteDisplay"

interface Props {
    notes: NotesObject[]
    addNote: (note: string, id: string) => AddNote
    removeNote: (id: string) => RemoveNote
    selectNote: (content: string) => SelectNote
}

const App: React.FC<Props> = ({ notes, removeNote, addNote, selectNote }) => {
    const onAddNote = React.useCallback(
        (note: string) => {
            addNote(note, uuid())
        },
        [addNote]
    )

    const onRemoveNote = React.useCallback(
        (id: string) => {
            removeNote(id)
        },
        [removeNote]
    )
    return (
        <>
            <NoteInput addNote={onAddNote} />
            <hr />
            <ul>
                {notes?.map(note => (
                    <li key={note.id}>
                        <span>{note.content}</span>
                        <button onClick={() => onRemoveNote(note.id)}>
                            {" "}
                            Remove{" "}
                        </button>
                        <button
                            onClick={() => {
                                selectNote(note.content)
                            }}
                        >
                            {" "}
                            Select{" "}
                        </button>
                    </li>
                ))}
            </ul>
            <footer>
                <SelectedNoteDisplay />
            </footer>
        </>
    )
}

const mapStateToProps = (state: AllNotesState) => {
    return {
        notes: state.notesData.notes,
    }
}

export default connect(mapStateToProps, {
    addNote,
    removeNote,
    selectNote,
})(App)
