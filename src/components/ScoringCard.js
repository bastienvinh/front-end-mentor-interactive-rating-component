import { ReactComponent as StarImage } from '../images/icon-star.svg';
import RoundedButton from './RoundedButton';
import Scores from './Scores';
import Button from './Button';

import './ScoringCard.scss';
import { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';

const ScoringCard = () => {
  const { setHasSubmit } = useContext(ScoreContext)

  return (
    <form onSubmit={() => setHasSubmit(true)} className="scoring-card">
      <RoundedButton><StarImage /></RoundedButton>
      <h2>How did we do ?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
      <Scores />
      <Button>SUBMIT</Button>
    </form>
  )
}

export default ScoringCard