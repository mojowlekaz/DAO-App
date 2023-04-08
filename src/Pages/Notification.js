import React from 'react'
import Typography from '@mui/material/Typography';

export default function Notification({closeModal}) {
  return (
    <div className='pop'> 
                   <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
            You have no Notification
         </Typography>

         <button onClick={() =>  closeModal(false)} className='btnn'>X</button> 
    </div>
  )
}
