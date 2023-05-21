import React, { useState } from 'react'
import Chat from './Chat'
import Dashboard from './Dashboard'
import Sidebar from '../components/Sidebar'

export default function Home(props) {

    const [page,setpage]=useState("Dashboard")
    let setPage=(page_name)=>{
        setpage(page_name);
    }
  return (
    <>
    <Sidebar setPage={setPage} data={props.data}/>
    {page=="Dashboard" && <Dashboard/>}
    {page=="Chat" && <Chat />}

    
    </>
  )
}
