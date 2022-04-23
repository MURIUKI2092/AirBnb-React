import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import Avatar from '@mui/material/Avatar'
import { green} from '@mui/material/colors';

export const Navbar = () => {
  return (
    <div  className='navbar'>
      <section className='Logo'>
        <h2>AirBnb<sup>ke</sup></h2>
      </section>
      <section  className='search'>
        <li>  <h3>Start Your Search</h3></li>
      
      </section>
      <section  className='host'>
      <li>  <h3>Become a Host</h3></li>
      </section>
      <section className='message'>
      <Avatar sx={{ bgcolor: green[500] }}>
          <MessageIcon />
      </Avatar>
      </section>

    </div>
  )
}
