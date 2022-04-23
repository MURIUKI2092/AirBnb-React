import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <div className='headImg'>
        <img
         src='https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
         alt=''
         />
      </div>

      <div className='headerInfo'>
        <h2>Let your curiosity do  the booking</h2>
        <button>BOOK NOW</button>
      </div>


    </div>
  )
}
