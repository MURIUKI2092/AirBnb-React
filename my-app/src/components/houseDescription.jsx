import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
 borderRadius:5,
  
  p: 4,
};

export const HouseDescription = () => {
  const [open ,setOpen] = useState(false);
  const handleOpen = setOpen(true);
  const handleClose = setOpen(false)
  return (

    <>
    <div   className='houseDesc'>
      <div className='imageDesc'>
      <img
      src='https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
      alt=''
      />
      </div>

      <h2>The Room is Hosted by Muriuki</h2>

      <section className='description'>
        <div className='descParagraph'>
        <Typography gutterBottom variant="h4" component="div" >
          Description
        </Typography>
      <Typography>A Generic, extendible Carousel UI component for React using Material UI
It switches between given children using a smooth animation.
Provides next and previous buttons. Also provides interactible bullet indicators.</Typography>

<Typography gutterBottom variant="h4" component="div">
 Location: <strong>Kisumu</strong>
        </Typography>
        <Typography variant="h5" color="text.primary">
        Price : <strong>2000</strong>
        </Typography><br></br>
        <Typography variant="h5" color="text.primary">
         400 Km away
        </Typography>
        </div>
     
        
        

      
        <div className='descOption'>
          <li>See other options</li>
          <Button
          onClick={handleOpen}
              type="submit"
            
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            Reserve
            </Button>
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


        </div>
      </section>
    </div>
    </>
  )
}
