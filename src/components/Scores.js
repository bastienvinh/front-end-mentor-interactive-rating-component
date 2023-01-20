import { useContext } from "react";
import ScoreContext from "../context/ScoreContext";
import RoundedButton from "./RoundedButton"

import './Scores.scss';

const Scores = () => {
  const { score, setScore } = useContext(ScoreContext)

  return (
    <div className="scores">
      <RoundedButton isActive={score === 1} onClick={() => setScore(1)}>1</RoundedButton>
      <RoundedButton isActive={score === 2} onClick={() => setScore(2)}>2</RoundedButton>
      <RoundedButton isActive={score === 3} onClick={() => setScore(3)}>3</RoundedButton>
      <RoundedButton isActive={score === 4} onClick={() => setScore(4)}>4</RoundedButton>
      <RoundedButton isActive={score === 5} onClick={() => setScore(5)}>5</RoundedButton>
    </div>
  )
}

export default Scores