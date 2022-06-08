import React from "react"
import Scene from "./components/scene/Scene"
import data from "./components/data"
import Button from "./components/Button"


function App() {
  const displayScenes = data.map((scene) => {
    return <Scene p={scene}/>
  })
  return (
  <div>
    <Button buttonText ={"Anterior"}/>
    <Button buttonText ={"Següent"}/>
    {displayScenes}
  </div>
  );
}

export default App;
