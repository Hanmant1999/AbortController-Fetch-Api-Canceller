import { useState } from 'react'
import './App.css'

function App() {
  const [controller ,setController] = useState(new AbortController());

  const callToApi = ()=>{
    fetch("https://developers.google.com/maps/apis-by-platform",{signal:controller.signal,mode:'no-cors'}).then((response)=>{
        return response.json() }).then((data)=>{
           console.log(data);
        }).catch((error)=>{
           console.log(error);
        })
  }

  const cancelApi = ()=>{
      controller.abort();
  }

  return (
    <>
      <h1>Api request  Canceller  AbortController </h1>
      <div className="card">
        <button onClick={callToApi}>
          CallToApi
        </button>
        <button onClick={cancelApi}>
          CancelApi
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
