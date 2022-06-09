import { useState } from "react"
import Scene from "./components/scene/Scene"
import data from "./components/data"
import Button from "./components/Button"
import Welcome from "./components/Welcome"

function App() {
  const [current, setCurrent] = useState(0)
  const displayScenes = data.map((scene, index) => {
    return <Scene active={index === current} key={index} p={scene.sceneText} />
  })
  function Previous() {
    current > 0 ? setCurrent(current - 1) : setCurrent(current)
  }

  function Next() {
    current < 3 ? setCurrent(current + 1) : setCurrent(current)
  }

  const styles = {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: 'url(' + data[current].img + ')',
  }

  //conditional rendering
  const [welcome, setWelcome] = useState(true)
  const StartScene = () => setWelcome(false)

  if (welcome === true) {
    return (
      <Welcome welcomeBtn={StartScene} />
    )
  }
  else {
    return (
      <div style={styles}>
        <Button myFunc={Previous} buttonText={"Anterior"} />
        <Button myFunc={Next} buttonText={"Següent"} />
        {displayScenes}
      </div>
    );
  }
}

export default App;
