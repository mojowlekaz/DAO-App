import React from 'react'
import Paper from '@mui/material/Paper';
import "/Users/macbook/dao/src/styles/ConnectBtn.css";
import Typography from '@mui/material/Typography';
import { useState} from 'react';
import {useNavigate} from "react-router-dom"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import { Navigate } from "react-router-dom";
import {HiOutlineDotsVertical} from "react-icons/hi"  

// export default connect;



export default function ConnectBtn({closeModal}) {
  // const[show, setShow] = useState(false);
  const [walletAddress, setWalletAddress] = useState("")
  const [login, setLogin] = useState(false)
  const [signed, setSigned] = useState(false)
  const [valid, setValid] = useState('')
  const [address, setAddress] = useState('')
  const [isSignature, setIsSignature] = useState()

  const ethers = require("ethers");
  // const navigate = useNavigate()
    const nonce = Math.floor(Math.random() * 1000000000000)
  async function connect(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    const message = "Verify Your Identity"
    let signedMessage = await signer.signMessage (message);
    const signerAddr = await ethers.utils.verifyMessage(message, signedMessage)
    setIsSignature(signerAddr)
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
 
    } 

    let expectedaddress  = '';

   async  function verify(){
     const nonce = Math.floor(Math.random() * 100000)
      const signerAddr = await ethers.utils.verifyMessage(`Verify Your Identity, ${nonce}`)
      valid = signerAddr === expectedaddress;
      setAddress(signerAddr)
      
    }
    const navigate = useNavigate();
  
  return (


      <div>
      <div className='paper'>
        <div className='title'>
        <Typography variant= "body4" component="h3"  sx={{color: "white", textAlign: "center"}}>
                   Connect to wallet
         </Typography>
         <button  className='btnn' onClick={() =>  closeModal(false)}> X </button>
        </div>
       {/* Bridge */}
        <div className='align-wallet'>
        <div onClick={connect} className='metamask' >
        <Typography variant= "body2"  sx={{color: "white", textAlign: "center"}}>
               Metamask 
               {walletAddress.length > 0 ? ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : ""}
         </Typography>
         <img alt='logo' style={{width: "30px" }} src={(require("/Users/macbook/dao/src/assets/Img.png"))} />
        </div>
        <div className='metamask'>
        <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
            Wallet Connect
         </Typography>
         <img alt='logo' style={{width: "30px" }} src={(require("/Users/macbook/dao/src/assets/Img (1).png"))} />
        </div>
        <div  className='metamask'>
        <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
            Martian Wallet
         </Typography>
         <img alt='logo' style={{width: "30px" }} src={(require("/Users/macbook/dao/src/assets/martian.png"))} />
        </div>
        <div className='metamask'>
        <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
               Petra wallet
         </Typography>
         <img alt='logo' style={{width: "30px" }} src={(require("/Users/macbook/dao/src/assets/download.png"))} />
        </div>
        <div className='metamask'>
        <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
               Potem wallet
         </Typography>
         <img alt='logo' style={{width: "30px" }} src={(require("/Users/macbook/dao/src/assets/pontem.png"))} />
        </div>
        </div>
        <div className='foot'>
        <small variant= "body"  sx={{color: "white", textAlign: "center"}}>
        I don't have a wallet
         </small>
         {isSignature === walletAddress   ?   <Navigate  to={{
          pathname: "/profile",
          setWalletAddress: {setWalletAddressParam: true}
          
         }} replace={true} /> : <small>Connect your   Wallet to Login</small>}
         <div>
         </div>
        </div>
      </div>
      
    </div>
  )
}




        
    
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className= {isActive? "active": ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
