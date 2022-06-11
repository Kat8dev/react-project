import { useState } from "react"
import MainScene  from "./components/scene/MainScene"
import Welcome from "./components/Welcome"

function App() {
   
  const [welcome, setWelcome] = useState(true)
  const StartScene = () => setWelcome(false)

  return (
    welcome === true ? <Welcome welcomeBtn={StartScene} /> : <MainScene />
  ) 
  
}

export default App;
