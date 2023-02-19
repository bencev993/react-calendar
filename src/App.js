import { React, useState } from "react";
import Calendar from 'react-calendar'; 
import './App.css';
import Modal from './components/Modal/Modal';
import AddEvent from "./components/Event/AddEvent";
import Header from "./layouts/header";

const App = () => {
  let errors = []
  let msgType = true
  const currentTheme = localStorage.getItem('theme');
  let isChecked = currentTheme === 'dark' ? true : false
  if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  const [slider, toggleSlider] = useState(isChecked)
  const [modal, toggleModal ] = useState(false)
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([
    {
      id: 1,
      text: 'Win 2.98 HUF on the lottery',
      desc: 'Description for the first event',
      date: new Date('2023', '02', '25'),
    },
    {
      id: 2,
      text: 'Random event',
      desc: 'Description for the second event...',
      date: new Date('2023', '02', '17'),
    }
  ])

  const addEvent = (event) => {
    try {
      const id = Math.floor(Math.random() * 10000) + 1
      const newEvent = { id, ...event }
      setEvents([...events, newEvent])
    }
    catch(err) {
      errors.push(err.message)
      msgType = false
    }

  }

  const checkDate = (d) => {
    return events.some(e => e.date.toDateString() === d.toDateString())
  }

  const switchTheme = () => {
    isChecked = !isChecked
    if(isChecked === true) {
      toggleSlider(true)
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      toggleSlider(false)
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    
  }

    return (
      <div className="app h-screen overflow-hidden relative bg-bg-secondary text-center">
        <Header isChecked={slider} toggleTheme={switchTheme} />
        <div className="wrapper h-full flex place-content-center">
          
        <div className="calendar-container w-full h-fit sm:w-3/4 xl:w-1/2 mx-auto mt-20">
          <Calendar
            onClickDay={toggleModal}
            onChange={(d) => setDate(d)}
            locale="en-US"
            tileContent={ ({date}) => {
              if(checkDate(date)) {
                return <svg className="w-5 h-5 absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                      </svg>
              }
            }}

            tileClassName={({ date }) => {
              if(checkDate(date)) {
                return `bg-gradient-to-r from-color-700 via-bg-primary to-color-600 color-font-primary font-normal 
                shadow-primary hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-500`
              }
            }}
          />
        </div>

        {/* TODO Msg after event created */}
        {/* <Message type={msgType}/> */}
        </div>


        <Modal
          show={modal}
          handleClose={() => toggleModal()}
          child={<AddEvent selectedDate={date} createEvent={addEvent} closeModal={() => toggleModal()} />}
        />
      </div>
    )
}

export default App