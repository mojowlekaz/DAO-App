import React from 'react'
import { useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import "/Users/macbook/dao/src/ResponsiveStyles/EditProfile.css"
import Typography from '@mui/material/Typography';
import {AiOutlineSetting} from "react-icons/ai"
// import {IoNotificationsOutline} from "react-icons/io"  
import {IoNotificationsOutline} from "react-icons/io5" 
import {TiFlashOutline} from "react-icons/ti" 
import {CgProfile} from "react-icons/cg"  
import {RiMoonLine} from "react-icons/ri"  
import {HiOutlineDotsVertical} from "react-icons/hi"  
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import PropTypes from 'prop-types';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import supabase from "/Users/macbook/dao/src/config/supabaseClient.js"


export default function EditProfile({closeModal}) {

  useEffect( () => {
    // connect();
    // getConnectedWallet();
}, [])

  const [walletAddress, setWalletAddress] = useState("")
  const [login, setLogin] = useState(false)
  const [signature, setSignature] = useState(false)
  const[openModal, setOpenModal] = useState(false);
  const [signed, setSigned] = useState(false)
  const count = 0

  const ethers = require("ethers");
  // const navigate = useNavigate()

  const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
    const { icon } = props;
  
    const {
      icon: [width, height, , , svgPathData],
    } = icon;
  
    return (
      <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
        {typeof svgPathData === 'string' ? (
          <path d={svgPathData} />
        ) : (
          /**
           * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
           * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
           * of a duotone icon. 40% is the default opacity.
           *
           * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
           */
          svgPathData.map((d, i) => (
            <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
          ))
        )}
      </SvgIcon>
    );
  });
  
  FontAwesomeSvgIcon.propTypes = {
    icon: PropTypes.any.isRequired,
  };
  

  const nonce = Math.floor(Math.random() * 1000000000000)
  async function connect(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    const message = "Verify Your Identity"
    let signedMessage = await signer.signMessage (`Verify Your Identity   Profile ID: ${nonce}`);
    console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
    // setSignature(signature)
    setWalletAddress(Accounts)
    setSigned(true)
      } 
      catch(err){
       
      }
      else {
      }
      return true;
    } 

    async function getConnectedWallet(){
      if (typeof window.ethereum !== 'undefined') 
      try{
      const provider = new ethers.providers.Web3Provider(window.ethereum)            
      await provider.send("eth_requestAccounts", []);
      let signer = await provider.getSigner();
      const message = "Verify Your Identity"
      // let signedMessage = await signer.signMessage (`Verify Your Identity   nonce: ${nonce}`);
      console.log("Accounts address:", await signer.getAddress());
      let Accounts = await signer.getAddress();
      // setSignature(signature)
      setWalletAddress(Accounts)
      setSigned(true)
        } 
        catch(err){
         
        }
        else {
        }
        return true;
      } 
  return (

     <div className='board'>
      <div className='alignbox'>
      <Avatar alt="Remy Sharp"  sx={{  marginTop: "10px"}}  className='avtar' src={(require("/Users/macbook/dao/src/assets/BreederDAO_logo 1.png"))} />
          <Typography sx={{color: "#94A7C6",  paddingLeft: "10px"}} variant='body' conponents="h6">  
           Blockchain DAO           <button style={{paddingLeft: '85px'}} className='Dotbtn'> <HiOutlineDotsVertical /></button>
                             <div className='walletalign'>
                             <Typography  sx={{color: "#94A7C6" }}variant='body' conponents="h3">  
                   {walletAddress.length > 0 ? ` ${walletAddress.substring(0,9)}.... ${walletAddress.substring(30)}` : ""}
                   </Typography>
                   
                   </div>
          </Typography> 
    </div> 
    <div className='line-4'></div>
             <div className='tableContent'>
             <div className='tablealign'>
             <IoNotificationsOutline  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "1.2px", left: "4px" ,paddingRight: "6px"}} /> 
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
              Notification
         </Typography>
         
         
             </div>
             </div>
             <div className='tablealign-1'>
             <AiOutlineSetting  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px", paddingRight: "6px"}} /> 
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
             Settings
         </Typography>
         <div>
                    <div className='line-5'></div>
                    <div className='tableContet'>
             <div className='tablealign-3'>
             <TiFlashOutline  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px" ,paddingRight: "6px"}} /> 
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
              Integrations
         </Typography>
         
         
             </div>
             </div>
             <div className='tablealign-4'>
             
              <CgProfile  style={{color: "#94A7C6", width: "53px", height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px", paddingRight: "6px"}} /> 
             
              <Link to='/profile/editprofile'>
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
            Edit profile  
         </Typography>
         </Link>
         <div>

         <div className='line-5'></div>
         <div className='tablealign-5'>
             <RiMoonLine  style={{color: "#94A7C6", width: "53px",  height: "20px",justifyContent: 'center', alignItems: 'center', position: 'relative', top: "4.2px", left: "4px" , paddingRight: "6px"}} /> 
             <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
             white Mode
         </Typography>
         <div className='tablealign-7'>
         <button onClick={() => supabase.auth.signOut()} className='logout'> <Typography variant= "body"  sx={{color: "#94A7C6", textAlign: "center"}}>
        Logout
         </Typography>
         </button>
         </div>
         </div>                    
         </div>

             </div>
         </div>
         
         

             </div>
          
             
    </div>
  )
}
