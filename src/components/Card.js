import { Fragment, useContext } from 'react';
import ScoreContext from '../context/ScoreContext';
import ResultCard from './ResultCard';
import ScoringCard from './ScoringCard';

const Card = () => {

  const { hasSubmit } = useContext(ScoreContext)

  return (
    <Fragment>
      {hasSubmit ? <ResultCard /> : <ScoringCard />}
    </Fragment>
  )
}

export default Card