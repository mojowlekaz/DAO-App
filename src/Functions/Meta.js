const ethers = require("ethers")

export default async function connect(){
        if (typeof window.ethereum !== 'undefined') 
        try{
        const provider = new ethers.providers.Web3Provider(window.ethereum)            
        await provider.send("eth_requestAccounts", []);
        let signer = await provider.getSigner();
        console.log("Accounts address:", await signer.getAddress());
        let Accounts = await signer.getAddress();
          } 
          catch(err){
        
          }
          else {
      
          }
          return true;
        
        }
        
    

        async function signIn() {
          if(!email) return(alert('Please fill in email'))
          const [error, data] = await supabase.auth.signIn({
            email
          })
          if(error){
            console.log({error})
          } else{
            setSubmitted(true)
          }
          if(submitted) {
            return(
              <div>
                <h1>Please check your email for confimation link</h1>
              </div>
            )
          }
        }



        const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');
        // const navigate = useNavigate()
      
        useEffect( () => {
          const {data: authLister} = supabase.auth.onAuthStateChange((event, session) => {
            handleAuthChange(event, session)
            if(event === 'SIGNED_IN'){
              setAuthenticatedState('authenticated')
              // navigate('/profile')
            }
            if( event === 'SIGNED_OUT') {
              setAuthenticatedState('not-authenticated')
            }
          })
      
      
        }, [])
      
        async function handleAuthChange(event, session) {
          await fetch('/Pages/auth',  {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'same-origin',
            body: JSON.stringify({event , session})
          })
        }
      
        {authenticatedState === 'not-authenticated' ? <Link to='/profile'>Go</Link> : ""}
        
        

        import React, { useState } from 'react';
import supabase from '../config/supabaseClient';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Member from './Member';

export default function Router() {

    useEffect ( () => {
        FetchProfile();
    }, [])
    const [profile, setProfile] = useState(null)


    async function FetchProfile() {
        const profileData = await supabase.auth.user();
        if(!profileData){
         Navigate('/')
        }else{
            setProfile(profileData)
        }
    }


    async function signOut() {
        await supabase.auth.signOut();
        Navigate('/')

    }

    if(!profile) return(null)
  return (
    <div>
      <Member />
      <h1>hi, {profile.email}</h1>
      <h1>Your, {profile.id}</h1>
      <button onClick={signOut}>SiinOut</button>
    </div>
  )
}
