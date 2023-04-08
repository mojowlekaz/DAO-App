import React from 'react'
import "/Users/macbook/dao/src/styles/Home.css"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { positions } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import ConnectBtn from './ConnectBtn';
import { useState} from 'react';
import Modal from './Modal';
import supabase from '../config/supabaseClient';
import { ContentCutOutlined } from '@mui/icons-material';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function Home() {
  const[show, setShow] = useState(false);
  const[openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('')
  const [copy, setCopy] = useState('localhoswwwt')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)



  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const {  error } = await supabase.auth.signInWithOtp
      ({ email: email,
        options: {
          emailRedirectTo: 'http://localhost:3000/profile',
        }, })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }
  function go() {
    var copyText = document.getElementById('my');

    copyText.select();
    copyText.setSelecctionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value)

    alert("copy the text: " + copyText.value)
  }
  // <input type='text' id='my' value='http://localhost:3000/' />        <button type='button' onClick={go}>GOO</button>
    //   <img alt='logo' src={(require("/Users/macbook/dao/src/assets/Rectangle 2787.png"))} />

    const leader =  () => {
      // Axios.get('https://api.crew3.xyz/communities/:subdomain/leaderboard').then((res) => {
      //     console.log(res)
      // })
      // fetch('https://api.crew3.xyz/communities/:subdomain/leaderboard')
      // .then((res) => res.json())
      // .then((data) => {
      //     console.log(data)
      // })
      // fetch('https://api.crew3.xyz/communities/:subdomain/users')
      // .then((response) => response.json())
      // .then((data) => console.log(data));
  }


  async function getDat() {
    /* sets and removes the Supabase cookie */
    await fetch('https://api.crew3.xyz/communities/:subdomain/claimed-quests/review', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      // credentials: 'same-origin',
      body: JSON.stringify(),
    })
    .then(resp => resp.json())
    .then(res =>{
      console.log(res)
    })
  }
  return (
    
    <div className="split left">
    <div className='Home'>
              <Grid >
              <img alt='logo' style={{ paddingLeft: "20px"}} src={(require("/Users/macbook/dao/src/assets/Frame 8014.png"))} />
              </Grid>
             {/* <button onClick={() => setOpenModal(true)}>GGO0O</button> */}

              <div className='content'>
               <Typography variant='h3'padding={1} sx={{color: "#00CE6B"}}> 
               Sign In or Sign Up  

               <input type='text' id='my' value={copy} />    
               <CopyToClipboard text={copy}>
                <button style={{color: "#fff"}} onClick={getDat}>Gogo</button>
  {/* <button type='button' onClick={() => setCopied(true)}>Copy to clipboard</button> */}

</CopyToClipboard>
{copied ? <p style={{color: 'red'}}>Copied!</p> : ""}  
               </Typography>
                <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
                    Welcome back! Please enter your details
                    </Typography>
                    <div className='btn-design'>
                    <button onClick={() => setOpenModal(true)} style={{backgroundColor: "#00CE6B",border: "none"}}>
                      <Typography  sx={{color: "white",textAlign: "center"}}>
                      Connect Wallet
                      </Typography>
                      {/* <Link to='/_profile'>go to</Link> */}

                      {/* {show && <ConnectBtn  closeModal={setShow} />}  */}
                      {/* {show == true ? <div className='pop'> <ConnectBtn  closeModal={setShow} /> </div> : ""} */}
                    </button>
                    {openModal &&  <div className='pop'> <ConnectBtn closeModal = {setOpenModal}   /></div>  }
                    <Typography  sx={{color: "white", textAlign: "center"}}>
                     or
                      </Typography> Sign In With Twitter
                    </div>  

                    <div className='btn-contents'>
                     <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='textfield' placeholder='Enter your email' /> <br />
                    <button  onClick={handleLogin}  className='button-1' style={{backgroundColor: "#00CE6B", border: "none", borderRadius: "4px"}}>
                        <Typography  sx={{color: "white", textAlign: "center"}}>
                        Continue with email
                        </Typography>
                      
                        
                    </button>  <br />

                    <button className='button-1'>
                        <Typography  sx={{color: "white", textAlign: "center"}}>
                     <TwitterIcon  style={{justifyContent: 'center', alignItems: 'center', color: "#00acee", position: 'relative', top: "5px", left: "" }} />  Sign In With Twitter
                        </Typography>
                    </button>  <br />

                    <button className='button-1'>
                        <Typography  sx={{color: "white", textAlign: "center"}}>
                        {/* <GoogleIcon  style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "3px", left: "" }} />  Sign In With Google */}
                        <i class="fab fa-google fa-1x"> </i> Sign In With Google
                        </Typography>
                    </button>
                    </div>
                    
              </div>
                
              </div>
          


              <div className='email'>

              <Typography variant= "body"  sx={{color: "white", textAlign: "center", justifyContent:"flex-end"}}>
             <MailOutlineIcon  style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "5px", left: "" }} /> <a href="#">Support@espstarter.com</a>
                      </Typography>

              </div>
              <div class="split right">
              {/* <img alt='logo' style={{position: "fixed", width: "cover"}} src={(require("/Users/macbook/dao/src/assets/Rectangle 2787.png"))} /> */}
              <div className='second-page'>
              <Container maxWidth="sm">
              <Typography variant= "h2"  sx={{color: "white", textAlign: "center"}}>
              WELCOME to Our Community
                      </Typography>

                      <Box sx={{marginTop: "50px"}}>
                      <Typography variant= "body"  sx={{color: "white", textAlign: "center"}}>
              ESPStarter is a One stop destination for Web3 Projects. The platform services blockchain gamers, investors, and traders in one aggregator.
With ESPStarter, decentralized projects can raise awareness, build a loyal community, and receive long-term support.
                      </Typography>
                      </Box>
                     <div className='centered' >
                     <img alt='logo' style={{width: "200px"}} src={(require("/Users/macbook/dao/src/assets/Vector.png"))} />
                     </div>
              </Container>

              </div>
              </div>
    </div>
  )
  }

