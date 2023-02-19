import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = ({ selectedDate, createEvent, closeModal }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  let [date, setDate] = useState('')
  const startDate = selectedDate

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title) {
      alert('Please add a title')
      return
    }
    if(!desc) {
      alert('Please add a description')
      return
    }
    if(!date) {
      if(!selectedDate) {
        alert('Please select date')
        return
      }
      date = selectedDate
    }

    createEvent({ title, desc, date })
    
    setTitle('')
    setDesc('')
    setDate('')
    
    closeModal()
  }

  return (
    <form className="w-full max-w-sm mx-auto mt-10 text-black px-4 py-4" onSubmit={onSubmit}>
        <div className="md:flex md:items-center mb-6 py-1">
          <div className="md:w-1/3">
            <label className="block text-font-primary md:text-left mb-1 md:mb-0 pr-4">Title</label>
          </div>
          <div className="md:w-2/3">
            <input type="text" className="md:w-4/5 border-2 border-border-primary px-1"
                value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 py-1">
          <div className="md:w-1/3">
            <label className="block text-font-primary md:text-left mb-1 md:mb-0 pr-4">Description</label>
          </div>
          <div className="md:w-2/3">
          {/* TODO Change desc text to textarea */}
            <input type="text" className="md:w-4/5 border-2 border-border-primary px-1"
                value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-10 py-1">
          <div className="md:w-1/3">
            <label className="block text-font-primary md:text-left mb-1 md:mb-0 pr-4">Date</label>
          </div>
          <div className="md:w-2/3">
            <ReactDatePicker
              selected={date === '' ? startDate : date}
              onChange={
                (d) => {
                  if(d !== null) {setDate(d)}
                }} 
              className="md:w-4/5 border-2 border-border-primary px-1" />
          </div>
        </div>

        {/* TODO Add time later         */}

        <div className="md:flex md:items-center">
          <div className="md:w-5/12 mx-auto">
            <input type="submit" value="Add Event" className="w-full shadow bg-btn-primary focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded cursor-pointer" />
          </div>
        </div>
    </form>
  )
}

export default AddEvent