import React, { ChangeEvent, useCallback, useState } from "react"

interface NoteInputProps {
	addNote(note: string): void
}
const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
	const [note, setNote] = useState<string>("")
	const updateNote = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => setNote(event.target.value),
		[setNote]
	)
	const onAddNoteClick = useCallback(() => {
		addNote(note)
		setNote("")
	}, [addNote, setNote, note])
	return (
		<div>
			<input
				onChange={updateNote}
				type='text'
				name='note'
				placeholder='Note'></input>
			<button onClick={onAddNoteClick}>Add Note</button>
		</div>
	)
}

export default NoteInput
