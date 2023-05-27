import React, { useState } from 'react'
import Chat from './Chat'
import Dashboard from './Dashboard'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const user=JSON.parse(localStorage.getItem("user"))
  
    const [page,setpage]=useState("Dashboard")
    let setPage=(page_name)=>{
        setpage(page_name);
    }

  return (
    <>
    <Sidebar setPage={setPage} user={user}/>
    {page=="Dashboard" && <Dashboard user={user}/>}
    {page=="Chat" && <Chat user={user} />}

    
    </>
  )
}
