import Typography from '@mui/material/Typography';
import { Book } from './book';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const HouseDescription = ( {children}) => {

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
        <Accordion  className='descOptionAccordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography  className='descOptionAccordionHeader'>Reserve</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Book/>
        </AccordionDetails>
      </Accordion>
          
         
           
        </div>
      </section>
    </div>
    </>
  )
}
