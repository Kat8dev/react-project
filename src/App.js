import React from "react"
import Scene from "./components/scene/Scene"
import data from "./components/data"

function App() {
  const displayScenes = data.map((scene) => {
    return <Scene p={scene}/>
  })
  return (
  <div>
    {displayScenes}
  </div>
  );
}

export default App;
