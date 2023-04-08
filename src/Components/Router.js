import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Home from './Home';
import { ColorRing } from 'react-loader-spinner'
import Member from './Member';
import supabase from '../config/supabaseClient';


const ethers = require("ethers");
export default function Router({children}) {

  
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
    
  
return(
    <div>
    {!session ? <Home /> : children}
    </div>

)
}