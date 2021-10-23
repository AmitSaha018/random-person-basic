import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  

  const handleValue = (e) => {
    console.log(e.target)
  }
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt="random user" className="user-img" />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-lable='name'
              onMouseOver={handleValue}
            >
              <FaUser/>
            </button>
            <button
              className="icon"
              data-lable='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen/>
            </button>
            <button
              className="icon"
              data-lable='age'
              onMouseOver={handleValue}
            >
              <FaCalendarTimes/>
            </button>
            <button
              className="icon"
              data-lable='street'
              onMouseOver={handleValue}
            >
              <FaMap/>
            </button>
            <button
              className="icon"
              data-lable='phone'
              onMouseOver={handleValue}
            >
              <FaPhone/>
            </button>
            <button
              className="icon"
              data-lable='password'
              onMouseOver={handleValue}
            >
              <FaLock/>
            </button>
          </div>
          <button className="btn" type='button'>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
