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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
 borderRadius:5,
  boxShadow: 24,
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
  boxShadow: 24,
  p: 4,
};
export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div  className='navbar'>
      <section className='Logo'>
        <h2>AirBnb<sup>ke</sup></h2>
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
        }}
      >
         <Fade in={open}>
          <Box sx={style}>
            <Search/>
          </Box>
        </Fade>
      </Modal>
      
      </section>
      <section  className='host'>
      <li onClick={handleOpen}>  <h3>Become a Host</h3></li>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Host/>
          
         
        </Box>
      </Modal> 
      </section>
      <section className='message'>
      <Avatar sx={{ bgcolor: green[500] }}>
          <MessageIcon />
      </Avatar>
      </section>

    </div>
  )
}
