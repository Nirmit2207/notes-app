import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import NotesList from "./components/NotesList"
import Search from './components/Search'
import Header from './components/Header'

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "4/27/2022"
    },
    {
      id: nanoid(),
      text: "This is a sample note",
      date: "4/28/2022"
    },
    {
      id: nanoid(),
      text: "Dates are in format - MM/DD/YYYY",
      date: "4/28/2022"
    }
  ])

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes])

  function addNote(text) {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function deleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App
