import React from 'react'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SendIcon from '@mui/icons-material/Send';
import ForumIcon from '@mui/icons-material/Forum'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { SendReview } from './sendReview';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';


export const WriteReview = () => {
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
  // const [openSend, setOpenSend]= React.useState(false);
  // const  handleOpenSend =()=>setOpenSend(true)
  // const handleCloseSend=()=>setOpenSend(false);
  return (
    <div  className='writeReview'>
       <li >  <h3>    <SendIcon  className='icons'  />  Send  a Review</h3></li>
       {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={handleOpenSend}
        onClose={handleCloseSend}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}setOpenHost
      >
         <Fade in={openSend}>
          <Box sx={style}>
            <SendReview/>
          </Box>
        </Fade>
      </Modal> */}
       <li >  <h3>  <HelpCenterIcon className='icons'/>  Ask a Question</h3></li>
       <li >  <h3> <ForumIcon className='icons'/>  Chat with Hosts</h3></li>

    </div>
  )
}
