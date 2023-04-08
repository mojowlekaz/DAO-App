import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import "/Users/macbook/dao/src/ResponsiveStyles/profilepage.css";
import Typography from '@mui/material/Typography';
import {CgProfile} from "react-icons/cg" ;
import {IoNotificationsOutline} from "react-icons/io5" ;
import {TiFlashOutline} from "react-icons/ti" 
import { Box } from '@mui/system';
import ConnectBtn from '../Components/ConnectBtn';
import Form from './Form';
import Notification from './Notification';
import supabase from "/Users/macbook/dao/src/config/supabaseClient.js";
import {Link, Navigate, useMatch, useResolvedPath} from "react-router-dom";


export default function ProfileChange() {

    const[openModal, setOpenModal] = useState(false);
    const[show, setShow] = useState(false);
    const[cancel, setCancel] = useState(false);

    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

    if(session) {
  return (
    <div>
    <div className='split first-1'>

        <div>
{/* <img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />  */}
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<div className='line'> </div>
{/* <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} /> */}
</div>
<div className='twobtn'>
<button className='btnn-1'><img alt='avatar' className='avata' src={(require("/Users/macbook/dao/src/assets/material-symbols_explore.png"))} /> </button> <br />
<button  className='btnn-1'><img alt='avatar' className='avata'  src={(require("/Users/macbook/dao/src/assets/Vector-1.png"))} /> </button> 

<div className='line'> </div>
<Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-49.png"))} />
</div>
<div className='setlayout'>
<div className='btn-align'>
<div>
</div>
</div> 
</div>
</div>
        <div className='split-1  second'>

  {cancel ===false ?  <Form closeModal = {setCancel} /> :""}
  {/* {cancel ===true ?  <Form closeModal = {setCancel} /> :""} */}
        <div className='profilesection'> 
            
            <div className='dash'>
            <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
            Personal  
        </Typography>
            <div className='tablealign4'>
             <CgProfile  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "1.2px", left: "4px", paddingRight: "6px"}} /> 
            <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
           Edit profile  
        </Typography>
        <div>
            </div>
                         <div className='tablealign1'>
             <IoNotificationsOutline  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px", paddingRight: "6px"}} /> 
             <Typography     onClick={() => setShow(true)} variant= "body"  sx={{color: "#94A7C6", cursor: "pointer", textAlign: "center"}}>
             <Typography   onClick={() => setOpenModal(true)}   variant= "body"  sx={{color: "#94A7C6", cursor: "pointer", textAlign: "center"}}>
              Notification
         </Typography>
              {openModal &&  <div className='p'> <Notification closeModal = {setOpenModal}   /></div>  }
              {/* {openModal && ""}  */}
              {/* {show === false ?  "" :  <div className='pop'> <ConnectBtn closeModal = {setOpenModal}   /></div>  } */}
         </Typography>
         <div>
                    <div className='line5'></div>
                    <div className='t'>
                    <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
                    Product  
                   </Typography>
                   </div>
                   <div className='tablealign3'>
             <TiFlashOutline  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px" ,paddingRight: "6px"}} /> 
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
              Integrations
         </Typography>
         
         
                    </div>
                    </div>
                    </div>

            </div>
            
            </div>     
            
            </div>
        </div>
        
    </div>
  )
}else{
  return(
    <div>
     {
      <Link to='/'><button>GO to home npage</button></Link>
      // <Navigate to='/' />
     }
    </div>
   )
}
}




