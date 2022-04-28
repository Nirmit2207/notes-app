import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')
    const characterLimit = 300

    function handleSaveClick() {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className='note new'>
            <textarea
                cols="10"
                rows="8"
                placeholder='Type to add a note...'
                onChange={e => setNoteText(e.target.value)}
                value={noteText}
                maxLength='300'
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote