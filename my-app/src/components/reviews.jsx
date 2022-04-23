import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


export const Reviews = () => {
  return (
    <div className='reviews'>
      <h2 className='inspirationHeader'>What other people say</h2>



       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 350,
        },
      }}
    >
      
      <Paper >
      <FormatQuoteIcon className='quotes'/>
      <Typography gutterBottom variant="h5" component="div">
     
      I hope, it was useful for you. Thanks for reading! Looking forward to your feedback. See you soon ✌️
        </Typography>
        <FormatQuoteIcon   className='quotes'/>
        <Avatar
        className='avatar'
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
          sx={{ width: 74, height: 74 }}
/>
<div  className="username"><h2>Remy Sharp</h2>  </div>
             </Paper>
             <Paper >
      <FormatQuoteIcon className='quotes'/>
      <Typography gutterBottom variant="h5" component="div">
     
      I hope, it was useful for you. Thanks for reading! Looking forward to your feedback. See you soon ✌️
        </Typography>
        <FormatQuoteIcon   className='quotes'/>
        <Avatar
        className='avatar'
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          sx={{ width: 74, height: 74 }}
/>
<div  className="username"><h2>Sydney Williams</h2>  </div>
             </Paper>
             <Paper >
      <FormatQuoteIcon className='quotes'/>
      <Typography gutterBottom variant="h5" component="div">
     
      I hope, it was useful for you. Thanks for reading! Looking forward to your feedback. See you soon ✌️
        </Typography>
        <FormatQuoteIcon   className='quotes'/>
        <Avatar
        className='avatar'
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
          sx={{ width: 74, height: 74 }}
/>
<div  className="username"><h2>Remy Sharp</h2>  </div>
             </Paper>
             

             
     
    </Box>
  

    </div>
  )
}
