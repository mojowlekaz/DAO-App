import logo from './logo.svg';
import './App.css';
import Auth from './Components/Home';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ConnectBtn from './Components/ConnectBtn';
import Account from './Components/Member';
import Router from './Components/Router';
import Moralis from 'moralis';
import {createContext, useEffect, useState} from "react";
import {BrowserRouter,   Link,   Route, Routes, useNavigate} from 'react-router-dom';
import supabase from "/Users/macbook/dao/src/config/supabaseClient.js"
import { createClient } from '@supabase/supabase-js';




export const Context = createContext();


function App() {
  const [valid, setValid] = useState(true)


    const [session, setSession] = useState(null)
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
  

  

  return (


      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>

  );

  }
export default App;
  