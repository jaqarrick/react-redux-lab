import { connect } from "react-redux"
import { AllNotesState } from "../lib/redux/reducers/reducer"

interface Props {
    selectedNote: string | null
}

const SelectedNoteDisplay: React.FC<Props> = ({ selectedNote }) => {
    return <section>{selectedNote ?? <p> {selectedNote} </p>}</section>
}

const mapStateToProps = (state: AllNotesState) => ({
    selectedNote: state.selectedNote,
})

export default connect(mapStateToProps)(SelectedNoteDisplay)
