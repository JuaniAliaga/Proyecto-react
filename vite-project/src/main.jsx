import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from "react-router-dom"
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyD3FW3Mi_VNPhSNxDQUCC93N-CTtn4KJSc",
  authDomain: "proyecto-react-88105.firebaseapp.com",
  projectId: "proyecto-react-88105",
  storageBucket: "proyecto-react-88105.appspot.com",
  messagingSenderId: "211589215162",
  appId: "1:211589215162:web:3974c14361c3f2daa02383"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
