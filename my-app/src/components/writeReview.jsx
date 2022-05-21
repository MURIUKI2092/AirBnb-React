import React from 'react'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SendIcon from '@mui/icons-material/Send';
import ForumIcon from '@mui/icons-material/Forum'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SendReview } from './sendReview';
import { Ask } from './ask';
import { Chat } from './chat';


export const WriteReview = () => {
 
  return (
    <div  className='writeReview'>
      <Accordion  className='reviewAccordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className='descOptionAccordionHeader'><li >  <h3>    <SendIcon  className='icons'  />  Send  a Review</h3></li></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <SendReview/>
        </AccordionDetails>
      </Accordion>
       <br></br>
      <Accordion  className='reviewAccordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className='descOptionAccordionHeader'> <li >  <h3>  <HelpCenterIcon className='icons'/>  Ask a Question</h3></li></Typography>
        </AccordionSummary>
        <AccordionDetails>
       <Ask/>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Accordion  className='reviewAccordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className='descOptionAccordionHeader'> <li >  <h3> <ForumIcon className='icons'/>  Chat with Hosts</h3></li></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Chat/>
        </AccordionDetails>
      </Accordion>
       

    </div>
  )
}
