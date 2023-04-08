import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import "/Users/macbook/dao/src/ResponsiveStyles/profilepage.css";
import Typography from '@mui/material/Typography';
import {CgProfile} from "react-icons/cg" ;
import {IoNotificationsOutline} from "react-icons/io5" ;
import {TiFlashOutline} from "react-icons/ti" 
import { Box } from '@mui/system';
import ConnectBtn from '../Components/ConnectBtn';
import supabase from  "/Users/macbook/dao/src/config/supabaseClient.js";



export default function Form({closeModal}) {
    const[openModal, setOpenModal] = useState(false);
    const[show, setShow] = useState(false);
    const[cancel, setCancel] = useState(false);
    const [name , setName] = useState("")
    const [moveAddress , setMoveAddress] = useState("")
    const [erc20Address , seterc20Address] = useState("")
    const [url , setUrl] = useState("")
    const [bio , setBio] = useState("")
    const [website , setWebsite] = useState("")
    const [twitter , setTwitter] = useState("")
    const [telegram , setTelegram] = useState("")
    const [discord , setDiscord] = useState("")
    const [LinkedIn , setLinkedIn] = useState("")
    const [Youtube , setYoutube] = useState("")
    const [Instagram , setInstagram] = useState("")
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
   //  console.log(supabase)

   //  const [session, setSession] = useState(null)

   const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })


    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

  }, [])
    
    useEffect(() => {
      const getProfile = async () => {
         try {
           setLoading(true)
           const { user } = session;
     
           let { data, error, status } = await supabase
             .from('user')
             .select(`moveAddress, name, erc20Address, url, bio, discord, website, twitter, telegram, discord, LinkedIn, Youtube, Instagram`)
             .eq('id', user.id)
             .single()
            // .select();
     
           if (error && status !== 406) {
            //  console.log (error) 
           }
     
           if (data) {
            //  setUsername(data.user)
            console.log(data)
            //  setWebsite(data.website)
             setError(null)

           }
         } catch (error) {
           console.log(error.message)
         } finally {
           setLoading(false)
         //   console.log(data) 
         }
       }
  getProfile();  

    }, [session, user])

    



  
    const updateProfile = async (e) => {
      e.preventDefault()

      try {

         setLoading(true)
         const { user } = session;
         const updates = {
          id: user.id,
          moveAddress,
          name,
          erc20Address,
          url,
          bio,
          discord,
          website,
          twitter,
          telegram,
          discord,
          LinkedIn,
          Youtube,
          Instagram,
          created_at: new Date(),
        }
    
         console.log(user)
        let {data, error } = await supabase.from('user').upsert({       
           id: user.id,
          moveAddress,
          name,
          erc20Address,
          url,
          bio,
          discord,
          website,
          twitter,
          telegram,
          discord,
          LinkedIn,
          Youtube,
          Instagram,
          created_at: new Date(),})
  
        if (error) {
         setError('Please fill all fields in the  form')
         console.log(error)
        }   
        if(data){
         console.log(data)
         setError(null)
      }
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
  


    const [username, setUsername] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)

  


    const handlesubmit = async (e) => {
      e.preventDefault();

      if(!name || ! moveAddress || !erc20Address || !url|| !bio || !website || ! twitter || !telegram || !discord || ! LinkedIn || !Youtube || !Instagram ) {
         setError('Please fill all fields in the  form')
         return
      }
      console.log(moveAddress, erc20Address, url, bio, website, twitter, telegram, discord, LinkedIn, Youtube, Instagram, )

      const {data, error} = await supabase 
      .from('profile')
      .upsert({moveAddress, name, erc20Address, url, bio, discord, website, twitter, telegram, discord, LinkedIn, Youtube, Instagram })

      if(error) {
         console.log(error)
         setError(error)
      }
      if(data){
         console.log(data)
         // setError(null)
      }
    }


  return (
    <div>
              <Typography variant= "h6"  sx={{color: "#fff", marginLeft: "400px", marginTop:"30px" ,position: "absolute" ,textAlign: "center"}}>
           Edit Profile 
        </Typography>
        <div style={{ marginLeft: "1100px", marginTop:"30px" ,position: "absolute" }}>    <button onClick={() =>  closeModal(true)} className='btnn'>X</button> </div>
        <div className='form'>

                <div className='fom'>
                <img alt='avatr' style={{marginTop: "0px", paddingRight: "0px"}} className='avat'  src={(require("/Users/macbook/dao/src/assets/Frame 995364.png"))} />
                <img alt='avatar' className='avatar3' src={(require("/Users/macbook/dao/src/assets/Frame 99756.png"))} />  <br />
                <form onSubmit={updateProfile}>
                <Box className='inputalign'>
                <Typography variant= "h7"  sx={{color: "#fff"}}>
                Display Name 
               </Typography>
               <input value={name} onChange={(e) => setName(e.target.value)} className='inoputtrack' type='text'   placeholder='Enter Your Display Name'/> 
               </Box> <br />
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
                <Typography variant= "h7"  sx={{color: "#fff"}}>
                Move Wallet Address 
               </Typography>
               <input value={moveAddress} onChange={(e) => setMoveAddress(e.target.value)} className='inoputtrack' type='text'   placeholder='Enter Your Move Wallet Address '/>
               </Box>
               <br />
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
                <Typography variant= "h7"  sx={{color: "#fff"}}>
                ERC-20 Wallet Address {erc20Address}
               </Typography>
               <input value={erc20Address} onChange={(e) => seterc20Address(e.target.value)} className='inoputtrack' type='text'   placeholder='Enter Your ERC-20 Wallet Address '/>
               </Box>
               <br />
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
                <Typography variant= "h7"  sx={{color: "#fff"}}>
                Public URL {url} 
               </Typography>
               <input value={url} onChange={(e) => setUrl(e.target.value)}className='inoputtrack' type='text'   placeholder='app.web3labdao.com/users/  Enter your public URL'/>
               </Box>
               <br />
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
                <Typography variant= "h7"  sx={{color: "#fff"}}>
               Bio {bio}
               </Typography>
               {/* <input className='inoputtrack' type='text'   placeholder='Enter Your Display Name'/> */}
               <textarea value={bio} onChange={(e) => setBio(e.target.value)} type='text' className='inoputtrack1' />
               </Box>
               <br />
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={website} onChange={(e) => setWebsite(e.target.value)}  className='inoputtrackk' type='url'   placeholder='Personal site link'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={twitter} onChange={(e) => setTwitter(e.target.value)}  className='inoputtrackk1' type='url'   placeholder='Twitter link or username'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={telegram} onChange={(e) => setTelegram(e.target.value)}  className='inoputtrackk2' type='url'   placeholder='Telegram link or username'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={discord} onChange={(e) => setDiscord(e.target.value)}  className='inoputtrackk3' type='url'   placeholder='Discord server link'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={LinkedIn} onChange={(e) => setLinkedIn(e.target.value)}  className='inoputtrackk4' type='url'   placeholder='LinkedIn link'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input value={Youtube} onChange={(e) => setYoutube(e.target.value)}  className='inoputtrackk5' type='url'   placeholder='Youtube link or username'/>
               </Box>
                           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Box className='inputalign'>
               <input  value={Instagram} onChange={(e) => setInstagram(e.target.value)} className='inoputtrackk6' type='url'   placeholder='Instagram link or username'/>
               </Box> <br />
                 {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
               <Box className='editbtn'>
               <button  className='edit'>
             <Typography variant= "body"  sx={{color: "#fff", urlAlign: "center"}}>
            Edit Profile 
        </Typography>
               </button>
               </Box>
                    
               </form>
               {show &&  <div className='pop'> <ConnectBtn closeModal = {setOpenModal}   /></div>  }
               {error && <div className='error'>  <img alt='logo' style={{ paddingLeft: "0px"}} src={(require("/Users/macbook/dao/src/assets/failure-16.png"))} />Error Somthing went wrong</div> }
               {user && 
               (
                  <div className='user'>
                     {user.map(user => (
                        <p>{user.name}</p>
                     ))}
                     </div>
               )}
               {/* {!show &&  <div className='pop'> <ConnectBtn closeModal = {setOpenModal}   /></div>  } */}
                </div>
                
</div>
    </div>
  )
}
