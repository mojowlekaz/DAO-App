import React from 'react';
import connect from './ConnectBtn';
import { useState,useEffect } from 'react';
import "/Users/macbook/dao/src/styles/MainPage.css";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';


export default function MainPage() {

  useEffect( () => {
    connect();
    getConnectedWallet();
}, [])

  const [walletAddress, setWalletAddress] = useState("")
  const [login, setLogin] = useState(false)
  const [signature, setSignature] = useState(false)

  const ethers = require("ethers");
  // const navigate = useNavigate()
 async function connect(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    // let signature = await signer.signMessage ("Welcome to Our Airdrop program, Be sure to follow the neccessary steps, if you have any issues do contact us on Twitter");
    // console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
    // setSignature(signature)
    setWalletAddress(Accounts)
    // setSignature(signature)
      } 
      catch(err){
       
      }
      else {
      }
      return true;
    
    }
    async function   getConnectedWallet(){
      if (typeof window.ethereum !== 'undefined') 
      try{
      const provider = new ethers.providers.Web3Provider(window.ethereum)            
      await provider.send("eth_requestAccounts", []);
      let signer = await provider.getSigner();
      console.log("Accounts address:", await signer.getAddress());
      let Accounts = await signer.getAddress();
      setWalletAddress(Accounts)
        } 
        catch(err){
        
        }
        else {
    
        }
        return true;
      
      }




    if (walletAddress.length > 0) {
      return( <div>

<div class="row">
  <div class="column-1 left[-1">

<div>
<img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} /> 
<div className='line'> </div>
</div>
<div className='twobtn'>
<button className='btnn'><img alt='avatar' className='avata' src={(require("/Users/macbook/dao/src/assets/material-symbols_explore.png"))} /> </button> <br />
<button className='btnn'><img alt='avatar' className='avatar-1'  src={(require("/Users/macbook/dao/src/assets/Vector-1.png"))} /> </button> 
</div>
<div className='setlayout'>
<div className='btn-align'>
<div>
<div className='line'> </div>
<img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-49.png"))} /> 
</div>
</div>
</div>
</div>
  </div>
  <div class="column-1 middle-1">
    <div >
      <div className='pageStyle'>
      <img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} /> 
      <Typography  sx={{color: "white", padding: "10px", marginTop: "30px" , paddingRight: "120px"}}>
              Web3Lab DAO <br />
              <small>200 Members</small>

        </Typography> 
      </div> <br />
        <div className='line-3'> </div>
        <div className='Accordion'>   <br />
        <Accordion sx={{width: "270px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content" 
          id="panel1a-header"
          sx={{backgroundColor: "#171F30"}}
        >
          <Typography variant="body"  component="body" sx={{color: "#94A7C6"}}>Official</Typography>
        </AccordionSummary>
        <AccordionDetails   sx={{backgroundColor: "#171F30"}}>
          <Typography   sx={{backgroundColor: "#171F30"}}>
          <div className='home'>
          <HomeIcon  sx={{color: "#94A7C6"}} /> <Typography sx={{color: "#94A7C6"}} >Home</Typography>
          <img alt='avatar' className='avat' style={{color: "#94A7C6", marginLeft: "153px"}}  src={(require("/Users/macbook/dao/src/assets/Shape.png"))} /> 
          {/* <LockIcon  className='lock' sx={{color: "#94A7C6", marginLeft: "153px"}} />  */}
          </div>
          


          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
  </div>
  <div class="column-1 right-1">  <h2>Column 3</h2></div>
        </div>
        
      )
         }
       return <div>
          <p>Logging You in</p>
    </div>
  
  // if(login == true) return(<p>error</p>)

}


{/* <div>
<img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} /> 
<div className='line'> </div>
</div>
<div className='twobtn'>
<button className='btnn'><img alt='avatar' className='avata' src={(require("/Users/macbook/dao/src/assets/material-symbols_explore.png"))} /> </button> <br />
<button className='btnn'><img alt='avatar' className='avatar-1'  src={(require("/Users/macbook/dao/src/assets/Vector-1.png"))} /> </button> 
</div>
<div className='setlayout'>
<div className='btn-align'>
<div>
<div className='line'> </div>
<img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-49.png"))} /> 
</div>
</div>
</div>
</div> */}