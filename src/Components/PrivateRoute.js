import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Home from './Home';
import { ColorRing } from 'react-loader-spinner'



const ethers = require("ethers");
export default function PrivateRoute({children}) {
    useEffect( ()=> {
        Connect();
    }, [])
    const [walletAddress, setWalletAddress] = useState("")
    const [login, setLogin] = useState(false)
    const [signed, setSigned] = useState(false)
    const [valid, setValid] = useState('')
    const [address, setAddress] = useState('')
    const [isSignature, setIsSignature] = useState()

    async function Connect() {
        if (typeof window.ethereum !== 'undefined') 
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum)            
            await provider.send("eth_requestAccounts", []);
            let signer = await provider.getSigner();
            // const message = "Verify Your Identity"
            // let signedMessage = await signer.signMessage (message);
            // const signerAddr = await ethers.utils.verifyMessage(message, signedMessage)
            // setIsSignature(signerAddr)
            console.log("Accounts address:", await signer.getAddress());
            let Accounts = await signer.getAddress();
            setWalletAddress(Accounts)
        } catch(error){
            alert("error while conecting")
        }else{
            alert('pleaseinstall metamsk')
        }
    }
  return (
    <div>

       {walletAddress.length > 0 ?  children : <div style={{justifyContent: "center", alignItems: "center", display: "flex", fontSize: "50px", color: "#fff", backgroundColor: "#0F1725", width: "100%", height: "100vh"}} className='sec'> Logging You In  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
/> </div> } 
    </div>
  )
}

