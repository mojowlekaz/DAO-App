import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,   createBrowserRouter, RouterProvider} from 'react-router-dom';
import ConnectBtn from './Components/ConnectBtn';
import MainPage from './Components/MainPage';
import Member from './Components/Member';
import EditProfile from './Responsiveness/EditProfile';
import ProfileChange from './Pages/ProfileChange';
import Router from './Components/Router';
import PrivateRoute from "/Users/macbook/dao/src/Components/PrivateRoute.js";
import {createContext} from "react";



const WalletContext = createContext();



const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
  path: "/main",
  element: <MainPage  />
    }, 
    {
    path: "profile",
    element: <Member/>

      },
    {
      path: "profile/editprofile",
      element: <Router>
        <ProfileChange />
      </Router>
        },
              {
                path: "/_profile",
                element: <MainPage  />,
                index: true
                  }

  ])



  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(

 <RouterProvider router={router} /> 

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter,   createBrowserRouter, RouterProvider} from 'react-router-dom';
// // import ConnectBtn from './Components/ConnectBtn';
// // import MainPage from './Components/MainPage';
// import Member from './Components/Member';
// import EditProfile from './Responsiveness/EditProfile';
// import ProfileChange from './Pages/ProfileChange';
// import Router from './Components/Router';
// import PrivateRoute from "/Users/macbook/dao/src/Components/PrivateRoute.js"
// import {createContext} from "react"


// const WalletContext = createContext();


// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//   path: "/main",
//   element: <MainPage  />
//     }, 
//     {
//       path: "/profile",
//       element: <Router >
//         <Member />
//            </Router>,
//            index: true
//         },
//         {
//           path: "/editprofile",
//           element: <PrivateRoute>
//                 <ProfileChange  />
//           </PrivateRoute>
//             },
//               {
//                 path: "/_profile",
//                 element: <MainPage  />,
//                 index: true
//                   }

//   ])



  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(

//     <WalletContext.Provider> <RouterProvider router={router} /> </WalletContext.Provider>

//   );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();