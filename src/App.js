import { useState } from "react"
import Card from "./components/Card"
import ScoreContext from "./context/ScoreContext"

const App = () => {

  const [score, setScore] = useState(0)
  const [hasSubmit, setHasSubmit] = useState(false)

  return (
    <ScoreContext.Provider value={{ score, setScore, hasSubmit, setHasSubmit }}>
      <Card />
    </ScoreContext.Provider>
  )
}

export default App