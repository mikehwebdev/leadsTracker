import React, {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [links, setLinks] = useState(JSON.parse(localStorage.getItem("links"))?? [])
  const [inputValue, setInputValue] = useState('')
  
  
function addressUpdater(e){
    setInputValue(e.target.value)
}

function submitAddress(){
  setLinks(
    prev => ([...links, <li key={inputValue}><a href={`https://${inputValue}`}>{inputValue}</a></li>])
  )
  setInputValue('')
  useEffect(()=>{
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])
}

function deleteLeads(){
  setLinks([])
}




  return (
    <div className="app">
        <input type="text" 
        placeholder="type address here..." 
        onChange={addressUpdater}
        value={inputValue}>
        </input>
        <button className="btn save-input" onClick={submitAddress}>Save input</button>
        <button className="btn delete" onClick={deleteLeads}>Delete all</button>
        <ul>{links}</ul>
    </div>
  )
}

export default App
