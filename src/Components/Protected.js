import React from 'react';
import supabase from '../config/supabaseClient';




export default function Profile() {
  return (
    <div>
      
    </div>
  )
}

export async function getServerSideProps({req }){
   const {user} = await  supabase.auth.api.getUserByCookie(req);
   if(!user){
    return(
        <p>go home</p>
    )
   }
   return{

    welcome
   }

}