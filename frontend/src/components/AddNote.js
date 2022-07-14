import React from 'react'
// import Card from "./Card"

const AddNote = () => {
  return (
    <div className="addNote">
        <h2>Add New Note</h2>
        <form>
            <div className="input-box">
                <input type="text" placeholder="Enter Title" />
            </div>
            <div className="input-box">
                <textarea placeholder="Enter Description" col="30" row="10"/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Enter Last Date" />
            </div>
            <div>
                <input className="add" type="submit" value="Add Note" />
            </div>
        </form>
    </div>
  )
}

export default AddNote