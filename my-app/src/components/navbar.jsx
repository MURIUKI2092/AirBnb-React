import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import Avatar from '@mui/material/Avatar'
import { green} from '@mui/material/colors';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import { Search } from './search';
import { Host } from './host';
import Fade from '@mui/material/Fade';
import { WriteReview } from './writeReview';
import {Link} from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
 borderRadius:5,
  p: 4,
};
const style3= {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
 borderRadius:5,
   p: 4,
};
const style1= {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
 borderRadius:5,
  p: 4,
};
export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [openHost, setOpenHost] = React.useState(false);
  const[openChat,setOpenChat]=React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleOpenHost = () => setOpenHost(true);
  const handleOpenChat=()=>setOpenChat(true)
  const handleClose = () => setOpen(false);
  const handleCloseHost = () => setOpenHost(false);
  const handleCloseChat=()=>setOpenChat(false)
  const [colorChange, setColorchange] =React.useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <section className='Logo'>
        <h2>AirBnb<sup>ke</sup></h2>
      </section>
      <section  className='searchhome'>
        <Link to="/"className="links"  > <h3>Home</h3></Link>
      </section>
      <section  className='search'>
      <Link to="/houses"className="links"  > <h3>Houses</h3></Link>
      </section>
      <section  className='search'>
        <li  onClick={handleOpen}>  <h3>Start Your Search</h3></li>
      
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}setOpenHost
      >
         <Fade in={open}>
          <Box sx={style}>
            <Search/>
          </Box>
        </Fade>
      </Modal>
      
      </section>
      <section  className='host'>
      <li onClick={handleOpenHost}>  <h3>Become a Host</h3></li>
       <Modal
        open={openHost}
        onClose={handleCloseHost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Host/>
          
         
        </Box>
      </Modal> 
      </section>
      <section className='message'>
      <Avatar sx={{ bgcolor: green[500] }} onClick={handleOpenChat}>
          <MessageIcon />
          
      </Avatar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openChat}
        onClose={handleCloseChat}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}setOpenChat
      >
        
          <Box sx={style3}>
            <WriteReview/>
          </Box>
        
      </Modal>
      </section>

    </div>
  )
}
