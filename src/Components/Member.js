import React, { useSyncExternalStore } from 'react';
import connect from './ConnectBtn';
import { useState,useEffect } from 'react';
import "/Users/macbook/dao/src/styles/Member.css";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import {FaDiscord} from "react-icons/fa"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';  
import {IoMdShareAlt} from "react-icons/io"  
import {MdOutlineNotificationsActive} from "react-icons/md"  
import Avatar from '@mui/material/Avatar';
import EditProfile from '../Responsiveness/EditProfile';
import {useNavigate, useParams, useLocation, Navigate} from "react-router-dom";
import {HiOutlineDotsVertical} from "react-icons/hi"  
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import supabase from "/Users/macbook/dao/src/config/supabaseClient.js"
import { createClient } from '@supabase/supabase-js';
import Home from './Home';


export default function Member({closeModal}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const [walletAddress, setWalletAddress] = useState("")
  const[openModal, setOpenModal] = useState(false);
  const [website , setWebsite] = useState("")
  const [signed, setSigned] = useState(false)
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true);
  const [name , setName] = useState('')
  const [moveAddress , setMoveAddress] = useState("")
  const [erc20Address , setERC20Adress] = useState("")
  const [url , setUrl] = useState("")
  const [bio , setBio] = useState("")
  const [twitter , setTwitter] = useState("")
  const [telegram , setTelegram] = useState("")
  const [discord , setDiscord] = useState("")
  const [LinkedIn , setLinkedIn] = useState("")
  const [Youtube , setYoutube] = useState("")
  const [Instagram , setInstagram] = useState("")
  const [error, setError] = useState(null)
  const [user, setUser] = useState('')
  const [userId, setUserId] = useState("")
  const [datas, setData] = useState([
    {Name: "Mojow", Bio: "I am a Developer", Telegramlink: "https://t.me/algorana", id: '1'},
    {Name: "Mojow's GF", Bio: "I am a Developer", Telegramlink: "https://t.me/algorana", id: '2'}
    
  ])
  const navigate = useNavigate();
  const count = 0
  const ethers = require("ethers");

    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
    }, [])
      


      // useEffect(()=> {
      //   const getUserInfo = async () => {
      //     try {
      //       const { data, error } = await supabase
      //       .from('user')
      //       .select()
      //       .eq("id", userId)
      //       .maybeSingle()
      //       if (error) throw error;
      //       console.log(data)
      //       setName(data.name)
      //       setUser(data)
      //       console.log(name)
      //       // setInterest(data.interest)
      //     } catch (error){
      //       console.log("error: ",error)
      //     }
      //   };

          
          
      // },[userId]) 
    



      useEffect(() => {
    getProfile();  
  
      }, [session, user])



    const getProfile = async () => {
      try {
        setLoading(true)
        const { user } = session
  
        let { data, error, status } = await supabase
        .from('user')
        .select()
        // .single()
        // .select(`moveAddress, name, erc20Address, url, bio, discord, website, twitter, telegram, discord, LinkedIn, Youtube, Instagram`)
        .eq('id', userId)
        // .maybeSingle()
        if (error && status !== 406) {
          console.log (error)
        }
  
        if (data) {
          // setUsername(data.username)
          // setWebsite(data.website)
          // setAvatarUrl(data.avatar_url)
          // setEmail(data.email)
          setName(data.name)
          setUserId(data)
          console.log(userId)
          // console.log(data)
          // console.log(data)
        }
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
  
    

async function getDatas() {
  const datas = await supabase.auth.getUser()
  let metadata = user.user_metadata;
  console.log(metadata,datas)
}

           if(session) {
            return( 
              <div   >
                <div className=' split first-1'>
        
                    <div>
        {/* <img alt='avatar' className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />  */}
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <div className='line-4'> </div>
        <div>
        {/* <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} />
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-48.png"))} /> */}
        </div>
        </div>
        <div className='twobtn'>
        <button className='btnn-1'><img alt='avatar' className='avata' src={(require("/Users/macbook/dao/src/assets/material-symbols_explore.png"))} /> </button> <br />
        <button className='btnn-1'><img alt='avatar' className='avata'  src={(require("/Users/macbook/dao/src/assets/Vector-1.png"))} /> </button> 
        
        </div>
        <div style={{cursor: "pointer"}} onClick={() => setOpenModal(true)} >
        <div className='line'> </div>
        <Avatar alt="Remy Sharp" className='avatar' src={(require("/Users/macbook/dao/src/assets/Pixel-49.png"))} />
        </div>
        
        </div>
        <div className='setlayout'>
        <div className='btn-align'>
        <div>
        </div>
        </div>
        </div>
        
        
                <div className='split-1  second'>
                <div className='inputstyle'>   <input className='input-1' type='text' placeholder="Search Organisation" prefix={<LockIcon />} />
        <div style={{paddingRight: "0px"}}>
          <MdOutlineNotificationsActive  style={{color: "#fff", width: "53px",  height: "20px", paddingRight: "6px"}} /> 
         {/* <img alt='avatr' style={{marginTop: "0px", paddingRight: "14px"}} className='avat'  src={(require("/Users/macbook/dao/src/assets/Vec.png"))} /> */}
         <button className='innerConnect'>     
                            <Typography variant='body' conponents="h3">  
                           {walletAddress.length > 0 ? ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : "ConnectWallet"}
                           </Typography></button>
                           </div>
                          </div> <bnr />
                          <div className='line-4'> </div>
        
                          <div>
                             <div className='card'>
                              {/* <button onClick={disconnect}>Discon</button> */}
                                <div>
                            <img alt='avatr' style={{marginTop: "0px", paddingRight: "0px"}} className='avat'  src={(require("/Users/macbook/dao/src/assets/Frame 99536.png"))} />
                            <div style={{ paddingLeft: "30px"}}>
                               <button style={{paddingLeft: '750px'}} className='Dotbtn'> <HiOutlineDotsVertical /></button>
                            <img alt='avatar' className='avatar-3' src={(require("/Users/macbook/dao/src/assets/Pixel-132.png"))} />  
                            </div>
                                </div> 
                                <div style={{ paddingLeft: "30px"}}>
                                  <button onClick={ () =>  {navigator.clipboard.writeText('xopy me')}}>GOO</button>
                                <Typography sx={{color: "#fff"}} variant='h6' conponents="h6">  
                            ESPStarter DAO   
                            {moveAddress}

                            {user &&(
                              <div>
                                <p>
                                  {user.map(user =>  (
                                    <p>{name}</p>


                                  ))}
                                </p>
                              </div>
                            )}
                            
                            {/* {datas.map( (data) => (
                            <p key={data.id}>
                              <h1>{data.Name}</h1>
                            </p>
                            ))}                 */}
                           </Typography> 
         <br />
        {openModal &&  <div className=''> <EditProfile closeModal = {setOpenModal}   /></div>  }
                            <div className='smallcard'>
                                <div>
                                <Typography sx={{color: "#fff"}} variant='body1' conponents="body">  
                                Memberships {count} 

                           </Typography> 
                                </div>
                                <Typography sx={{color: "#fff"}} variant='body2' conponents="body">  
                           You're not joined any DAO organisation yet
                           </Typography>  
                            <div className='line-4'> </div>
                            <div className='align-3'>
                                <div>
                                <button style={{background: "#181C2C"}} className='btnn'><img alt='avatar' className='avat'  src={(require("/Users/macbook/dao/src/assets/Vector-1.png"))} /> </button> 
                                </div>
                            <div className='align-4'>
                            <Typography sx={{color: "#fff"}} variant='body2' conponents="body">  
                            Create DAO
                           </Typography>
        
                           <Typography sx={{color: "#fff"}} variant='body2' conponents="body">  
                           To grow your community in a minutes
                           </Typography>
                            </div>
                            {/* <Link to='/ProfileChange'>Edit profile   </Link> */}
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
  // if(login == true) return(<p>error</p>)


          
     