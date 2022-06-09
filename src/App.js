import  { useState } from "react"
import Scene from "./components/scene/Scene"
import data from "./components/data"
import Button from "./components/Button"

function App() {
  const [current, setCurrent] = useState(0)
  const displayScenes = data.map((scene) => {
    return <Scene key={scene.id} p={scene.sceneText}/>
  })

console.log(displayScenes)
  return (
  <div>
    <Button myfunc={() => setCurrent()} buttonText ={"Anterior"}/>
    <Button myfunc={() => alert("algo")} buttonText ={"Següent"}/>
    {displayScenes}
  </div>
  );
}

export default App;
 