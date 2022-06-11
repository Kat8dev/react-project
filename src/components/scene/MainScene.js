import { useState } from "react"
import Scene from "./Scene"
import data from "../data"
import Button from "../Button"

export default function MainScene() {
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

    return (
        <div style={styles}>
          <Button myFunc={Previous} buttonText={"Anterior"} />
          <Button myFunc={Next} buttonText={"Següent"} />
          {displayScenes}
        </div>
      );
}