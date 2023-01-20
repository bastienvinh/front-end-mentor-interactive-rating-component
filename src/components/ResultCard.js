import './ResultCard.scss'

import { ReactComponent as ResultImage } from './../images/thank-you.svg'
import { useContext } from 'react'
import ScoreContext from '../context/ScoreContext'

const ResultCard = () => {
  const {score} = useContext(ScoreContext)

  return (
    <div className="result-card">
      <ResultImage />
      <p className='selected-score'>You selected {score} out of 5</p>
      <p className='thank-you'>Thank You!</p>
      <p className='appreciate-note'>
        We appreciate you taking the time to give a rating. <br />
        If you need more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ResultCard