import React from 'react'
import './App.css'
import profile from './assets/profile.gif'
import TechList from './components/TechList'

function App(){
  return (
    <div>
      <h1>Hello Rocketseat</h1>
        <img src={profile} />
        <TechList />  
    </div>
  )} 

export default App